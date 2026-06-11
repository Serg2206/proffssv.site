# proffssv.site

Официальный сайт профессора Сушкова — хирурга, исследователя и автора.

## О проекте

Сайт построен с использованием **MkDocs** и темы **Material for MkDocs**, размещён на **GitHub Pages**.

## Быстрый старт

### Установка зависимостей

```bash
pip install mkdocs-material
```

Или с использованием pyproject.toml:

```bash
pip install -e ".[docs]"
```

### Локальный запуск

```bash
mkdocs serve
```

Сайт будет доступен по адресу: http://127.0.0.1:8000

### Сборка для публикации

```bash
mkdocs build
```

Собранный сайт появится в папке `site/`.

## Развёртывание

Сайт автоматически развёртывается на GitHub Pages при пуше в ветку `main` или `master` благодаря GitHub Actions.

## Структура проекта

```
proffssv.site/
├── .github/workflows/    # GitHub Actions workflow
├── docs/                 # Исходные файлы документации
│   ├── index.md          # Главная страница
│   └── about.md          # Страница "О проекте"
├── CNAME                 # Домен для GitHub Pages
├── mkdocs.yml            # Конфигурация MkDocs
├── pyproject.toml        # Зависимости проекта
└── README.md             # Этот файл
```

## Поддержка

- YouTube: [@SSVproff-22.06](https://www.youtube.com/@SSVproff-22.06)
- Buy Me a Coffee: [buymeacoffee.com/ssvproff](https://www.buymeacoffee.com/ssvproff)

## Лицензия

© 2024 Профессор Сушков