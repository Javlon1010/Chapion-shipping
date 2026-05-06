import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface text-slate">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <section className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate/60">About Us</p>
          <h1 className="text-balance text-3xl font-bold text-slate sm:text-4xl">Champion Shipping Logistics</h1>
          <p className="mx-auto max-w-3xl text-pretty text-base leading-8 text-slate/80">
            We combine freight shipping, warehousing, and customs services to provide reliable logistics solutions to our clients.
          </p>
        </section>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <div className="section-card min-w-0">
            <h2 className="text-xl font-semibold text-slate">Vision</h2>
            <p className="mt-4 text-pretty text-sm text-slate/80">To be the most trusted partner in global freight and logistics.</p>
          </div>
          <div className="section-card min-w-0">
            <h2 className="text-xl font-semibold text-slate">Mission</h2>
            <p className="mt-4 text-pretty text-sm text-slate/80">To deliver fast, safe, and transparent logistics services to our clients.</p>
          </div>
          <div className="section-card min-w-0">
            <h2 className="text-xl font-semibold text-slate">Values</h2>
            <p className="mt-4 text-pretty text-sm text-slate/80">Trust, accuracy, and putting client needs first.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
