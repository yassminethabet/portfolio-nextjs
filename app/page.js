import ThemeToggle from './ThemeToggle';

export default function Home() {
  return (
    <main className="container">
      <ThemeToggle />

      <header className="hero">
        <h1>Yasmine Thabet</h1>
        <p>Ingénieur DevOps &amp; Cloud</p>
      </header>

      <section>
        <h2>À propos</h2>
        <p>Étudiante en Master Cloud &amp; DevOps. Je m&apos;intéresse à l&apos;automatisation, aux conteneurs et au Platform Engineering. Version 2.</p>
      </section>

      <section>
        <h2>Compétences</h2>
        <div className="card">Linux, Docker, CI/CD, Cloud, Backstage</div>
      </section>

      <section>
        <h2>Certifications</h2>
        <div className="card">Remplace par ta certification 1 (organisme, année)</div>
        <div className="card">Remplace par ta certification 2 (organisme, année)</div>
      </section>

      <section>
        <h2>Projets DevOps &amp; Cloud</h2>
        <div className="card">Plateforme Backstage : cycle de livraison automatisé (template, GitHub Actions, Docker Hub, déploiement)</div>
        <div className="card">Mini-projet Docker : application Flask conteneurisée et publiée sur Docker Hub</div>
        <div className="card">Catalogue produits Angular vs Next.js conteneurisé</div>
      </section>

      <footer>Généré avec Backstage</footer>
    </main>
  );
}