FROM python:3.9.6
WORKDIR /code
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ .
ENV PORT=8000
CMD ["gunicorn", "your_project_name.wsgi:application", "--bind", "0.0.0.0:$PORT"]