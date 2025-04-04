from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate

User = get_user_model()

class RegistroSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'
	def create(self, clean_data):
		user_obj = User.objects.create_user(email=clean_data['email'], password=clean_data['password'])
		user_obj.username = clean_data['email']
		user_obj.save()
		return user_obj

class LoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()

	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		if not user:
			raise serializers.ValidationError("This user does not exist or please check credentials again")
		return user

