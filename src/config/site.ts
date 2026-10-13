export const siteConfig = {
  name: "Petrokas — веб-разработка",
  shortName: "Petrokas",
  description:
    "Сайты, интернет-магазины и веб-приложения для рыболовного бизнеса и не только.",
  url: "https://petrokas-portfolio.pages.dev",
  projectUrl: "https://petrokas-fishing.pashapetrokas.workers.dev/",
  // Публичные контакты. Пустые значения автоматически скрываются в интерфейсе.
  telegramUrl: "https://t.me/Pablberg",
  email: "pashapetrokas@gmail.com",
} as const;

export type SiteConfig = typeof siteConfig;
