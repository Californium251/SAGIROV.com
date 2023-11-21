from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import MainViewSet

main_router = DefaultRouter()
main_router.register('/', MainViewSet)