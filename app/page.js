import ThemeToggle from './ThemeToggle';

export default function Home() {
  return (
    <main className="container">
      <ThemeToggle />
      <header>
        <h1>wissal Elkouk</h1>
        <p className="subtitle">DevOps & Cloud Engineer</p>
        <p>wissalelkouk@gmail.com</p>
      </header>
      <section>
        <h2>À propos</h2>
        <p>Portfolio mis à jour (v2) via Backstage.</p>
      </section>
      <section>
        <h2>Compétences</h2>
        <ul><li>Docker</li><li>CI/CD</li><li>Next.js</li><li>Kubernetes</li></ul>
      </section>
      <section>
        <h2>Certifications</h2>
        <ul><li>AWS Certified Solutions Architect</li><li>Certified Kubernetes Administrator (CKA)</li></ul>
      </section>
      <section>
        <h2>Projets DevOps &amp; Cloud</h2>
        <ul><li>Plateforme Backstage (Platform Engineering)</li><li>Pipeline CI/CD Docker + GitHub Actions</li></ul>
      </section>
    </main>
  );
}
