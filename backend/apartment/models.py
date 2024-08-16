from django.db import models

# Create your models here.

class Apartment(models.Model):
    name = models.CharField(max_length=200) # address
    sqr_ft = models.FloatField(blank=False)
    price = models.FloatField(blank=False)
