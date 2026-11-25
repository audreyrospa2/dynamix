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
