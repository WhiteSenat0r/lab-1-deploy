# Етап збірки
FROM node:18-alpine as build

# Встановлення робочої директорії
WORKDIR /app

# Копіювання package.json та package-lock.json
COPY package*.json ./

# Встановлення залежностей
RUN npm ci

# Копіювання всіх файлів проекту
COPY . .

# Збірка проекту
RUN npm run build

# Встановлення serve для роздачі статичних файлів
RUN npm install -g servedocker build -t vite-react-app

# Відкриття порту 3000
EXPOSE 3000

# Запуск serve для роздачі збірки
CMD ["serve", "-s", "dist", "-l", "3000"]