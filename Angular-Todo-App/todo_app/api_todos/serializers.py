from rest_framework import serializers

from todo_app.api_todos.models import Todo


class TodoForListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title')


class TodoForCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        # fields = ('id', 'title', 'description', 'category')
        fields = ('id', 'title', 'description')


    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)


class TodoForDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'is_done')


# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = ('id', 'name')