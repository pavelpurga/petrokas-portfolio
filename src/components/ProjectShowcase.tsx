import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPinned, NotebookTabs, ShoppingBag } from "lucide-react";

const developmentStages = [
  ["01", "Задача", "Фиксирую цели, аудиторию и критерии результата."],
  ["02", "Структура", "Собираю сценарии, данные и логику разделов."],
  ["03", "Интерфейс", "Проектирую экраны и единую визуальную систему."],
  ["04", "Разработка", "Реализую frontend, функции и интеграции."],
  ["05", "Проверка", "Тестирую ключевые пути, адаптивность и скорость."],
  ["06", "Запуск", "Публикую продукт и планирую дальнейшее развитие."],
] as const;

export function ProjectShowcase() {
  return (
    <section id="case" className="section shell case-section">
      <div className="section-heading case-heading">
        <div>
          <p className="eyebrow">Пример реализованного продукта</p>
          <h2>Как выглядит работа<br />над сложным сервисом.</h2>
        </div>
        <p className="section-intro">
          «Уловия» — пример того, как я проектирую продукт с большим количеством сценариев:
          выстраиваю понятную навигацию, собираю единый интерфейс и оставляю основу для развития.
        </p>
      </div>

      <div className="case-process" aria-label="Этапы разработки сложного сервиса">
        {developmentStages.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="case-stage">
        <div className="browser-frame">
          <div className="browser-bar"><i /><i /><i /><span>uloviya.app</span></div>
          <Image
            src="/images/uloviya/dashboard.png"
            width={1900}
            height={975}
            alt="Главный экран приложения Уловия"
            priority={false}
          />
        </div>
        <div className="case-float float-map"><MapPinned /><span>Карты водоёмов<br />и глубин</span></div>
        <div className="case-float float-log"><NotebookTabs /><span>Личный<br />журнал уловов</span></div>
        <div className="case-float float-shop"><ShoppingBag /><span>Барахолка<br />снаряжения</span></div>
      </div>

      <div className="case-bottom">
        <div className="case-note">
          <span>Что это показывает клиенту</span>
          <p>Могу пройти путь от идеи и структуры до готового интерфейса, разработки и работающего запуска.</p>
        </div>
        <div className="case-actions">
          <Link className="button button-primary" href="/projects/uloviya/">Посмотреть кейс <ArrowUpRight /></Link>
          <a className="button button-ghost" href="https://petrokas-fishing.pashapetrokas.workers.dev/" target="_blank" rel="noreferrer">Проверить в работе <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}
