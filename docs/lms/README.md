# 🚀 SSVproff® LMS Quick Start Guide

## Быстрый старт тестового окружения

### Предварительные требования
- Docker & Docker Compose установлены
- Порт 8080 и 8081 свободны

### 1. Запуск среды

```bash
cd /workspace/docs/lms

# Убедитесь, что файл .env существует
ls -la .env

# Запуск контейнеров
docker-compose up -d

# Проверка статуса
docker-compose ps
```

### 2. Доступ к сервисам

| Сервис | URL | Логин/Пароль |
|--------|-----|--------------|
| **WordPress** | http://localhost:8080 | (настраивается при первом входе) |
| **phpMyAdmin** | http://localhost:8081 | ssvproff_user / SecureUserPassword2026! |
| **Database** | localhost:3306 | ssvproff_user / SecureUserPassword2026! |

### 3. Первоначальная настройка WordPress

1. Откройте http://localhost:8080
2. Выберите язык (Russian)
3. Заполните данные сайта:
   - Название: **SSVproff® Academy**
   - Логин: **admin**
   - Пароль: **[Придумайте надежный пароль]**
   - Email: **your@email.com**
4. Нажмите "Установить WordPress"

### 4. Установка обязательных плагинов

Перейдите в **Плагины → Добавить новый**:

1. **LearnDash LMS** (загрузить .zip файл лицензии)
2. **Kadence Theme** (поиск и установка)
3. **H5P** (поиск и установка)
4. **WooCommerce** (для будущей монетизации)

### 5. Импорт структуры курса

1. Перейдите в **LearnDash LMS → Курсы**
2. Создайте новый курс: **"Gastric Adenocarcinoma 2026"**
3. Добавьте секцию: **"Module 1: Fundamentals"**
4. Добавьте урок: **"1.1 Surgical Anatomy"**

### 6. Тестирование

1. Создайте тестового пользователя: **Users → Add New** (role: Student)
2. Войдите под этим пользователем в режиме инкогнито
3. Проверьте доступ к курсу

---

## 🔧 Управление контейнерами

```bash
# Остановка
docker-compose down

# Перезапуск
docker-compose restart

# Просмотр логов
docker-compose logs -f wordpress

# Полная очистка (удаление данных!)
docker-compose down -v
```

---

## 📁 Структура папок

```
/workspace/docs/lms/
├── docker-compose.yml      # Конфигурация контейнеров
├── .env                    # Переменные окружения (пароли)
├── wp-plugins/             # Плагины WordPress (монтируется в контейнер)
├── wp-themes/              # Темы WordPress
└── uploads/                # Загруженные файлы (видео, изображения)
```

---

## 🆘 Решение проблем

**Ошибка подключения к базе данных:**
- Проверьте, что контейнер `db` запущен: `docker-compose ps db`
- Подождите 30 секунд после запуска для инициализации MySQL

**Порт 8080 занят:**
- Измените порт в `docker-compose.yml`: `"8081:80"` на `"9090:80"`

**Медленная работа:**
- Увеличьте лимиты памяти в `docker-compose.yml` для контейнера WordPress

---

*Документация создана для команды SSVproff®. Версия 1.0*
