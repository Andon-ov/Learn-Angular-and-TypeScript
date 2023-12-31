from django.contrib import admin
from django.urls import path

from todo_app.api_todos.views import ListCreateTodoApiView, DetailsTodoApiView, DetailsTodoApiView

urlpatterns = (
    path('', ListCreateTodoApiView.as_view(), name='api list todo'),
    path('<int:pk>/', DetailsTodoApiView.as_view(), name='api details todo'),
    path('delete/<int:pk>/', DetailsTodoApiView.as_view(), name='api delete todo'),

    # path('categories/', ListCategoriesApiView.as_view(), name='api list categories'),
)
