import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800 py-20">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:p-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build a connection."
          description="Contact details and professional links will be added here when the content is ready."
        />

        <Button href="#home" variant="secondary">
          Back to Top ↑
        </Button>
      </div>
    </section>
  )
}