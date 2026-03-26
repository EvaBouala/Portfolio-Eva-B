import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectsData } from "@/lib/projects-data";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

function getYouTubeEmbedUrl(url?: string) {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const videoId = parsed.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/embed/")) {
        return url;
      }

      const videoId = parsed.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const embedUrl = getYouTubeEmbedUrl(project.demoUrl);

  return (
    <main className="min-h-screen bg-sand py-20 relative overflow-hidden">
      <div className="absolute top-24 right-0 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-16 left-0 w-80 h-80 rounded-full bg-navy/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-16 relative">
        <Link
          href="/projets"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-navy transition-colors mb-10"
        >
          <span aria-hidden="true">←</span>
          Retour aux projets
        </Link>

        <div className="lg:min-h-[calc(100vh-14rem)] flex items-center">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 w-full">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                {project.category}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground mb-6">
                {project.title}
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-navy" />
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.longDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-sand text-foreground/70 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="relative w-full max-w-4xl p-2 bg-gold/10 border border-gold/40 shadow-sm">
                <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-gold" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-gold" />

                <div className="bg-cream overflow-hidden border border-gold/30">
                  {!embedUrl ? (
                    <div className="w-full min-h-80 md:min-h-screen flex items-center justify-center px-6 text-center text-muted-foreground">
                      Apercu media indisponible pour ce projet.
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="relative w-full aspect-video">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={embedUrl}
                          title={`Demonstration du projet ${project.title}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                      <div className="px-4 py-3 border-t border-gold/20 bg-sand/50">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-navy hover:text-gold transition-colors"
                        >
                          Ouvrir la demonstration sur YouTube
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
