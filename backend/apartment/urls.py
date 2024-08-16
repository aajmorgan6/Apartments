from django.urls import path
from apartment import views

urlpatterns = [
    path('all/', views.aparment_list),
    path('all/<int:pk>/', views.apartment_detail)
]