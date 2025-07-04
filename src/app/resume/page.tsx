import { Metadata } from 'next'
import ResumeSection from '@/components/sections/ResumeSection'

export const metadata: Metadata = {
  title: 'Resume | Ojas Ankush Naik',
  description: 'Professional resume and work experience',
}

export default function ResumePage() {
  return (
    <div className="pt-20">
      <ResumeSection />
    </div>
  )
}