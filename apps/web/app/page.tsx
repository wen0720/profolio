import HeroSection from '@/components/hero/hero-section';
import BackgroundStream from '@/components/background-stream';
import SkillSection from '@/components/skill-section';
import ExperienceSection from '@/components/experience-section';
import ContactSection from '@/components/contact-section';

export default function Page() {
  return (
    <>
      <BackgroundStream />
      <HeroSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
