import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { screenshots, uloviyaFeatures } from "@/content/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Уловия — кейс рыболовного веб-приложения",
  description: "Продуктовый кейс приложения для подготовки к рыбалке, работы со снастями, водоёмами и личной историей уловов.",
  alternates: { canonical: "/projects/uloviya/" },
};

export default function UloviyaProjectPage() {
  return (
    <main>
      <div className="project-hero-wrap">
        <Header />
        <section className="project-hero shell">
          <Link className="back-link" href="/#case"><ArrowLeft /> Назад к портфолио</Link>
          <div className="project-hero-grid">
            <div>
              <p className="eyebrow">Собственный продукт · Веб-приложение</p>
              <h1>Уловия</h1>
              <p className="project-tagline">Цифровой помощник, который собирает подготовку к рыбалке, справочные данные и личный опыт в одном интерфейсе.</p>
              <a className="button button-primary" href={siteConfig.projectUrl} target="_blank" rel="noreferrer">Открыть приложение <ExternalLink /></a>
            </div>
            <dl className="project-meta">
              <div><dt>Формат</dt><dd>Продуктовое веб-приложение</dd></div>
              <div><dt>Тематика</dt><dd>Рыбалка · outdoor</dd></div>
              <div><dt>Моя роль</dt><dd>Продукт, UX/UI, разработка</dd></div>
            </dl>
          </div>
          <div className="project-cover browser-frame">
            <div className="browser-bar"><i /><i /><i /><span>Уловия · Главная</span></div>
            <Image src="/images/uloviya/dashboard.png" width={1900} height={975} alt="Главный экран приложения Уловия" priority />
          </div>
        </section>
      </div>

      <section className="section shell project-story">
        <Reveal><p className="eyebrow">01 / Идея</p><h2>Не ещё один сайт о рыбалке.<br />Рабочий инструмент перед выездом и после него.</h2></Reveal>
        <Reveal className="story-copy"><p>Рыболову приходится собирать информацию по разным источникам: отдельно смотреть погоду, искать водоём, вспоминать подходящие снасти и хранить заметки об уловах.</p><p>«Уловия» объединяет эти сценарии в цельный продукт. Интерфейс построен вокруг реальных действий — подготовиться, спланировать, свериться со справочником и сохранить результат.</p></Reveal>
      </section>

      <section className="section feature-section">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">02 / Возможности</p><h2>Весь маршрут рыболова<br />в одном приложении.</h2></div></div>
          <div className="feature-list">
            {uloviyaFeatures.map((feature, index) => <div key={feature}><span>{String(index + 1).padStart(2, "0")}</span><p>{feature}</p><CheckCircle2 /></div>)}
          </div>
        </div>
      </section>

      <section className="section shell gallery-section">
        <div className="section-heading"><div><p className="eyebrow">03 / Интерфейс</p><h2>Спокойная система<br />для сложного продукта.</h2></div><p className="section-intro">Тёмная природная палитра, ясная боковая навигация и крупная типографика связывают разные разделы в один узнаваемый опыт.</p></div>
        <div className="screenshot-gallery">
          {screenshots.map((shot, index) => (
            <Reveal className={`screenshot-item item-${index + 1}`} key={shot.src}>
              <div className="browser-frame"><div className="browser-bar"><i /><i /><i /><span>Уловия</span></div><Image src={shot.src} width={1900} height={975} alt={shot.alt} /></div>
              <p>
                <span className="screenshot-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="screenshot-caption">{shot.caption}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell project-build">
        <div><p className="eyebrow">04 / Реализация</p><h2>Спроектировано как продукт,<br />а не как набор экранов.</h2></div>
        <div className="build-grid">
          <article><span>Система</span><h3>Единая навигация</h3><p>Большое количество сценариев организовано в предсказуемую структуру, где нужный раздел всегда остаётся под рукой.</p></article>
          <article><span>Контекст</span><h3>Данные в нужный момент</h3><p>Погода, условия, водоёмы, снасти и личные записи представлены там, где помогают принять решение.</p></article>
          <article><span>Масштаб</span><h3>Основа для развития</h3><p>Интерфейс допускает появление новых справочников и инструментов без полной перестройки продукта.</p></article>
        </div>
        <div className="project-live"><p>Посмотрите продукт в работе</p><a className="button button-primary" href={siteConfig.projectUrl} target="_blank" rel="noreferrer">Открыть «Уловию» <ArrowUpRight /></a></div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  );
}
