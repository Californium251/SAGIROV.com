FROM python:3.9.6
WORKDIR /code
COPY backend/requirements.txt .
RUN export PATH=$PATH:/usr/local/python3/bin && pip install gunicorn && gunicorn far-friction:far-friction
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
ENV PORT=8000
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]