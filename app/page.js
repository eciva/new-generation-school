import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Programs from "@/components/Programs";
import TechResults from "@/components/TechResults";
import AiSection from "@/components/AiSection";
import Teachers from "@/components/Teachers";
import Alumni from "@/components/Alumni";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import AnimateInView from "@/components/AnimateInView";
import IntroVideo from "@/components/IntroVideo";

// Map section types to their respective React components
const ComponentMap = {
  hero: Hero,
  features: Features,
  programs: Programs,
  tech_results: TechResults,
  ai: AiSection,
  teachers: Teachers,
  alumni: Alumni,
  testimonials: Testimonials,
  news: News,
  location: LocationMap,
};

export const revalidate = 60;

async function getHomePageData() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.new-generation-school.uz/api";
  try {
    const res = await fetch(`${API_URL}/site/home`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch home page", err);
    return null;
  }
}

export default async function Home() {
  const pageData = await getHomePageData();

  // If no dynamic data, render default static page
  if (!pageData || !pageData.data || !pageData.data.sections || pageData.data.sections.length === 0) {
    return (
      <>
        <IntroVideo />
        <Navbar />
        <Hero />
        <main style={{ position: "relative", zIndex: 1 }}>
          <AnimateInView><Features /></AnimateInView>
          <AnimateInView><Programs /></AnimateInView>
          <AnimateInView><TechResults /></AnimateInView>
          {/* <AnimateInView><AiSection /></AnimateInView> -- В разработке */}
          {/* <AnimateInView><Teachers /></AnimateInView> -- Временно скрыто */}
          <AnimateInView><Alumni /></AnimateInView>
          <AnimateInView><Testimonials /></AnimateInView>
          <AnimateInView><News /></AnimateInView>
          <AnimateInView><LocationMap /></AnimateInView>
        </main>
        <Footer />
      </>
    );
  }

  const sections = pageData.data.sections
    .filter((s) => s.visible && s.type !== "ai" && s.type !== "teachers")
    .sort((a, b) => a.order - b.order);

  const heroSections = sections.filter((s) => s.type === "hero");
  const bodySections = sections.filter((s) => s.type !== "hero");

  const renderSection = (section, isHero = false) => {
    const Component = ComponentMap[section.type];
    if (!Component) return null;

    let parsedData = {};
    try {
      if (section.data) {
        parsedData = typeof section.data === "string" ? JSON.parse(section.data) : section.data;
      }
    } catch (e) {
      console.error(`Failed to parse data for section ${section.id}`, e);
    }

    if (isHero) {
      return <Component key={section.id} {...parsedData} />;
    }

    return (
      <AnimateInView key={section.id} delay={0.1}>
        <Component {...parsedData} />
      </AnimateInView>
    );
  };

  return (
    <>
      <IntroVideo />
      <Navbar />
      {heroSections.map((section) => renderSection(section, true))}
      <main style={{ position: "relative", zIndex: 1 }}>
        {bodySections.map((section) => renderSection(section, false))}
      </main>
      <Footer />
    </>
  );
}
