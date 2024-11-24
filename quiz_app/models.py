from django.db import models
from django.contrib.auth.models import User


class Game(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    host = models.ForeignKey(User, related_name='hosted_games', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)


class Question(models.Model):
    game = models.ForeignKey(Game, related_name='questions', on_delete=models.CASCADE)
    question_text = models.TextField()
    option_a = models.CharField(max_length=255)
    option_b = models.CharField(max_length=255)
    option_c = models.CharField(max_length=255)
    option_d = models.CharField(max_length=255)
    correct_option = models.CharField(max_length=1)  # A, B, C, D


class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, related_name='players', on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    connected = models.BooleanField(default=True)
class Question(models.Model):
    question_text = models.CharField(max_length=255)
    option_a = models.CharField('Вариант A', max_length=255)
    option_b = models.CharField('Вариант B', max_length=255)
    option_c = models.CharField('Вариант C', max_length=255)
    option_d = models.CharField('Вариант D', max_length=255)
    correct_answer = models.CharField('Правильный ответ', max_length=1)

    def __str__(self):
        return self.question_text

# quiz_app/models.py
class Answer(models.Model):
    user = models.CharField('Пользователь', max_length=100)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user_answer = models.CharField('Ответ пользователя', max_length=1, null=True, blank=True)
    correct = models.BooleanField('Правильно ли')

    def __str__(self):
        return f"{self.user} - {self.question.question_text}"

