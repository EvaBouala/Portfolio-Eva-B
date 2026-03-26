import Link from "next/link";
import { projectsData } from "@/lib/projects-data";

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-cream py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-16 relative">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-navy transition-colors mb-10"
        >
          <span aria-hidden="true">←</span>
          Retour au portfolio
        </Link>

        <div className="max-w-3xl mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Tous les projets
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground mb-5">
            L'ensemble de mes <span className="italic text-gold">projets</span>{" "}
            en video
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Cette page regroupe tous les projets disponibles dans le portfolio.
            Chaque carte donne acces a une page detaillee avec la video du
            projet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <article
              key={project.slug}
              className="group relative bg-card overflow-hidden border border-border/60 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <div
                className={`aspect-video ${project.color} relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <span className="absolute top-4 left-4 font-serif text-4xl text-white/25 transition-transform duration-300 group-hover:scale-110">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <img
                  src={project.imageSrc}
                  alt={`Aperçu du projet ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400 group-hover:opacity-0"
                />

                <div className="absolute inset-0 bg-linear-to-t from-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-5 bg-cream">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {project.category}
                </p>
                <h2 className="font-serif text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-navy">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <Link
                  href={`/projets/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm tracking-[0.16em] uppercase text-navy group-hover:text-gold transition-colors"
                >
                  Voir le projet
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              <Link
                href={`/projets/${project.slug}`}
                aria-label={`Ouvrir le projet ${project.title}`}
                className="absolute inset-0"
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
