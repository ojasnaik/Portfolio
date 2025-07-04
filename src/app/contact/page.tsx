import { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact | Ojas',
  description: 'Get in touch for collaborations and opportunities',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  )
}