import Image from "next/image";

type ArchitectPhotoProps = {
  className?: string;
  priority?: boolean;
};

export function ArchitectPhoto({ className = "", priority = false }: ArchitectPhotoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#141820] ${className}`}
    >
      <Image
        src="/images/about/paloma.jpg"
        alt="Paloma Drumond — Arquiteta e Urbanista, Drumond Arquitetura"
        fill
        priority={priority}
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/60 via-transparent to-transparent" />
    </div>
  );
}
