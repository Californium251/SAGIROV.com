FROM python:3.9.6
WORKDIR /code
COPY requirements.txt .
RUN pip install gunicorn && gunicorn backend:backend
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
ENV PORT=8000
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]