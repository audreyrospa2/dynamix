// Mobile menu + sub-menu toggles. No dependencies.
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const nav = document.querySelector<HTMLElement>('[data-nav]');

function setOpen(open: boolean) {
  if (!toggle || !nav) return;
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  document.documentElement.style.overflow = open ? 'hidden' : '';
}

toggle?.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    setOpen(false);
    document.querySelectorAll('.has-sub.is-open').forEach((el) => el.classList.remove('is-open'));
  }
});
window.matchMedia('(min-width: 62.01rem)').addEventListener('change', () => setOpen(false));

document.querySelectorAll<HTMLButtonElement>('[data-sub-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.has-sub');
    const open = !item?.classList.contains('is-open');
    item?.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
});

// ---- In-page section links -------------------------------------------------
// Links such as "/#workshops" are handled here so they always scroll to the
// section, even if the browser only updates the address bar.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollToHash(hash: string, smooth: boolean): boolean {
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  const target = id ? document.getElementById(id) : null;
  if (!target) return false;
  target.scrollIntoView({ behavior: smooth && !reduceMotion ? 'smooth' : 'auto', block: 'start' });
  return true;
}

document.addEventListener('click', (e) => {
  const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
  if (!link || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin || url.pathname.replace(/\/$/, '') !== window.location.pathname.replace(/\/$/, '') || !url.hash) return;
  if (scrollToHash(url.hash, true)) {
    e.preventDefault();
    history.pushState(null, '', url.hash);
  }
});

// Arriving with a hash (or pressing back/forward): wait for layout, then jump.
window.addEventListener('load', () => {
  if (location.hash) scrollToHash(location.hash, false);
});
window.addEventListener('popstate', () => {
  if (location.hash) scrollToHash(location.hash, false);
});
