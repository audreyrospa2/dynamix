// Motion is limited to two moments:
//  1. the hero: the three figures walk in once on load
//  2. the time ladder: the bars grow to their length as you scroll to them
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  const figures = gsap.utils.toArray<HTMLElement>('[data-hero-figure]');
  if (figures.length) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('[data-hero-line]', { yPercent: 105, duration: 0.9, stagger: 0.09 })
      .from('[data-hero-fade]', { autoAlpha: 0, y: 14, duration: 0.7, stagger: 0.08 }, '-=0.5')
      .from(
        figures,
        { autoAlpha: 0, y: 60, scale: 0.96, filter: 'blur(14px)', duration: 1.3, stagger: 0.18, ease: 'power2.out' },
        0.15,
      );
  }

  document.querySelectorAll<HTMLElement>('[data-ladder-bar]').forEach((bar) => {
    gsap.fromTo(
      bar,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: bar, start: 'top 88%', once: true },
      },
    );
  });
}
