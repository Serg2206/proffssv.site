# ssvnauka.net — анализ и план настройки

Дата анализа: 19.07.2026. Проверка выполнялась по DNS-записям обеих зон, состоянию
репозитория `Serg2206/proffssv.site` и истории деплоев GitHub Actions.
Содержимое живых сайтов из среды анализа недоступно (сетевые ограничения),
поэтому пункты «проверить в браузере» отмечены отдельно.

---

## 1. Текущее состояние

### 1.1. ssvnauka.net (новый домен)

| Параметр | Значение | Вывод |
|---|---|---|
| NS-серверы | `ns6.wixdns.net`, `ns7.wixdns.net` | DNS-зоной управляет **Wix** (домен куплен/подключён через Wix) |
| A-записи апекса | `64.29.17.1`, `216.198.79.1` | Актуальные IP **Vercel** — апекс уже направлен на Vercel |
| `www` CNAME | `3f68b5ce40728f36.vercel-dns-017.com` | Домен **привязан к конкретному проекту Vercel** (новый формат per-project DNS) |
| TXT (SPF) | `v=spf1 include:_spf.google.com ~all` | Почта настроена на отправку через **Google** |
| TXT (верификация) | `google-site-verification=AM2UY…` | Домен подтверждён в **Google Search Console** |

Итог: DNS для ssvnauka.net настроен корректно и указывает на Vercel.
Судя по README этого репозитория, там развёрнут новый проект
(`surgical-research-platform-mvp`).

### 1.2. proffssv.site (старый домен)

| Параметр | Значение | Вывод |
|---|---|---|
| NS-серверы | `a.ns.services`, `b.ns.gold`, `c.ns.express` | DNS у **ukraine.com.ua** (подтверждается SPF `_spf.ukraine.com.ua`) |
| A-записи апекса | `185.199.109.153`, `185.199.110.153`, `185.199.111.153` **и** `76.76.21.21` | ⚠️ **Конфликт**: три IP GitHub Pages смешаны со старым IP Vercel |
| `www` CNAME | `cname.vercel-dns.com` | www указывает на Vercel (старый универсальный формат) |

Два конкретных дефекта:

1. **Смесь хостингов на апексе.** Резолвер отдаёт клиенту случайный IP из
   четырёх, поэтому часть посетителей `proffssv.site` попадает на GitHub Pages
   (этот MkDocs-сайт), а часть — на Vercel. Поведение недетерминированное,
   возможны ошибки TLS-сертификата на Vercel-ветке, если домен там не добавлен.
2. **Неполный набор GitHub Pages.** Из четырёх официальных IP отсутствует
   `185.199.108.153` — даже для чистой конфигурации GitHub Pages набор неполон.

### 1.3. Репозиторий proffssv.site и GitHub Pages

README объявляет: «репозиторий архивирован, домен больше не использует GitHub
Pages». **Фактически это не так:**

- репозиторий на GitHub **не архивирован** (`archived: false`);
- GitHub Pages **включён** (`has_pages: true`), кастом-домен `proffssv.site`
  (файлы `CNAME` в корне и в `docs/`);
- workflow `.github/workflows/mkdocs-gh-pages.yml` деплоит сайт при каждом
  push в `master`; последний успешный деплой — **13.07.2026** (коммит
  «Unify identity v2»);
- то есть GitHub Pages до сих пор удерживает домен и обслуживает ту часть
  трафика, которой DNS выдаёт IP 185.199.x.

---

## 2. Рекомендуемый план настройки

Предполагаемая цель (по README): новый сайт живёт на **ssvnauka.net** (Vercel),
старый **proffssv.site** выводится из эксплуатации с сохранением SEO.

### Шаг 1. Убедиться, что ssvnauka.net реально отдаёт новый сайт

- Открыть `https://ssvnauka.net` и `https://www.ssvnauka.net` в браузере:
  оба должны отдавать новый проект с валидным сертификатом.
- В Vercel → проект → Settings → Domains: `ssvnauka.net` — primary,
  `www.ssvnauka.net` — redirect на апекс (или наоборот, но одинаково везде).

### Шаг 2. Навести порядок в DNS proffssv.site (панель ukraine.com.ua)

- **Удалить с апекса** три записи `185.199.109.153 / 110.153 / 111.153`
  (GitHub Pages).
- Оставить/обновить запись на Vercel. Рекомендация Vercel сейчас —
  `A 216.198.79.1` (и опционально `64.29.17.1`); старый `76.76.21.21`
  продолжает работать, но при редактировании лучше перейти на новые IP.
- `www` оставить `CNAME cname.vercel-dns.com`.

### Шаг 3. Настроить 301-редирект proffssv.site → ssvnauka.net

- В Vercel добавить домены `proffssv.site` и `www.proffssv.site` в **тот же
  проект**, что и ssvnauka.net, и пометить их как **Redirect (308/301)** на
  `ssvnauka.net`.
- Это ключевой шаг для передачи ссылочного веса и корректной миграции SEO.
- Проверить: `curl -I https://proffssv.site/` → `301/308` c
  `Location: https://ssvnauka.net/…` (желательно с сохранением пути).

### Шаг 4. Отключить GitHub Pages (только после шагов 2–3)

Пока DNS ещё содержит IP GitHub Pages, отключение Pages даст части
пользователей 404 — поэтому порядок важен.

1. GitHub → Settings → Pages → снять кастом-домен, отключить Pages.
2. В репозитории удалить `CNAME`, `docs/CNAME` и workflow
   `mkdocs-gh-pages.yml` (или оставить workflow, но он станет бесполезным).
3. По желанию — архивировать репозиторий по-настоящему:
   Settings → General → Archive this repository (сейчас README это
   декларирует, но архивации нет).

### Шаг 5. SEO-миграция

- В Google Search Console (оба ресурса подтверждены: у ssvnauka.net есть
  TXT-верификация, у proffssv.site — файлы `google9c6940bc8c5a4df7.html` и
  `yandex_e1d13091433722e5.html` в `docs/`):
  выполнить **«Изменение адреса»** (Change of Address) с proffssv.site на
  ssvnauka.net.
- Отправить sitemap нового сайта (`https://ssvnauka.net/sitemap.xml`).
- На новом сайте проверить canonical-теги, `robots.txt`, OG-разметку и
  Schema.org (на старом сайте есть разметка `Physician` — стоит перенести).
- Аналогично в Яндекс.Вебмастере («Переезд сайта»), если он используется.

### Шаг 6. Почта на ssvnauka.net

SPF уже указывает на Google. Если почта на Google Workspace, добавить в Wix DNS:

- **DKIM**: TXT `google._domainkey` (значение из Admin Console);
- **DMARC**: TXT `_dmarc` → `v=DMARC1; p=quarantine; rua=mailto:ssvnauka@gmail.com`
  (начать можно с `p=none` для наблюдения);
- MX-записи Google, если приём почты тоже на домене.

---

## 3. Краткий чеклист

- [ ] ssvnauka.net и www открываются с новым сайтом и валидным TLS
- [ ] В DNS proffssv.site удалены IP GitHub Pages (185.199.x)
- [ ] proffssv.site добавлен в Vercel-проект как redirect-домен → ssvnauka.net
- [ ] `curl -I https://proffssv.site/` возвращает 301/308 на ssvnauka.net
- [ ] GitHub Pages отключён, CNAME-файлы и workflow удалены
- [ ] Репозиторий архивирован (если это финальное решение)
- [ ] Search Console: Change of Address + sitemap нового сайта
- [ ] DKIM/DMARC добавлены в Wix DNS

---

## 4. Что не удалось проверить из этой среды

- Фактическое содержимое `https://ssvnauka.net` и `https://proffssv.site`
  (исходящий HTTP к внешним сайтам заблокирован политикой окружения) —
  шаги 1 и 3 требуют ручной проверки в браузере.
- Настройки домена внутри панелей Vercel и Wix (нет доступа к аккаунтам).
