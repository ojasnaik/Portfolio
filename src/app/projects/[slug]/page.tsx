import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/sections/ProjectDetail'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Ojas`,
    description: Array.isArray(project.description) ? project.description.join(' ') : project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-20">
      <ProjectDetail project={project} />
    </div>
  )
}