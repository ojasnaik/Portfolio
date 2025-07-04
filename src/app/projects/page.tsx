import { Metadata } from 'next'
import ProjectsSection from '@/components/sections/ProjectsSection'

export const metadata: Metadata = {
  title: 'Projects | Ojas',
  description: 'Explore my portfolio of web development projects and applications',
}

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <ProjectsSection />
    </div>
  )
}