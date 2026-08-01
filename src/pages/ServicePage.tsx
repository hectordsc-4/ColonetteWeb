import ServiceHero from '../components/service/ServiceHero'
import ServiceOfferings from '../components/service/ServiceOfferings'
import ServiceFaq from '../components/service/ServiceFaq'
import ServiceSupportForm from '../components/service/ServiceSupportForm'
import './ServicePage.css'

export default function ServicePage() {
  return (
    <main className="service-page">
      <ServiceHero />
      <ServiceOfferings />
      <ServiceFaq />
      <ServiceSupportForm />
    </main>
  )
}
