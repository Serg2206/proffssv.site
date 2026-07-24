# Развёртывание CDSS "Острый Живот 2026" на ssvnauka.net

## ✅ Статус

- **Приложение**: Готово к продакшену
- **Ошибки**: Исправлены (IndexOf bug, missing fonts, Kimi SDK)
- **Тестирование**: Пройдено локально
- **Ветка**: `claude/test-deploy-ssvnauka-09d3gm`

## 🔧 Что было сделано

### 1. Исправления ошибок
- ✅ Добавлен `assets/error-fix.js` - защита от `Cannot read properties of undefined (reading 'indexOf')`
- ✅ Заменены шрифты с `fonts.loli.net` на `fonts.googleapis.com` (более надёжный CDN)
- ✅ Удалён проблемный скрипт Kimi SDK
- ✅ Добавлена глобальная обработка ошибок в index.html

### 2. Конфигурация проекта
- ✅ `package.json` - зависимости React 19 + Vite
- ✅ `vite.config.ts` - конфигурация Vite
- ✅ `tsconfig.json` - TypeScript конфиг
- ✅ `tailwind.config.js` - Tailwind CSS
- ✅ `postcss.config.js` - PostCSS
- ✅ `vercel.json` - конфигурация Vercel

### 3. Оптимизация
- ✅ Cache-Control для assets (31536000 сек = 1 год)
- ✅ Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- ✅ Правильная маршрутизация для SPA

## 📋 Локальное тестирование

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Собрать для production
npm run build

# Просмотреть production сборку
npm run preview
```

## 🚀 Развёртывание на ssvnauka.net (Vercel)

### Вариант 1: Через Vercel CLI

```bash
# Установить Vercel CLI
npm i -g vercel

# Авторизоваться
vercel login

# Развернуть на ssvnauka.net
vercel --prod --name cdss-ostry-zhivot
```

### Вариант 2: Через GitHub Actions (рекомендуется)

1. Подключить репо к Vercel в dashbaord.vercel.com
2. Указать переменные окружения (если нужны)
3. При push в ветку - автоматический деплой

### Вариант 3: Через Vercel Dashboard

1. Перейти на vercel.com
2. New Project → Import Git Repository
3. Выбрать `Serg2206/proffssv.site`
4. Root Directory: `.` (текущая папка)
5. Build Command: `npm run build` (если нужно) или пропустить для static site
6. Output Directory: `.` (используем index.html и assets как есть)
7. Deploy

## 🔐 DNS Настройка (после деплоя на Vercel)

```bash
# Для ssvnauka.net на Wix DNS:
# A запись апекса:     64.29.17.1, 216.198.79.1 (Vercel IPs)
# www CNAME:           3f68b5ce40728f36.vercel-dns-017.com

# Для старого домена proffssv.site (если нужен редирект):
# Перенаправить на ssvnauka.net через 301 редирект в Vercel
```

## 📊 Функциональность приложения

- ✅ **qSOFA калькулятор** - оценка тяжести инфекции
- ✅ **Биомаркерный калькулятор** - 23 маркера (IL-6, CRP, PCT и т.д.)
- ✅ **Молекулярный патогенез** - интерактивная анимация каскада
- ✅ **AI-ассистент** - справочник с ответами на вопросы
- ✅ **PWA** - работает offline (Service Worker)
- ✅ **Платная подписка** - Pro версия ($4.99/мес)

## 🔍 SEO & Мониторинг

### Google Search Console
```
Домен: ssvnauka.net
Статус: Проверить индексацию
```

### OG Tags (настроены)
```
og:title: CDSS Острый Живот 2026
og:description: Клинический справочник для экстренной хирургии
og:type: website
```

## ⚠️ Известные ограничения

1. **Hash Router** (`/#/`) - не SEO-оптимально, но нормально для SPA
   - Решение: Перейти на BrowserRouter + SSR при необходимости

2. **Размер JS** - 956KB (большой бандл)
   - Решение: Lazy loading, code splitting

3. **API endpoint** - ChatWidget может требовать backend
   - Решение: Настроить backend или использовать mock-данные

## 🔄 Обновления

При необходимости обновить приложение:

1. Отредактировать файлы в `assets/` или `index.html`
2. Закоммитить: `git commit -am "Update CDSS app"`
3. Пушить: `git push origin claude/test-deploy-ssvnauka-09d3gm`
4. На Vercel автоматически развернётся новая версия

## 📞 Поддержка

- **Технический контакт**: ssvnauka@gmail.com
- **Репо**: https://github.com/Serg2206/proffssv.site
- **Ветка разработки**: `claude/test-deploy-ssvnauka-09d3gm`

---

**Дата обновления**: 24.07.2026
**Статус**: Готово к монетизации на ssvnauka.net ✅
