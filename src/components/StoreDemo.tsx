"use client";

import Image from "next/image";
import { Heart, Plus, Search, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";

const categories = ["Все", "Спиннинги", "Катушки", "Приманки"] as const;
type Category = (typeof categories)[number];

const products = [
  {
    category: "Спиннинги" as const,
    name: "RIVER FORCE 762M",
    meta: "Спиннинг · 2.28 м · 7–24 г",
    price: "319 BYN",
    badge: "Выбор сезона",
    image: "/images/store/spinning-rod.webp",
    alt: "Графитовый спиннинг с пробковой рукоятью на каменистом берегу",
  },
  {
    category: "Катушки" as const,
    name: "NORTH 2500S",
    meta: "Катушка · 225 г · 6+1",
    price: "248 BYN",
    badge: "Новинка",
    image: "/images/store/spinning-reel.webp",
    alt: "Безынерционная рыболовная катушка графитового цвета",
  },
  {
    category: "Приманки" as const,
    name: "NATIVE WATER SET",
    meta: "Набор приманок · 70–95 мм",
    price: "42 BYN",
    badge: "Набор",
    image: "/images/store/lures.webp",
    alt: "Набор реалистичных рыболовных приманок на мокром камне",
  },
] as const;

export function StoreDemo({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<Category>("Все");
  const [cartCount, setCartCount] = useState(0);
  const [favourites, setFavourites] = useState<string[]>([]);
  const visibleProducts = useMemo(
    () => active === "Все" ? products : products.filter((product) => product.category === active),
    [active],
  );

  const toggleFavourite = (name: string) => {
    setFavourites((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  };

  return (
    <div className={compact ? "store-ui compact" : "store-ui"}>
      <div className="store-topbar">
        <div className="store-logo"><span>◒</span> TACKLE / 53</div>
        <div className="store-search" aria-label="Демонстрационный поиск"><Search /><span>Поиск по каталогу</span></div>
        <div className="store-tools">
          <span className="store-season">Сезон / 2026</span>
          <button type="button" aria-label={`Корзина, товаров: ${cartCount}`}><ShoppingBag /><b>{cartCount}</b></button>
        </div>
      </div>

      <div className="store-hero">
        <Image
          className="store-hero-image"
          src="/images/store/hero-lake.webp"
          alt="Спиннинг и катушка на берегу тихого лесного озера"
          fill
          sizes="(max-width: 720px) 100vw, 1400px"
          priority={!compact}
        />
        <div className="store-hero-shade" />
        <div className="store-hero-copy">
          <small>НОВАЯ КОЛЛЕКЦИЯ · OPEN WATER</small>
          <h3>Точный заброс<br />начинается здесь.</h3>
          <a href="#catalog">Смотреть подборку <span>↘</span></a>
        </div>
        <div className="store-hero-note"><span>01</span><p>Снаряжение для тихой воды и дальнего берега</p></div>
      </div>

      <div className="store-catalog-head" id="catalog">
        <div><small>КАТАЛОГ</small><h4>Собрано для сезона</h4></div>
        <p>Три категории — один спокойный маршрут выбора.</p>
      </div>

      <div className="store-tabs" role="tablist" aria-label="Категории товаров">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={active === category ? "active" : ""}
            role="tab"
            aria-selected={active === category}
          >
            {category}
            <span>{category === "Все" ? products.length : products.filter((product) => product.category === category).length}</span>
          </button>
        ))}
      </div>

      <div className={visibleProducts.length === 1 ? "product-grid single" : "product-grid"}>
        {visibleProducts.map((product) => {
          const selected = favourites.includes(product.name);
          return (
            <article className="product-card" key={product.name}>
              <div className="product-photo">
                <Image
                  className="product-photo-backdrop"
                  src={product.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 720px) 100vw, 440px"
                />
                <Image
                  className="product-photo-main"
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, 440px"
                />
                <span className="product-badge">{product.badge}</span>
                <button
                  className={selected ? "product-favourite selected" : "product-favourite"}
                  type="button"
                  onClick={() => toggleFavourite(product.name)}
                  aria-label={selected ? `Убрать ${product.name} из избранного` : `Добавить ${product.name} в избранное`}
                  aria-pressed={selected}
                >
                  <Heart fill={selected ? "currentColor" : "none"} />
                </button>
              </div>
              <div className="product-copy">
                <small>{product.meta}</small>
                <h4>{product.name}</h4>
                <div>
                  <strong>{product.price}</strong>
                  <button type="button" onClick={() => setCartCount((count) => count + 1)} aria-label={`Добавить ${product.name} в корзину`}>
                    <Plus /> В корзину
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="store-footer-line"><span>Бесплатная доставка от 250 BYN</span><span>Поможем подобрать комплект</span><span>14 дней на возврат</span></div>
    </div>
  );
}
