import ContactHero from '../components/contact/ContactHero'
import ContactChannels from '../components/contact/ContactChannels'
import ContactOffice from '../components/contact/ContactOffice'
import ContactIslands from '../components/contact/ContactIslands'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <main className="contact-page page-wash-teal">
      <ContactHero />
      <ContactChannels />
      <ContactOffice />
      <ContactIslands />
    </main>
  )
}
