import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface text-slate">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <section className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-10">
          <h1 className="text-balance text-2xl font-semibold text-slate sm:text-3xl">Client Portal</h1>
          <p className="mt-4 text-pretty text-base leading-8 text-slate/80">
            If you are a client, enter your login credentials to access your account.
          </p>
          <form className="mt-8 grid gap-4">
            <input type="email" placeholder="Email" className="rounded-3xl border border-slate/10 bg-surface px-4 py-3 text-sm text-slate outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
            <input type="password" placeholder="Password" className="rounded-3xl border border-slate/10 bg-surface px-4 py-3 text-sm text-slate outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
            <button type="submit" className="btn-primary w-full">Log In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
