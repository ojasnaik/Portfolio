import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsPreview from '@/components/sections/ProjectsPreview'
import ContactPreview from '@/components/sections/ContactPreview'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsPreview />
      <ContactPreview />
    </>
  )
}