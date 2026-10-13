import { ArrowUpRight, Mail, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactCta() {
  const hasContacts = Boolean(siteConfig.telegramUrl || siteConfig.email);
  const primaryHref = siteConfig.telegramUrl || (siteConfig.email ? `mailto:${siteConfig.email}` : "");

  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-inner">
        <p className="eyebrow">Ваш проект — в центре разговора</p>
        <h2>Сверим курс по вашей задаче.</h2>
        <p className="contact-lead">
          Расскажите, что нужно создать, перенести или улучшить. Я разберусь в задаче, помогу определить приоритеты
          и предложу понятный план — без сложных терминов и лишних этапов.
        </p>
        <div className="contact-actions">
          {hasContacts && <a className="button button-light" href={primaryHref} target={siteConfig.telegramUrl ? "_blank" : undefined} rel={siteConfig.telegramUrl ? "noreferrer" : undefined}>Связаться со мной <ArrowUpRight /></a>}
          {siteConfig.telegramUrl && <a className="contact-direct-link" href={siteConfig.telegramUrl} target="_blank" rel="noreferrer"><Send /> Telegram</a>}
          {siteConfig.email && <a className="contact-direct-link" href={`mailto:${siteConfig.email}`}><Mail /> {siteConfig.email}</a>}
        </div>
        {!hasContacts && <small className="contact-note">Укажите Telegram или email в конфигурации — здесь появится кнопка прямой связи.</small>}
      </div>
    </section>
  );
}
