# Petrokas Portfolio

Статическое портфолио независимого веб-разработчика в рыболовной стилистике. Главный кейс — полноценное приложение «Уловия» для подготовки к рыбалке, работы с водоёмами, снастями и личным журналом уловов.

## Стек

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Motion
- Lucide Icons
- Статический экспорт в `out/`

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Проверка и production-сборка

```bash
npm run typecheck
npm run build
```

Готовый статический сайт появится в папке `out/`.

## Контакты и адрес сайта

Измените `src/config/site.ts`:

- `url` — будущий публичный адрес портфолио;
- `telegramUrl` — ссылка вида `https://t.me/username`;
- `email` — адрес для связи;
- `projectUrl` — адрес приложения «Уловия».

Пустые контакты не отображаются, поэтому на сайте нет неработающих кнопок.

## Создание репозитория GitHub

1. Создайте новый пустой репозиторий на GitHub.
2. В этой папке выполните:

```bash
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## Публикация на Cloudflare Pages

1. Откройте Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Подключите GitHub и выберите репозиторий.
3. Укажите production-ветку `main`.
4. Build command: `npm run build`.
5. Build output directory: `out`.
6. Сохраните настройки и дождитесь первой сборки.
7. Cloudflare выдаст бесплатный HTTPS-адрес вида `project.pages.dev`.

После этого каждый `git push` в `main` автоматически создаёт новую production-версию. Собственный домен можно подключить позднее без изменения архитектуры.

## Обновление контента

- Список услуг и возможности «Уловии»: `src/content/data.ts`
- Главная страница: `src/app/page.tsx`
- Кейс: `src/app/projects/uloviya/page.tsx`
- Скриншоты: `public/images/uloviya/`
- Контакты и публичные URL: `src/config/site.ts`

Проект не использует сервер, базу данных или платные сервисы.
