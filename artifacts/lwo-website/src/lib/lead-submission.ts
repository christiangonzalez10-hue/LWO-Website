import { trackGenerateLead } from './analytics';

const WEB3FORMS_KEY = '700758c1-82d4-4b03-9915-3f2ac03650ea';

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export async function submitLead(fields: Record<string, string>) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      from_name: 'Lakewoods Office Solutions Website',
      ...fields,
    }),
  });

  const result = (await response.json()) as Web3FormsResponse;
  if (!response.ok || !result.success) {
    throw new Error(result.message ?? 'Your message could not be sent. Please try again.');
  }

  trackGenerateLead();
}
