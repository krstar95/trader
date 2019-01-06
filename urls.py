from django.conf.urls import url

from trader import views


urlpatterns = [
    url(r'^$', views.trader),
]
