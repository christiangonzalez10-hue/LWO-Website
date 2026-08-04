import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white font-['Montserrat'] text-[#4E4B66]">
      <div className="mx-auto h-px w-20 bg-[#C9A96E]" />
      <p className="mt-8 text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">404</p>
      <h1 className="mt-5 text-3xl font-bold uppercase tracking-[.15em] text-[#1A1A1A]">Page not found</h1>
      <p className="mt-5 max-w-sm text-center text-sm leading-7">
        The page you're looking for doesn't exist or has moved.
      </p>
      <a
        href="/"
        className="mt-9 inline-flex items-center gap-3 bg-[#F46D0B] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#d95d07]"
      >
        BACK TO HOME <ArrowUpRight size={15} />
      </a>
    </main>
  );
}
