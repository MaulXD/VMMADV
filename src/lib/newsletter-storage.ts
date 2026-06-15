const STORAGE_KEY = "vmmadv-newsletter-subscribed";

export type NewsletterSubscription = {
  email: string;
  subscribedAt: string;
};

export function getNewsletterSubscription(): NewsletterSubscription | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as NewsletterSubscription;
    if (!parsed.email) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setNewsletterSubscription(email: string): void {
  if (typeof window === "undefined") return;

  const payload: NewsletterSubscription = {
    email,
    subscribedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}
