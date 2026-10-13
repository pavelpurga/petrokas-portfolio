import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer shell">
      <Link href="/" className="brand">
        <span className="brand-mark" aria-hidden="true"><span /></span>
        <span>Petrokas</span>
      </Link>
      <p>Независимый веб-разработчик · 4 года опыта</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
