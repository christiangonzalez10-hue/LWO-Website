import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { submitLead } from '@/lib/lead-submission';

type Fields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

const EMPTY_FIELDS: Fields = {
  name: '',
  company: '',
  phone: '',
  email: '',
  message: '',
};

const inputClass =
  'min-w-0 w-full border border-[#d8d0c3] bg-white px-3 py-2.5 text-xs text-[#1A1A1A] outline-none transition-colors placeholder:text-[#9a958c] focus:border-[#1F8080] focus:ring-1 focus:ring-[#1F8080]';
const labelClass = 'mb-0.5 block text-[9px] font-bold uppercase tracking-[.14em] text-[#1F8080]';

export default function QuoteRequestForm() {
  const [fields, setFields] = useState<Fields>(EMPTY_FIELDS);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function updateField(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');
    try {
      await submitLead({
        ...fields,
        subject: `New office furniture quote request from ${fields.name}`,
      });
      setStatus('success');
      setFields(EMPTY_FIELDS);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Please try again or call us directly.');
    }
  }

  return (
    <div
      id="quote-request"
      className="scroll-mt-24 border border-[#d8d0c3] bg-white p-3 shadow-[0_12px_36px_rgba(26,26,26,0.06)] sm:p-7"
    >
      {status === 'success' ? (
        <div role="status" className="flex min-h-[260px] flex-col items-center justify-center text-center">
          <CheckCircle2 size={36} className="text-[#1F8080]" strokeWidth={1.5} />
          <h2 className="mt-4 text-lg font-bold uppercase tracking-[.1em] text-[#1A1A1A]">Request received</h2>
          <p className="mt-3 max-w-sm text-sm leading-6">
            Thanks for telling us about your project. We’ll be in touch within one business day.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 text-xs font-bold text-[#1F8080] underline underline-offset-4"
          >
            Send another request
          </button>
        </div>
      ) : (
        <>
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#1F8080]">Start a project</p>
          <h2 className="mt-1 text-lg font-bold uppercase tracking-[.08em] text-[#1A1A1A] sm:text-xl">
            Request a quote
          </h2>
          <p className="mt-1 text-[11px] leading-4 text-[#4E4B66]">
            Tell us about your office project.
          </p>

          <form onSubmit={handleSubmit} className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
            <div>
              <label className={labelClass} htmlFor="quote-name">Name *</label>
              <input
                id="quote-name"
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                value={fields.name}
                onChange={(event) => updateField('name', event.target.value)}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="quote-company">Company</label>
              <input
                id="quote-company"
                name="company"
                autoComplete="organization"
                maxLength={160}
                value={fields.company}
                onChange={(event) => updateField('company', event.target.value)}
                className={inputClass}
                placeholder="Company"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="quote-phone">Phone *</label>
              <input
                id="quote-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={40}
                value={fields.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                className={inputClass}
                placeholder="(801) 555-0100"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="quote-email">Email *</label>
              <input
                id="quote-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={fields.email}
                onChange={(event) => updateField('email', event.target.value)}
                className={inputClass}
                placeholder="Work email"
              />
            </div>
            <div className="col-span-2">
              <label className={labelClass} htmlFor="quote-message">Short project description *</label>
              <textarea
                id="quote-message"
                name="message"
                required
              rows={1}
                maxLength={1000}
                value={fields.message}
                onChange={(event) => updateField('message', event.target.value)}
                className={`${inputClass} min-h-10 resize-y`}
                placeholder="What are you planning to install?"
              />
            </div>

            {status === 'error' && (
              <p role="alert" className="col-span-2 text-xs text-red-700">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="col-span-2 inline-flex min-h-10 items-center justify-center gap-2 bg-[#BF5200] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[.16em] text-white transition-colors hover:bg-[#D95C00] disabled:cursor-wait disabled:opacity-65"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Request a Quote <ArrowUpRight size={14} />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
