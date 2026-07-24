# 🔐 GitHub Secrets Setup для Vercel Auto-Deploy

Для автоматического развёртывания на Vercel через GitHub Actions, нужно добавить секреты в репозиторий.

---

## 📋 Что нужно получить из Vercel

### 1. VERCEL_TOKEN ✅ (Уже есть)
Ты уже имеешь токен вида: `vcp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 2. VERCEL_ORG_ID
1. Перейди на https://vercel.com/account/general
2. Скопируй **Team ID** (или **Account ID** если нет команды)

### 3. VERCEL_PROJECT_ID
Нужно создать проект в Vercel сначала.

**Способ A: Через Vercel Dashboard**
1. Перейди на https://vercel.com/new
2. Импортируй репо `Serg2206/proffssv.site`
3. Нажми Deploy
4. После deploy, перейди на Project Settings
5. Скопируй **Project ID** из URL или Settings

**Способ B: Через Vercel CLI (если сетевые проблемы будут решены)**
```bash
vercel link
```

---

## 🔑 Добавить Secrets в GitHub

### Шаг 1: Перейти в Repository Settings
1. Открой https://github.com/Serg2206/proffssv.site
2. **Settings** → **Secrets and variables** → **Actions**

### Шаг 2: Добавить VERCEL_TOKEN
1. Нажми **New repository secret**
2. Name: `VERCEL_TOKEN`
3. Secret: (Скопируй твой токен из Vercel, начинается с `vcp_`)
4. Нажми **Add secret**

### Шаг 3: Добавить VERCEL_ORG_ID
1. Нажми **New repository secret**
2. Name: `VERCEL_ORG_ID`
3. Secret: `<твой Team ID из Vercel>`
4. Нажми **Add secret**

### Шаг 4: Добавить VERCEL_PROJECT_ID
1. Нажми **New repository secret**
2. Name: `VERCEL_PROJECT_ID`
3. Secret: `<твой Project ID>`
4. Нажми **Add secret**

---

## ✅ Проверить что работает

После добавления секретов:

1. Сделай небольшой commit:
```bash
git commit -m "Test GitHub Actions deploy" --allow-empty
git push origin claude/test-deploy-ssvnauka-09d3gm
```

2. Перейди на https://github.com/Serg2206/proffssv.site/actions

3. Ты должен увидеть workflow **"Deploy to Vercel"** - нажми на неё

4. Если зелёная галочка ✅ - deploy прошёл успешно!

5. Проверь https://vercel.com/deployments

---

## 🚀 Когда Deploy работает

Дальше это автоматическое:
- Каждый push в `master`, `main` или `claude/test-deploy-ssvnauka-09d3gm`
- → GitHub Actions запускает workflow
- → Сборка (`npm run build`)
- → Deploy на Vercel
- → Live на https://cdss-ostry-zhivot.vercel.app

---

## 🆘 Если что-то не работает

1. **Workflow не запускается?**
   - Проверь что файл `.github/workflows/deploy.yml` существует
   - Проверь что секреты добавлены

2. **Deploy падает с ошибкой?**
   - Перейди на Actions tab
   - Нажми на failed workflow
   - Смотри логи (красный текст = ошибка)

3. **Не вижу Vercel URL?**
   - Проверь что VERCEL_ORG_ID и VERCEL_PROJECT_ID правильные
   - Посмотри логи в GitHub Actions

---

## 📞 Нужна помощь?

Дай мне:
1. Screenshot из Vercel Settings с Project ID
2. Link на GitHub Actions workflow (если есть ошибка)

Я помогу разобраться! 💪
