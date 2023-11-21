# Используйте подходящий базовый образ, например, Node
FROM node:latest

# Установите рабочую директорию
WORKDIR /app

# Копируйте файлы проекта
COPY package.json .
COPY src/ ./src

# Установите зависимости и выполните сборку
RUN npm install
RUN npm run build

# Используйте сервер для раздачи статических файлов, например, serve
CMD ["serve", "-s", "build"]