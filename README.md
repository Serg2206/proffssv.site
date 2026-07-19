# proffssv.site — выведен из эксплуатации

Сайт переехал: домен **proffssv.site** отдаёт 301-редирект на
**https://ssvnauka.com** (Vercel-проект `ssvnauka-net`).
Актуальная разработка ведётся в
[surgical-research-platform-mvp](https://github.com/Serg2206/surgical-research-platform-mvp).

Хронология вывода (июль 2026):

- домены `proffssv.site` и `www.proffssv.site` добавлены в Vercel-проект
  `ssvnauka-net` с 301-редиректом на `https://ssvnauka.com/`;
- из DNS-зоны (adm.tools / ukraine.com.ua) удалены A-записи GitHub Pages
  (`185.199.109–111.153`), апекс указывает только на Vercel (`76.76.21.21`);
- из репозитория удалены `CNAME`, `docs/CNAME` и workflow деплоя
  GitHub Pages.

Детали и чеклист миграции: [SSVNAUKA-NET-ANALYSIS.md](SSVNAUKA-NET-ANALYSIS.md).

---

## Историческая справка

Здесь находился MkDocs-сайт (Material for MkDocs), публиковавшийся на
GitHub Pages с кастом-доменом proffssv.site. Исходники сохранены в `docs/`.

Локальная сборка, если понадобится:

```bash
pip install mkdocs-material
mkdocs serve
mkdocs build
```
