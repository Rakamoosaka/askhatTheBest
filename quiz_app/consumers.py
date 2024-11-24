import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Game, Player, Question

class GameConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.game_id = self.scope['url_route']['kwargs']['game_id']
        self.room_group_name = f'game_{self.game_id}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)

        if data['type'] == 'submit_answer':
            await self.handle_answer(data)
        elif data['type'] == 'start_game':
            await self.start_game(data)

    async def handle_answer(self, data):
        # Получаем данные ответа
        player = await Player.objects.get(id=data['player_id'])
        question = await Question.objects.get(id=data['question_id'])

        if question.correct_option == data['selected_option']:
            player.score += 10
            player.save()

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'update_score',
                'player_id': player.id,
                'score': player.score
            }
        )

    async def start_game(self, data):
        game = await Game.objects.get(id=self.game_id)
        first_question = await game.questions.first()

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'game_started',
                'question': {
                    'id': first_question.id,
                    'text': first_question.question_text,
                    'options': [
                        first_question.option_a,
                        first_question.option_b,
                        first_question.option_c,
                        first_question.option_d,
                    ]
                }
            }
        )

    async def update_score(self, event):
        await self.send(text_data=json.dumps({
            'type': 'update_score',
            'player_id': event['player_id'],
            'score': event['score']
        }))

    async def game_started(self, event):
        await self.send(text_data=json.dumps({
            'type': 'game_started',
            'question': event['question']
        }))
