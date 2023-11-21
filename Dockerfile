# Используйте подходящий базовый образ, например, Node
FROM node:latest

# Установите рабочую директорию
WORKDIR /app

# Копируйте файлы проекта
COPY package.json .
COPY public/ public/
COPY src/ src/


# Установите зависимости и выполните сборку
RUN NODE_ENV=development npm i
RUN npm install
RUN npm install -g serve
RUN npm run build

# Используйте сервер для раздачи статических файлов, например, serve
CMD ["serve", "-s", "build"]