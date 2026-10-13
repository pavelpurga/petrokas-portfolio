import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Compass, Database, Gauge, Radio, Waves } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";
import { DepthMap } from "@/components/DepthMap";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Reveal } from "@/components/Reveal";
import { StoreDemo } from "@/components/StoreDemo";
import { services } from "@/content/data";

const tickerItems = ["САЙТЫ", "ИНТЕРНЕТ-МАГАЗИНЫ", "ВЕБ-ПРИЛОЖЕНИЯ", "ИНТЕГРАЦИИ", "ПОДДЕРЖКА"];

export default function Home() {
  return (
    <main>
      <div className="hero-wrap">
        <Header />
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse" /> Независимый веб-разработчик · 4 года опыта</p>
            <h1>Ваш бизнес заслуживает <em>большего,</em> чем просто сайт.</h1>
            <p className="hero-lead">Создаю сайты, интернет-магазины и веб-приложения — от первой идеи и переноса данных до запуска и дальнейшего развития.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#contact">Обсудить проект <ArrowUpRight /></Link>
              <Link className="text-link" href="#case">Смотреть работы <ArrowDown /></Link>
            </div>
            <div className="hero-proof">
              <span><Check /> Прямое общение</span>
              <span><Check /> Проект целиком</span>
              <span><Check /> Поддержка после запуска</span>
            </div>
          </div>
          <div className="hero-visual"><DepthMap /></div>
        </section>
        <div className="hero-ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy}>
                {tickerItems.map((item) => <span key={`${copy}-${item}`}>{item}<Waves /></span>)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="about" className="section shell about-section">
        <Reveal className="about-kicker">
          <span className="index">01 / ПОДХОД</span>
          <Compass />
        </Reveal>
        <Reveal className="about-copy">
          <p className="eyebrow">Разбираюсь в технологиях. Понимаю задачи бизнеса.</p>
          <h2>Один разработчик —<br />цельный результат.</h2>
          <div className="about-columns">
            <p>Уже 4 года создаю сайты и приложения. Мне важны не только аккуратный интерфейс и код, но и то, насколько продукт понятен людям и полезен бизнесу.</p>
            <p>Могу взять проект с нуля, перенести существующие данные, подключить необходимые сервисы и остаться на связи после запуска.</p>
          </div>
          <div className="signal-line"><Radio /><span>Особенно близка рыболовная и outdoor-тематика — но работаю и с другими нишами.</span></div>
        </Reveal>
      </section>

      <section id="services" className="section services-section">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">02 / Что могу сделать</p><h2>От задачи —<br />к работающему продукту.</h2></div>
            <p className="section-intro">Можно прийти с идеей, старым сайтом или конкретной проблемой. Разберусь, предложу план и возьму реализацию на себя.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Reveal className="service-card" key={service.number}>
                  <div className="service-top"><span>{service.number}</span><Icon /></div>
                  <h3>{service.title}</h3><p>{service.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectShowcase />

      <section className="section shell demo-section">
        <div className="section-heading">
          <div><p className="eyebrow">Демонстрационный концепт</p><h2>А так может выглядеть<br />ваш новый магазин.</h2></div>
          <div className="demo-intro"><p>Это пример визуального направления, а не готовый шаблон. Стиль, структура и функции согласовываются под ваш бизнес и вкус. Я предлагаю варианты — вы решаете.</p><Link className="text-link" href="/demo-store/">Открыть демо <ArrowUpRight /></Link></div>
        </div>
        <Reveal className="demo-window"><StoreDemo compact /></Reveal>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">03 / Работа вместе</p><h2>Вы ведёте бизнес.<br />Я держу технический курс.</h2></div></div>
          <div className="process-grid">
            <article><span>01</span><Compass /><h3>Разбираемся</h3><p>Обсуждаем задачу, ограничения и то, что должно измениться для бизнеса.</p></article>
            <article><span>02</span><Database /><h3>Собираем</h3><p>Проектирую, разрабатываю, переношу данные и показываю понятный прогресс.</p></article>
            <article><span>03</span><Gauge /><h3>Запускаем</h3><p>Проверяю проект, помогаю с публикацией и остаюсь на связи для развития.</p></article>
          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  );
}
