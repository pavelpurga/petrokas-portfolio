import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StoreDemo } from "@/components/StoreDemo";

export const metadata: Metadata = {
  title: "Концепт магазина рыболовных товаров",
  description: "Интерактивный демонстрационный frontend-концепт современного интернет-магазина снастей.",
  robots: { index: false, follow: true },
};

export default function DemoStorePage() {
  return (
    <main>
      <div className="demo-page-wrap">
        <Header />
        <section className="demo-page shell">
          <Link className="back-link" href="/"><ArrowLeft /> Назад к портфолио</Link>
          <div className="demo-page-head">
            <div><p className="eyebrow">Демонстрационный концепт</p><h1>Магазин, в котором снасти<br />легко найти и выбрать.</h1></div>
            <p>
              Стиль и наполнение здесь — только пример. В вашем проекте могут быть любые товары, структура и визуальное направление: всё согласовывается под задачи бизнеса и ваш вкус.
              <strong>Я предлагаю варианты — вы решаете.</strong>
            </p>
          </div>
          <StoreDemo />
        </section>
      </div>
      <ContactCta />
      <Footer />
    </main>
  );
}
