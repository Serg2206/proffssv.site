# proffssv.site

Документация и сайт проекта, построенный на **MkDocs** с темой **Material**.

## 🚀 Быстрый старт

### Установка зависимостей

```bash
pip install mkdocs mkdocs-material
```

Или через pyproject.toml:

```bash
pip install -e .
```

### Локальный запуск

```bash
mkdocs serve
```

Откройте [http://127.0.0.1:8000](http://127.0.0.1:8000) в браузере.

### Сборка для публикации

```bash
mkdocs build --clean
```

Собранный сайт появится в папке `site/`.

## 📁 Структура проекта

```
/workspace/
├── docs/                    # Исходные файлы документации
│   ├── assets/              # Статические файлы (favicon, изображения)
│   ├── index.md             # Главная страница
│   ├── about.md             # О проекте
│   ├── support.md           # Поддержка
│   ├── consultations.md     # Консультации
│   └── recommend.md         # Рекомендации
├── .github/workflows/       # GitHub Actions workflow
├── mkdocs.yml               # Конфигурация MkDocs
├── pyproject.toml           # Зависимости проекта
└── README.md                # Этот файл
```

## 🔧 Конфигурация

Основная конфигурация находится в файле [`mkdocs.yml`](mkdocs.yml):

- Тема: Material for MkDocs
- Палитра: светлая/тёмная с переключением
- Плагины: поиск
- Расширения Markdown: admonition, toc, pymdownx

## 🌐 Публикация

Сайт автоматически публикуется на GitHub Pages при пуше в ветку `main` или `master` через GitHub Actions.

Workflow: [`.github/workflows/mkdocs-gh-pages.yml`](.github/workflows/mkdocs-gh-pages.yml)

## 📝 Добавление контента

1. Создайте новый `.md` файл в папке `docs/`
2. Добавьте ссылку в навигацию в `mkdocs.yml`
3. Закоммитьте изменения

## 🤝 Вклад в проект

1. Fork репозиторий
2. Создайте ветку (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

---

**Сайт:** [proffssv.site](https://proffssv.site)  
**YouTube:** [@SSVproff-22.06](https://www.youtube.com/@SSVproff-22.06)
