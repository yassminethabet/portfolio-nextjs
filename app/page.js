export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Yasmine Thabet</h1>
        <p>Ingénieur DevOps & Cloud</p>
      </header>

      <section>
        <h2>À propos</h2>
        <p>Bienvenue sur mon portfolio. Version 1.</p>
      </section>

      <section>
        <h2>Compétences</h2>
        <div className="card">Linux, Docker, CI/CD, Cloud</div>
      </section>

      <section>
        <h2>Projets</h2>
        <div className="card">Plateforme Backstage - Platform Engineering</div>
      </section>

      <footer>Généré avec Backstage</footer>
    </main>
  );
}
