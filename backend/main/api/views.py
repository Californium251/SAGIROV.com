from rest_framework.viewsets import ModelViewSet
from ..models import Main
from .serializers import MainSerializer

class MainViewSet(ModelViewSet):
    queryset = Main.objects.all()
    serializer_class = MainSerializer