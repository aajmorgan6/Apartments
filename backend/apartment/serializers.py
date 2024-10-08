from rest_framework import serializers
from apartment.models import Apartment

class ApartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apartment
        fields = ['id', 'name', 'sqr_ft', 'price']