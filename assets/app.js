const { products, contacts } = window.TMETAL_DATA;
const site = document.querySelector('#site');
const entries = Object.entries(products);

/* Font Awesome Jelly Fill arrows, used for every CTA and control */
const icon = (name) => `<i class="fa-jelly-fill fa-regular fa-${name}" aria-hidden="true"></i>`;
const arrow = icon('arrow-right');
const heading = (label, light, bold) => `<div class="editorial-heading"><p class="section-label"><i></i>${label}</p><h2><span>${light}</span><strong>${bold}</strong></h2></div>`;
const button = (label, href, style = '') => `<a class="button ${style}" href="${href}"><span>${label}</span>${arrow}</a>`;

/* ---------- Header + full-screen menu (POSCO-style ripple reveal) ---------- */
const menuColumns = [
  ['About us', '#about', [['Company', '#about'], ['Why Tulshyan', '#quality'], ['Careers', '#careers']]],
  ['Products', '#products', entries.map(([, p]) => [p.title, '#products'])],
  ['Industries', '#industries', [['Fabrication', '#industries'], ['Transport', '#industries'], ['Power', '#industries']]],
  ['Sustainability', '#sustainability', [['Our approach', '#sustainability'], ['Plan your requirement', '#contact']]],
];
const menuSecondRow = [
  ['Insights', '#insights', [['From the steel desk', '#insights'], ['Product guides', '#insights']]],
];
const menuCol = ([title, href, links]) => `<div class="menu-col"><h2><a href="${href}">${title}${arrow}</a></h2><ul>${links.map(([label, link]) => `<li><a href="${link}">${label}</a></li>`).join('')}</ul></div>`;

function header() {
  return `<header class="header"><div class="shell header-inner"><a class="logo" href="#top"><img src="assets/images/tulshyan-golden-logo.png" alt="Tulshyan Metals"></a><button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span></button></div></header>
  <span class="menu-ripple" aria-hidden="true"></span>
  <nav class="mobile-menu" id="site-menu" aria-label="Site menu" aria-hidden="true">
    <div class="shell menu-top"><a class="logo" href="#top"><img src="assets/images/tulshyan-golden-logo.png" alt="Tulshyan Metals"></a><button class="menu-close" type="button" aria-label="Close navigation"><span></span><span></span></button></div>
    <div class="shell menu-body">
      <div class="menu-row">${menuColumns.map(menuCol).join('')}</div>
      <div class="menu-row menu-row--second">${menuSecondRow.map(menuCol).join('')}<div class="menu-quick"><a href="#contact">Request a quote</a><a href="#contact">Contact</a></div></div>
    </div>
    <p class="shell menu-location">Patna office · Koderma manufacturing presence · <a href="mailto:${contacts.email}">${contacts.email}</a></p>
  </nav>`;
}

function hero() { return `<section class="hero" id="top"><video class="hero-video" autoplay muted loop playsinline poster="assets/images/premium-mill-v2.png"><source src="assets/images/steel-workers-hero.mp4" type="video/mp4"></video><div class="hero-shade"></div><div class="shell hero-content"><h1>Steel made clear.<br><strong>Built to perform.</strong></h1><p class="section-copy section-copy--light">MS Angles, Flats, Rounds and Squares with published ranges and direct support from requirement to dispatch.</p><div class="hero-actions">${button('Explore products', '#products', 'light')}${button('Request a quote', '#contact', 'outline')}</div></div></section>`; }

const productImages = {'ms-angle':'assets/images/generated/equal-angle-editorial-v2.png','ms-flat':'assets/images/generated/flat-bar-editorial-v2.png','ms-round':'assets/images/generated/round-bar-editorial-v2.png','ms-square':'assets/images/generated/square-bar-editorial-v2.png'};
function productsSection() { return `<section class="section products-v2 reveal" id="products"><div class="shell">${heading('Products', 'Profiles engineered for', 'real-world fabrication.')}<div class="product-editorial">${entries.map(([id,p])=>`<article class="product-story"><img class="product-main" src="${productImages[id]}" alt="${p.title} in an industrial setting"><div class="product-copy"><h3>${p.title}</h3><p>${p.short}</p><p class="product-range">${p.range}</p>${button('Request specifications', '#contact', 'ghost')}</div></article>`).join('')}</div></div></section>`; }

function industries() { const sectors=[['Structural fabrication','Profiles for frames, supports and general structural fabrication.','assets/images/generated/equal-angle-editorial-v2.png'],['Transport equipment','Flat and square profiles for trailers, tippers and supporting assemblies.','assets/images/generated/flat-bar-editorial-v2.png'],['Power infrastructure','Angle sections for transmission and tower-related fabrication.','assets/images/generated/round-bar-editorial-v2.png'],['General engineering','Round and square bars for pins, rollers, conveyors and machine components.','assets/images/generated/square-bar-editorial-v2.png'],['Construction systems','Sections for platforms, frames and site-built assemblies.','assets/images/generated/equal-angle-editorial-v2.png'],['Material handling','Profiles suited to conveyors, supports and workshop equipment.','assets/images/generated/round-bar-editorial-v2.png'],['Agricultural equipment','Practical steel profiles for implements and supporting fabrication.','assets/images/generated/square-bar-editorial-v2.png'],['Industrial maintenance','Versatile sections for repairs, upgrades and plant requirements.','assets/images/generated/flat-bar-editorial-v2.png']]; return `<section class="section industries reveal" id="industries"><div class="shell industry-head">${heading('Industries','Steel for the places where','performance matters.')}<div class="industry-controls"><button type="button" class="industry-prev" aria-label="Previous industry">${icon('arrow-left')}</button><button type="button" class="industry-next" aria-label="Next industry">${arrow}</button></div></div><div class="industry-viewport"><div class="industry-list">${sectors.map(([title,text,image])=>`<article><img src="${image}" alt="${title}"><div><h3>${title}</h3><p class="section-copy">${text}</p>${button('Discuss requirements', '#contact', 'ghost')}</div></article>`).join('')}</div></div></section>`; }

function about() { const stats=[['2006','Established',true],['4','Core product families',true],['2','Verified locations',true],['Jharkhand','Manufacturing presence',false]]; return `<section class="section about-v2 reveal" id="about"><div class="shell about-top"><div class="about-head">${heading('About Tulshyan','Focused manufacturing,','practical partnership.')}<p class="about-lead">Tulshyan Metals manufactures structural steel sections for construction, fabrication and engineering requirements.</p>${button('Talk to our team','#contact')}</div></div><div class="shell"><div class="about-media"><video autoplay muted loop playsinline preload="metadata" poster="assets/images/quality-inspection-v3.png"><source src="assets/images/steel-workers-about.mp4" type="video/mp4"></video><dl class="about-stats">${stats.map(([value,label,count])=>`<div><dt>${count?`<span class="count-up" data-count="${value}">0</span>`:value}</dt><dd>${label}</dd></div>`).join('')}</dl></div></div></section>`; }

function sustainability() { return `<section class="section sustainability reveal" id="sustainability"><div class="shell sustainability-title"><p class="section-label"><i></i>Sustainability</p><h2>Responsible progress,<br><strong>built into the process.</strong></h2></div><div class="shell sustain-feature"><div class="sustain-card"><h3>Clear specifications and appropriate profile selection can help reduce avoidable mismatch and rework.</h3>${button('Plan your requirement','#contact')}</div><img src="assets/images/generated/sustainable-steel-v2.png" alt="Responsible steel manufacturing with an engineer monitoring production"></div></section>`; }

function insights() { const posts=[['Product guide','Choosing between angles, flats, rounds and squares','A practical starting point for matching steel geometry to fabrication intent.','assets/images/product-family-v3.png'],['Specification','What to include in a steel requirement','Profile, dimensions, quantity and delivery location—the details that move an enquiry forward.','assets/images/quality-inspection-v3.png'],['Applications','How section geometry shapes the job','A concise view of where each of our four profile families is commonly used.','assets/images/contact-manager-v2.png'],['Quality','Why dimensional clarity matters','Clear dimensional information supports faster comparisons and more confident fabrication planning.','assets/images/quality-inspection-v3.png'],['Planning','Preparing a complete product enquiry','A simple checklist for profile, dimension, quantity and destination before the conversation begins.','assets/images/product-family-v3.png']]; return `<section class="section insights reveal" id="insights"><div class="shell insights-grid"><div class="insights-intro"><h2>From the<br>steel desk.</h2><p class="section-copy section-copy--light">Useful notes for clearer product selection, specification and fabrication conversations.</p><div class="insight-controls"><button type="button" class="insight-prev" aria-label="Previous insight">${icon('arrow-left')}</button><button type="button" class="insight-next" aria-label="Next insight">${arrow}</button></div></div><div class="insight-viewport"><div class="insight-track">${posts.map(([tag,title,text,image])=>`<article class="insight-card"><img src="${image}" alt=""><div><span>${tag}</span><h3><a href="#contact">${title}</a></h3><p class="section-copy section-copy--light">${text}</p><a class="insight-link" href="#contact" aria-label="Read ${title}">${arrow}</a></div></article>`).join('')}</div></div></div></section>`; }

function why() { const reasons=[['layers-3','Focused range','Four essential profile families organized around published size ranges.'],['file-search-2','Clear information','Dimensions, application context and product ranges remain easy to compare.'],['messages-square','Direct conversation','A practical path from profile choice to a qualified requirement.']];return `<section class="section confidence reveal" id="quality"><div class="shell confidence-head">${heading('Why Tulshyan Metals','Confidence is built into','every useful detail.')}</div><div class="shell icon-reasons">${reasons.map(([icn,title,text])=>`<article><i data-lucide="${icn}" aria-hidden="true"></i><h3>${title}</h3><p class="section-copy">${text}</p></article>`).join('')}</div><div class="confidence-band"><div class="shell"><div class="confidence-statement"><h2>Profile. Dimension. Quantity. Destination.</h2><p>Clear specifications and appropriate profile selection can help reduce avoidable mismatch and rework.</p></div>${button('Start your requirement','#contact','outline')}</div></div></section>`; }

function careers(){return `<section class="section careers reveal" id="careers"><div class="shell career-grid"><div class="career-copy"><p class="section-label"><i></i>Careers</p><h2>Build your<br><strong>next chapter here.</strong></h2><p>Interested in working with a focused structural-steel manufacturer? Send your profile to our team for consideration.</p>${button('Share your profile',`mailto:${contacts.email}?subject=Career%20enquiry`)}</div><div class="career-visuals"><figure class="career-main"><img src="assets/images/contact-manager-v2.png" alt="Industrial team collaboration"><figcaption>Practical work. Clear responsibility. Shared progress.</figcaption></figure><figure class="career-side"><p>Manufacturing and commercial opportunities</p><img src="assets/images/quality-inspection-v3.png" alt="Steel quality inspection"></figure></div></div></section>`}

function supportBand(){return `<div class="shell support-shell"><section class="support-band" aria-label="Quick help"><div class="support-topics"><article><span>Product selection</span><a href="#products">Compare four profile families</a></article><article><span>Technical requirements</span><a href="#contact">Share dimensions and quantity</a></article><article><span>Delivery planning</span><a href="#contact">Discuss your destination</a></article></div><div class="support-contact"><label for="site-search">Questions for Tulshyan?</label><div class="support-search"><input id="site-search" type="search" placeholder="Search products or topics"><button type="button" aria-label="Search">${arrow}</button></div>${button('Contact us','#contact')}</div></section></div>`}

function contact() { return `<section class="section contact reveal" id="contact"><div class="contact-wrap" role="img" aria-label="Tulshyan Metals representative at the steel plant"><div class="shell contact-inner"><div class="contact-card"><p class="section-label"><i></i>Start a conversation</p><h2>Tell us what you need.</h2><p>Share the profile, dimensions, quantity and delivery location. Our team will help shape a clearer requirement.</p><div class="contact-links"><a href="mailto:${contacts.email}">${contacts.email}</a><a href="tel:+919199524162">${contacts.phone}</a></div>${button('Email your requirement',`mailto:${contacts.email}`)}</div></div></div></section>`; }
function footer() { return `<footer class="footer">${supportBand()}<div class="footer-main"><div class="footer-brand"><img src="assets/images/tulshyan-golden-logo.png" alt="Tulshyan Metals"><p>Structural steel sections for construction, fabrication and engineering.</p><a href="mailto:${contacts.email}">${contacts.email}</a></div><div class="footer-col"><h3>Navigation</h3><a href="#about">About us</a><a href="#products">Products</a><a href="#sustainability">Sustainability</a><a href="#careers">Careers</a><a href="#insights">Insights</a></div><div class="footer-col"><h3>Site tools</h3><a href="#contact">Request a quote</a><a href="#quality">Why Tulshyan</a><a href="#industries">Industries</a><a href="#contact">Contact</a></div><div class="footer-finder"><h3>Find a product</h3><label>By profile<select><option>Select a product family</option><option>MS Equal Angles</option><option>MS Flat Bars</option><option>MS Round Bars</option><option>MS Square Bars</option></select></label><label>By use<select><option>Select an industry</option><option>Structural fabrication</option><option>Transport equipment</option><option>Power infrastructure</option><option>General engineering</option></select></label>${button('Browse products','#products')}</div></div><div class="footer-bottom"><span>© 2026 Tulshyan Metals Pvt. Ltd.</span><a href="#top">Back to top ${icon('arrow-up')}</a></div></footer>`; }

site.innerHTML = header() + `<main>${hero()}${productsSection()}${industries()}${about()}${why()}${sustainability()}${insights()}${careers()}${contact()}</main>` + footer();
if (window.lucide) window.lucide.createIcons();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Menu: circular ripple grows from the hamburger, then panel fades up ---------- */
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.menu-close');
const ripple = document.querySelector('.menu-ripple');
let menuOpen = false;

function placeRipple(x, y) {
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  ripple.style.width = ripple.style.height = `${r * 2}px`;
  ripple.style.left = `${x - r}px`;
  ripple.style.top = `${y - r}px`;
}
function setMenu(open, origin) {
  if (open === menuOpen) return;
  menuOpen = open;
  const rect = menuButton.getBoundingClientRect();
  const x = origin?.x || rect.left + rect.width / 2;
  const y = origin?.y || rect.top + rect.height / 2;
  if (open) placeRipple(x, y);
  document.body.classList.toggle('menu-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  menuButton.setAttribute('aria-expanded', String(open));
  if (open) setTimeout(() => menuClose.focus({ preventScroll: true }), reduceMotion ? 0 : 450);
  else menuButton.focus({ preventScroll: true });
}
menuButton.addEventListener('click', (e) => setMenu(true, e.clientX ? { x: e.clientX, y: e.clientY } : null));
menuClose.addEventListener('click', () => setMenu(false));
mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuOpen) setMenu(false); });

/* ---------- Count-up stats ---------- */
const counters = [...document.querySelectorAll('.count-up')];
const counterObserver = new IntersectionObserver((items) => items.forEach((item) => {
  if (!item.isIntersecting) return;
  const el = item.target, target = Number(el.dataset.count), start = performance.now(), duration = 900;
  function tick(now) { const p = Math.min((now - start) / duration, 1); el.textContent = Math.round(target * p); if (p < 1) requestAnimationFrame(tick); }
  requestAnimationFrame(tick);
  counterObserver.unobserve(el);
}), { threshold: .6 });
counters.forEach((el) => counterObserver.observe(el));

/* ---------- Seamless infinite slider (works in both directions, never rewinds) ---------- */
function loopSlider({ viewport, track, prev, next, perView, gap, autoplay = 0, duration = 650 }) {
  const originals = [...track.children];
  const count = originals.length;
  const clone = (el) => { const c = el.cloneNode(true); c.setAttribute('aria-hidden', 'true'); c.querySelectorAll('a,button').forEach((n) => n.setAttribute('tabindex', '-1')); return c; };
  originals.slice().reverse().forEach((el) => track.prepend(clone(el)));
  originals.forEach((el) => track.append(clone(el)));
  const slides = [...track.children];
  let index = count, step = 0, busy = false, timer = null;

  function layout() {
    const style = getComputedStyle(viewport);
    const width = viewport.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    const pv = perView(), g = gap();
    const slideWidth = (width - Math.floor(pv) * g) / pv;
    track.style.gap = `${g}px`;
    slides.forEach((s) => { s.style.flex = `0 0 ${slideWidth}px`; s.style.width = `${slideWidth}px`; });
    step = slideWidth + g;
    jump();
  }
  function jump() { track.style.transition = 'none'; track.style.transform = `translate3d(${-index * step}px,0,0)`; void track.offsetWidth; }
  function go(dir) {
    if (busy) return;
    busy = true;
    index += dir;
    track.style.transition = `transform ${reduceMotion ? 1 : duration}ms cubic-bezier(.22,.61,.36,1)`;
    track.style.transform = `translate3d(${-index * step}px,0,0)`;
  }
  track.addEventListener('transitionend', (e) => {
    if (e.target !== track) return;
    if (index >= count * 2) index -= count;
    if (index < count) index += count;
    jump();
    busy = false;
  });
  const start = () => { if (autoplay && !reduceMotion) { stop(); timer = setInterval(() => go(1), autoplay); } };
  const stop = () => { clearInterval(timer); timer = null; };
  next.addEventListener('click', () => { go(1); start(); });
  prev.addEventListener('click', () => { go(-1); start(); });
  viewport.addEventListener('mouseenter', stop);
  viewport.addEventListener('mouseleave', start);
  viewport.addEventListener('focusin', stop);
  viewport.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  let touchX = null;
  viewport.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; stop(); }, { passive: true });
  viewport.addEventListener('touchend', (e) => { if (touchX === null) return; const dx = e.changedTouches[0].clientX - touchX; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); touchX = null; start(); });
  window.addEventListener('resize', layout);
  layout();
  start();
}

loopSlider({
  viewport: document.querySelector('.industry-viewport'),
  track: document.querySelector('.industry-list'),
  prev: document.querySelector('.industry-prev'),
  next: document.querySelector('.industry-next'),
  perView: () => (innerWidth >= 1700 ? 4.5 : innerWidth >= 1300 ? 3.5 : innerWidth >= 900 ? 2.5 : innerWidth >= 600 ? 1.5 : 1.15),
  gap: () => (innerWidth >= 768 ? 22 : 14),
  autoplay: 3200,
});
loopSlider({
  viewport: document.querySelector('.insight-viewport'),
  track: document.querySelector('.insight-track'),
  prev: document.querySelector('.insight-prev'),
  next: document.querySelector('.insight-next'),
  perView: () => (innerWidth >= 768 ? 2 : 1),
  gap: () => 22,
});

/* ---------- Support band overlaps the contact banner and footer half / half ---------- */
const band = document.querySelector('.support-band');
function setBandOverlap() {
  const half = innerWidth > 1050 ? Math.round(band.offsetHeight / 2) : 0;
  document.documentElement.style.setProperty('--band-half', `${half}px`);
}
window.addEventListener('resize', setBandOverlap);
window.addEventListener('load', setBandOverlap);
if ('ResizeObserver' in window) new ResizeObserver(setBandOverlap).observe(band);
setBandOverlap();

/* ---------- Reveal on scroll ---------- */
const observer = new IntersectionObserver((items) => items.forEach((item) => { if (item.isIntersecting) { item.target.classList.add('visible'); observer.unobserve(item.target); } }), { threshold: .08 });
document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
