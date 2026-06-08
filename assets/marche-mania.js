class MarcheManiaTheme {
  constructor() {
    this.initScrollReveal();
    this.initCountdown();
    this.initStockBar();
    this.initFaqAccessibility();
    this.initReviewsCarousel();
  }

  initScrollReveal() {
    const elements = document.querySelectorAll('.mm-scroll-reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  initCountdown() {
    const countdowns = document.querySelectorAll('[data-mm-countdown]');
    countdowns.forEach((el) => {
      const endDate = el.dataset.mmCountdown;
      if (!endDate) return;

      const target = new Date(endDate).getTime();
      const units = {
        days: el.querySelector('[data-unit="days"]'),
        hours: el.querySelector('[data-unit="hours"]'),
        minutes: el.querySelector('[data-unit="minutes"]'),
        seconds: el.querySelector('[data-unit="seconds"]')
      };

      const tick = () => {
        const now = Date.now();
        let diff = Math.max(0, target - now);

        const d = Math.floor(diff / 86400000);
        diff -= d * 86400000;
        const h = Math.floor(diff / 3600000);
        diff -= h * 3600000;
        const m = Math.floor(diff / 60000);
        diff -= m * 60000;
        const s = Math.floor(diff / 1000);

        if (units.days) units.days.textContent = String(d).padStart(2, '0');
        if (units.hours) units.hours.textContent = String(h).padStart(2, '0');
        if (units.minutes) units.minutes.textContent = String(m).padStart(2, '0');
        if (units.seconds) units.seconds.textContent = String(s).padStart(2, '0');
      };

      tick();
      setInterval(tick, 1000);
    });
  }

  initStockBar() {
    const bars = document.querySelectorAll('[data-mm-stock]');
    bars.forEach((bar) => {
      const percent = parseInt(bar.dataset.mmStock, 10) || 35;
      const fill = bar.querySelector('.mm-stock-bar__fill');
      if (fill) {
        requestAnimationFrame(() => {
          fill.style.width = percent + '%';
        });
      }
    });
  }

  initFaqAccessibility() {
    document.querySelectorAll('.mm-faq__item').forEach((item) => {
      const summary = item.querySelector('.mm-faq__question');
      if (summary) {
        summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');
        item.addEventListener('toggle', () => {
          summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');
        });
      }
    });
  }

  initReviewsCarousel() {
    document.querySelectorAll('[data-mm-carousel]').forEach((track) => {
      if (track.scrollWidth <= track.clientWidth) return;

      let paused = false;
      track.addEventListener('touchstart', () => { paused = true; }, { passive: true });
      track.addEventListener('touchend', () => { paused = false; }, { passive: true });
      track.addEventListener('mouseenter', () => { paused = true; });
      track.addEventListener('mouseleave', () => { paused = false; });

      setInterval(() => {
        if (paused) return;
        const card = track.querySelector('.mm-reviews-carousel__card');
        if (!card) return;
        const step = card.offsetWidth + 16;
        const max = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= max - 2) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: step, behavior: 'smooth' });
        }
      }, 4000);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MarcheManiaTheme();
});
