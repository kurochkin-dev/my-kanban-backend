# Используйте официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем конкретную версию npm
RUN npm install -g npm@9.8.1

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Экспонируем порт, который использует Nest.js
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "run", "start"]
