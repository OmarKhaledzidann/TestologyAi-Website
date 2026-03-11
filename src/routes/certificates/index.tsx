import { createFileRoute } from "@tanstack/react-router";
import CertificateCard from "#/components/CertificateCard";
import { getCertificates } from "#/utils/data";
import { seo } from "#/utils/seo";

export const Route = createFileRoute("/certificates/")({
  head: () => ({
    meta: seo({
      title: "Certificates — TestologyAI",
      description:
        "Browse IT certification practice exams. AWS Cloud Practitioner, Azure Fundamentals, CompTIA A+, and more.",
      image: `${import.meta.env.BASE_URL}thumbnail.png`,
    }),
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  const certificates = getCertificates();

  return (
    <main className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose a Certification
          </h1>
          <p className="text-muted-foreground">
            Pick a certification and start practicing with chapter-based quizzes
            and timed exams.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </main>
  );
}
