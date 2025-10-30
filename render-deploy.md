# 🚀 Деплой на Render.com

## Настройки для Render

### Build Command:
```bash
npm ci && npm run build
```

### Альтернативные команды при ошибках:
```bash
# Если получаете ENOTEMPTY ошибку
rm -rf node_modules && npm install && npm run build

# Или используйте принудительную установку
npm install --force && npm run build

# Самый надежный вариант
npm ci --prefer-offline && npm run build
```

### Start Command:
```bash
npm run preview
```

### Publish Directory:
```
dist
```

### Environment:
- **Node Version**: 18.x или выше
- **Build Tool**: Vite
- **Package Manager**: npm

## Пошаговая инструкция:

### 1. **Подготовка репозитория**
```bash
# Убедитесь, что package.json содержит правильные скрипты
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### 2. **Создание сервиса на Render**
1. Зайдите на [render.com](https://render.com)
2. Нажмите **"New +"** → **"Static Site"**
3. Подключите ваш GitHub репозиторий

### 3. **Настройки деплоя**
Введите следующие параметры:

**Name**: `web3-education-longread`

**Branch**: `main`

**Build Command**:
```bash
npm install && npm run build
```

**Publish Directory**:
```
dist
```

### 4. **Переменные окружения** (обязательно добавьте)
```
NODE_VERSION=18
NPM_CONFIG_CACHE=/tmp/.npm
```

### 5. **Дополнительные настройки для исправления ENOTEMPTY**
В разделе Environment Variables добавьте:
```
NODE_OPTIONS=--max-old-space-size=4096
NPM_CONFIG_FUND=false
NPM_CONFIG_AUDIT=false
```

## 🔧 Альтернативные решения если проблема остается:

### Вариант 1: Полная очистка
Build Command:
```bash
rm -rf node_modules package-lock.json && npm install && npm run build
```

### Вариант 2: Использование Yarn вместо npm
Build Command:
```bash
yarn install && yarn build
```

### Вариант 3: Принудительная установка
Build Command:
```bash
npm install --force --no-cache && npm run build
```

### Вариант 4: Создание .nvmrc файла
Создайте файл `.nvmrc` в корне проекта:
```
18
```

### Вариант 5: Использование render.yaml (РЕКОМЕНДУЕТСЯ)
Создан файл `render.yaml` в корне проекта с оптимизированной конфигурацией.

**Новые настройки в Render:**
1. Удалите текущий сервис
2. Создайте новый сервис
3. Выберите "Use render.yaml"
4. Render автоматически применит все настройки из файла

### Вариант 6: Альтернативные платформы
Если Render продолжает давать ошибки, рекомендую:
- **Vercel** - отлично работает с Vite
- **Netlify** - простой деплой через drag&drop
- **GitHub Pages** - уже настроен в проекте

## 🎯 Готовое решение
У вас есть файл `longread-standalone.html` - это полностью автономная версия приложения, которую можно:
1. Загрузить на любой хостинг
2. Открыть локально в браузере
3. Разместить на GitHub Pages без сборки

### 5. **Автоматический деплой**
- Render автоматически соберет и задеплоит проект
- При каждом push в main ветку будет происходить автоматический редеплой

## Альтернативные команды сборки:

### Для TypeScript проектов:
```bash
npm ci && npm run build
```

### С проверкой линтера:
```bash
npm install && npm run lint && npm run build
```

### С очисткой кеша:
```bash
npm install --force && npm run build
```

## Проверка готовности:

Убедитесь, что в package.json есть:
```json
{
  "scripts": {
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

## Troubleshooting:

### Если сборка падает:
1. **Проверьте Node.js версию** в настройках Render
2. **Добавьте переменную** `NODE_VERSION=18`
3. **Используйте** `npm ci` вместо `npm install`

### Если статические файлы не загружаются:
1. **Проверьте** что Publish Directory = `dist`
2. **Убедитесь** что vite.config.ts настроен правильно

## Готовые команды для копирования:

**Build Command**:
```
npm install && npm run build
```

**Start Command** (для Static Site не нужен):
```
npm run preview
```

**Publish Directory**:
```
dist
```

После успешного деплоя ваш лонгрид будет доступен по адресу:
`https://ваш-проект-название.onrender.com`
