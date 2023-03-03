"""main URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from views import apiResponse
from django.contrib import admin
from django.urls import path
from . import api
from rest_framework.views import APIView
from django.http import JsonResponse


class apiResponse(APIView):
    def get(self, request):
        return JsonResponse({'some': 'data', 'id': 'id'})


urlpatterns = [
    path('api/json/<int:param_id>', api.api_response, name='api_response'),
    path('admin/', admin.site.urls),
    path('api/<int:param_id>', api.api_response, name='api_response'),
]
