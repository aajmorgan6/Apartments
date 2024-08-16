from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from apartment.serializers import ApartmentSerializer
from apartment.models import Apartment

# Create your views here.

@csrf_exempt
def aparment_list(request):
    '''
    For GET    --> List all apartments
    for POST   --> add a new apartment
    '''
    if request.method == "GET":
        data = ApartmentSerializer(Apartment.objects.all(), many=True).data
        return JsonResponse(data, status=200, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = ApartmentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            data = ApartmentSerializer(Apartment.objects.all(), many=True).data
            return JsonResponse(data, status=201, safe=False)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def apartment_detail(request, pk):
    try:
        apartment = Apartment.objects.get(pk=pk)
    except Apartment.DoesNotExist:
        return HttpResponse(status=400)

    if request.method == "GET":
        serializer = ApartmentSerializer(apartment)
        return JsonResponse(serializer.data)

    elif request.method == "DELETE":
        apartment.delete()
        data = ApartmentSerializer(Apartment.objects.all(), many=True).data
        return JsonResponse(data=data, safe=False)