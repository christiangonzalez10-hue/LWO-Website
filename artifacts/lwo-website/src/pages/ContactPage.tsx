import { ArrowUpRight, Building2, CheckCircle2, Loader2, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { Footer, SiteHeader } from '@/components/SiteChrome';
import { useSEO } from '@/hooks/useSEO';

// ─── Web3Forms ────────────────────────────────────────────────────────────────
// Sign up free at https://web3forms.com using contact@lwosolutions.com
// to receive submissions at that address. Paste your Access Key below.
// The key is safe to commit (it is not a secret — it is scoped to your domain).
const WEB3FORMS_KEY = '700758c1-82d4-4b03-9915-3f2ac03650ea';
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  'Office Furniture Installation',
  'Commercial Storage',
  'Commercial Moving',
  'Commercial Painting',
  'Commercial Design & Furniture',
  'Commercial Relocation',
  'Multiple Services / Not Sure',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const EMPTY: Fields = { name: '', company: '', email: '', phone: '', service: '', message: '' };

export default function ContactPage() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useSEO({
    title: 'Contact Lakewoods Office Solutions | Request a Consultation',
    description: 'Get in touch with Lakewoods Office Solutions. Request a free consultation for office furniture installation, commercial moving, painting, design, or relocation services.',
    canonical: '/contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Lakewoods Office Solutions',
      url: 'https://www.lwosolutions.com/contact',
      description: 'Contact form for requesting a consultation on commercial office services.',
    },
  });

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New inquiry from ${fields.name} — ${fields.service || 'General'}`,
          from_name: 'Lakewoods Office Solutions Website',
          ...fields,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setState('success');
        setFields(EMPTY);
      } else {
        throw new Error(data.message ?? 'Submission failed');
      }
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const inputClass =
    'w-full border border-[#d8d0c3] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#b0a898] outline-none transition-colors focus:border-[#1F8080] focus:ring-1 focus:ring-[#1F8080]';
  const labelClass = 'mb-1.5 block text-[10px] font-bold uppercase tracking-[.18em] text-[#1F8080]';

  return (
    <main className="min-h-screen bg-white font-['Montserrat'] text-[#4E4B66]">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">GET IN TOUCH</p>
        <h1 className="mt-7 text-3xl font-bold uppercase leading-[1.3] tracking-[.18em] text-[#1F8080] md:text-5xl">
          Request a<br />Consultation
        </h1>
        <div className="mx-auto mt-8 h-px w-20 bg-[#C9A96E]" />
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8">
          Tell us about your project and we'll be in touch within one business day. No commitment
          required — just a conversation about how we can help.
        </p>
      </section>

      {/* Form + Info */}
      <section className="mx-auto grid max-w-7xl gap-0 border-y border-[#d8d0c3] lg:grid-cols-[1fr_380px]">

        {/* Form */}
        <div className="border-b border-[#d8d0c3] px-8 py-14 lg:border-b-0 lg:border-r lg:px-14">
          {state === 'success' ? (
            <div className="flex flex-col items-center py-20 text-center">
              <CheckCircle2 size={48} className="text-[#1F8080]" strokeWidth={1.2} />
              <h2 className="mt-6 text-2xl font-bold uppercase tracking-[.15em] text-[#1A1A1A]">
                Message received
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7">
                Thank you for reaching out. A member of our team will be in touch within one business day.
              </p>
              <button
                onClick={() => setState('idle')}
                className="mt-8 text-[10px] font-bold uppercase tracking-[.18em] text-[#1F8080] underline underline-offset-4 hover:text-[#d95d07]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={fields.name}
                    onChange={set('name')}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Company</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={fields.company}
                    onChange={set('company')}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@acmecorp.com"
                    value={fields.email}
                    onChange={set('email')}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(801) 555-0100"
                    value={fields.phone}
                    onChange={set('phone')}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Service Interested In</label>
                <select
                  value={fields.service}
                  onChange={set('service')}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Tell us about your project *</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Describe your space, timeline, number of locations, or anything else that helps us understand the project…"
                  value={fields.message}
                  onChange={set('message')}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {state === 'error' && (
                <p className="text-xs text-red-600">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="flex w-full items-center justify-center gap-3 bg-[#BF5200] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#D95C00] disabled:opacity-60 sm:w-auto sm:self-start"
              >
                {state === 'submitting' ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    SENDING…
                  </>
                ) : (
                  <>
                    SEND MESSAGE <ArrowUpRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info sidebar */}
        <div className="bg-[#1A1A1A] px-10 py-14 text-white">
          <h3 className="text-[10px] font-bold uppercase tracking-[.24em] text-[#C9A96E]">CONTACT DETAILS</h3>
          <div className="mt-8 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <Mail size={18} className="mt-0.5 shrink-0 text-[#C9A96E]" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/50">Email</p>
                <a
                  href="mailto:contact@lwosolutions.com"
                  className="mt-1 block text-sm text-white hover:text-[#C9A96E] transition-colors"
                >
                  contact@lwosolutions.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={18} className="mt-0.5 shrink-0 text-[#C9A96E]" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/50">Phone</p>
                <a
                  href="tel:8017125772"
                  className="mt-1 block text-sm text-white hover:text-[#C9A96E] transition-colors"
                >
                  (801) 712-5772
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Building2 size={18} className="mt-0.5 shrink-0 text-[#C9A96E]" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/50">Based in</p>
                <p className="mt-1 text-sm text-white">Utah, United States</p>
                <p className="mt-1 text-xs text-white/50">Proudly serving Utah & the Mountain West</p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/15 pt-10">
            <h3 className="text-[10px] font-bold uppercase tracking-[.24em] text-[#C9A96E]">RESPONSE TIME</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              We respond to all inquiries within <span className="font-semibold text-white">one business day</span>.
              For urgent projects, call us directly.
            </p>
          </div>

          <div className="mt-10 border-t border-white/15 pt-10">
            <h3 className="text-[10px] font-bold uppercase tracking-[.24em] text-[#C9A96E]">OUR SERVICES</h3>
            <div className="mt-4 flex flex-col gap-2">
              {SERVICES.slice(0, 6).map((s) => (
                <p key={s} className="text-xs text-white/60">{s}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
