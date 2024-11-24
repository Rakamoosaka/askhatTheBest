from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Question, Answer

# quiz_app/views.py
def quiz(request):
    if request.method == 'POST':
        user = request.POST.get('user')
        answers = []
        score = 0
        total = Question.objects.count()
        for q in Question.objects.all():
            question_key = f'question_{q.id}'
            selected_option = request.POST.get(question_key)
            if selected_option is None:
                selected_option = ''
                correct = False
            else:
                correct = selected_option == q.correct_answer
                if correct:
                    score += 1

            # Save the user's answer
            Answer.objects.create(
                user=user,
                question=q,
                user_answer=selected_option,
                correct=correct
            )
            answers.append({
                'question': q.question_text,
                'selected': selected_option if selected_option else 'Не отвечено',
                'correct': q.correct_answer,
                'is_correct': correct
            })
        context = {
            'score': score,
            'total': total,
            'user': user,
            'answers': answers
        }
        return render(request, 'quiz_app/results.html', context)
    else:
        questions = Question.objects.all()
        context = {
            'questions': questions
        }
        return render(request, 'quiz_app/index.html', context)



def results(request):
    return render(request, 'quiz_app/results.html')
