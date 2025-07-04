import { Metadata } from 'next'
import DocumentsSection from '@/components/sections/DocumentsSection'

export const metadata: Metadata = {
  title: 'Documents | Ojas',
  description: 'Professional documents and certifications',
}

export default function DocumentsPage() {
  return (
    <div className="pt-20">
      <DocumentsSection />
    </div>
  )
}