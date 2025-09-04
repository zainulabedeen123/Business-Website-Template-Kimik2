import { Metadata } from 'next'
import { Section } from '@/components/ui/section'

export const metadata: Metadata = {
  title: "Terms of Service - Nexus Agents",
  description: "Terms and conditions for using Nexus Agents services. Our legal agreement and service terms.",
}

export default function TermsPage() {
  const currentYear = new Date().getFullYear()
  
  return (
    <Section background="default" padding="xl">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: January 1, {currentYear}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Nexus Agents services, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p>
              Nexus Agents provides AI automation services including workflow audits, custom AI agent 
              development, integrations, chatbots, and managed support. We reserve the right to modify 
              or discontinue our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Not use our services for any unlawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p>
              Payment terms are specified in individual service agreements. All fees are non-refundable 
              unless otherwise stated. We reserve the right to change our pricing with 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by Nexus Agents and 
              are protected by copyright, trademark, and other intellectual property laws. Custom 
              solutions developed for clients remain the property of the client upon full payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              Nexus Agents shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice 
              or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes via email or through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Nexus Agents</strong></p>
              <p>Email: hello@nexusagents.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: San Francisco, CA</p>
            </div>
          </section>
        </div>
      </div>
    </Section>
  )
}
