import {
  HeroSection,
  ServicesPreview,
  ProjectsPreview,
  AboutPreview,
  CTASection,
} from "@/components/sections/HomeSections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProjectsPreview />
      <AboutPreview />
      <CTASection />
    </>
  );
}
