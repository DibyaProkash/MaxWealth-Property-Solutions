
// Removed Image, Card, CardContent, MapPin, Phone, Mail imports as they are no longer used here.

export default function MapSection() {
  return (
    <section id="location" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Office</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're conveniently located to serve you better. Drop by for a consultation or get in touch.
          </p>
        </div>

        {/* Grid structure removed, prose content now centered */}
        <div className="prose prose-lg text-foreground max-w-3xl mx-auto font-body">
          <h3 className="font-headline text-2xl text-primary mb-4">Getting Here</h3>
          <p>Our office is easily accessible by public transport and has ample parking available. We are located in the heart of the financial district, near major landmarks.</p>
          <h4 className="font-headline text-xl text-primary mt-6 mb-2">Office Hours:</h4>
          <ul className="list-disc list-inside">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 2:00 PM (By Appointment)</li>
            <li>Sunday: Closed</li>
          </ul>
          <p className="mt-4">We recommend booking an appointment in advance to ensure our advisors can dedicate ample time to your needs.</p>
        </div>
      </div>
    </section>
  );
}
