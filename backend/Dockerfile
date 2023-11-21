FROM python:3.9.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /
WORKDIR /main
COPY requirements.txt /main/
RUN pip install -r requirements.txt
COPY . /main/
CMD gunicorn callous-passenger.wsgi:application --bind 0.0.0.0:$PORT
