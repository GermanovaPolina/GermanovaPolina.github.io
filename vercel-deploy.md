# 🚀 Деплой на Vercel

## 📋 Пошаговая инструкция

### 1. **Подготовка проекта**
Убедитесь, что в проекте есть файлы:
- `vercel.json` - конфигурация для Vercel
- `.nvmrc` - версия Node.js
- Обновленный `package.json` с React 18

### 2. **Деплой через GitHub**
1. Загрузите код в GitHub репозиторий
2. Зайдите на [vercel.com](https://vercel.com)
3. Нажмите "New Project"
4. Выберите ваш GitHub репозиторий
5. Vercel автоматически определит настройки из `vercel.json`

### 3. **Ручной деплой**
Если GitHub деплой не работает:
1. Установите Vercel CLI: `npm i -g vercel`
2. В папке проекта: `vercel`
3. Следуйте инструкциям CLI

### 4. **Альтернативный способ - статический файл**
Самый простой способ:
1. Загрузите файл `longread-standalone.html` на Vercel
2. Переименуйте его в `index.html`
3. Готово!

## 🔧 Настройки в vercel.json

```json
{
  "buildCommand": "npm ci && npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm ci",
  "framework": "vite"
}
```

## ⚡ Быстрое решение

Если проблемы с npm продолжаются, используйте готовый файл:
- `longread-standalone.html` - полностью автономная версия
- Просто загрузите его как статический сайт

## 🌐 Другие платформы

Если Vercel не работает:
- **Netlify**: Drag & Drop деплой
- **GitHub Pages**: Уже настроен в проекте
- **Surge.sh**: `npm i -g surge && surge dist`
