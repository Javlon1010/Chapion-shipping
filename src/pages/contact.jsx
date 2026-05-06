import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface text-slate">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <section className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Contact</p>
          <h1 className="text-balance text-3xl font-bold text-slate sm:text-4xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-8 text-slate/80">
            Submit a request about services, pricing, or cargo status. We'll respond quickly.
          </p>
        </section>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
          <div className="min-w-0 space-y-6 sm:space-y-8">
            <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-10">
              <h2 className="text-balance text-xl font-semibold text-slate sm:text-2xl">Contact Information</h2>
              <div className="mt-4 space-y-4 text-sm text-slate/80 sm:mt-6">
                <p><strong>Primary Phone:</strong> +998 71 123 45 67</p>
                <p><strong>Secondary Phone:</strong> +998 99 765 43 21</p>
                <p><strong>Email:</strong> support@championlogistics.uz</p>
                <p><strong>Address:</strong> Tashkent, Uzbekistan</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
