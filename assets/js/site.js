(function () {
  "use strict";

  var ROUTES = {
    home: "index.html",
    houses: "doma.html",
    saunas: "bani.html",
    windows: "okna.html",
    aluminum: "alyuminij.html",
    process: "process.html",
    calculator: "calculator.html",
    contacts: "contacts.html",
    privacy: "privacy.html",
  };

  var PAGE = document.body.getAttribute("data-page") || "home";

  var LOGO_SVG =
    '<svg class="kk-logo__mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">' +
    '<rect x="1" y="1" width="38" height="38" stroke="currentColor" stroke-width="1.5"/>' +
    '<path d="M8 28V12h6M32 12v16h-6" stroke="currentColor" stroke-width="1.5"/>' +
    '<path d="M14 20h12" stroke="#52634b" stroke-width="1.5"/>' +
    "</svg>";

  function isActive(key) {
    return PAGE === key ? " is-active" : "";
  }

  function headerHTML() {
    return (
      '<header class="kk-header" id="kk-header">' +
      '<div class="kk-header__bar">' +
      '<a class="kk-logo" href="' +
      ROUTES.home +
      '" aria-label="Контур Комфорта — на главную">' +
      LOGO_SVG +
      '<span class="kk-logo__text">' +
      '<span class="kk-logo__name">Контур Комфорта</span>' +
      '<span class="kk-logo__tag">Архитектура • Конструкции</span>' +
      "</span>" +
      "</a>" +
      '<nav class="kk-nav" aria-label="Основная навигация">' +
      '<a class="kk-nav__link' +
      isActive("home") +
      '" href="' +
      ROUTES.home +
      '">Главная</a>' +
      '<div class="kk-nav__item" data-mega>' +
      '<button type="button" class="kk-nav__link' +
      (["houses", "saunas", "windows", "aluminum"].indexOf(PAGE) >= 0
        ? " is-active"
        : "") +
      '" aria-expanded="false" aria-haspopup="true" data-mega-btn>' +
      "Услуги" +
      '<svg class="kk-nav__chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.4"/></svg>' +
      "</button>" +
      '<div class="kk-mega" role="menu">' +
      '<div class="kk-mega__grid">' +
      megaCard("01", "Строительство домов", "Каркас, брус, газобетон — проект и смета под участок", ROUTES.houses, "houses") +
      megaCard("02", "Бани", "Банные комплексы из бруса, каркаса и газобетона", ROUTES.saunas, "saunas") +
      megaCard("03", "Окна ПВХ", "Собственное производство, монтаж и ремонт", ROUTES.windows, "windows") +
      megaCard("04", "Алюминиевые системы", "Тёплый алюминий, витражи и фасадное остекление", ROUTES.aluminum, "aluminum") +
      "</div>" +
      '<a class="kk-mega__footer" href="' +
      ROUTES.calculator +
      '"><span>Нужен быстрый расчёт окон</span><span>Калькулятор →</span></a>' +
      "</div>" +
      "</div>" +
      '<a class="kk-nav__link' +
      isActive("process") +
      '" href="' +
      ROUTES.process +
      '">Как работаем</a>' +
      '<a class="kk-nav__link' +
      isActive("calculator") +
      '" href="' +
      ROUTES.calculator +
      '">Калькулятор</a>' +
      '<a class="kk-nav__link' +
      isActive("contacts") +
      '" href="' +
      ROUTES.contacts +
      '">Контакты</a>' +
      "</nav>" +
      '<div class="kk-actions">' +
      '<a class="kk-cta" href="' +
      ROUTES.calculator +
      '">Рассчитать</a>' +
      '<button type="button" class="kk-burger" id="kk-burger" aria-label="Открыть меню" aria-expanded="false">' +
      '<span class="kk-burger__lines" aria-hidden="true"><span></span><span></span><span></span></span>' +
      "</button>" +
      "</div>" +
      "</div>" +
      "</header>" +
      drawerHTML()
    );
  }

  function megaCard(code, title, desc, href, key) {
    return (
      '<a class="kk-mega__card' +
      isActive(key) +
      '" href="' +
      href +
      '" role="menuitem">' +
      '<span class="kk-mega__code">' +
      code +
      "</span>" +
      '<span class="kk-mega__title">' +
      title +
      "</span>" +
      '<span class="kk-mega__desc">' +
      desc +
      "</span>" +
      "</a>"
    );
  }

  function drawerHTML() {
    return (
      '<div class="kk-drawer" id="kk-drawer" aria-hidden="true">' +
      '<div class="kk-drawer__backdrop" data-drawer-close></div>' +
      '<div class="kk-drawer__panel" role="dialog" aria-modal="true" aria-label="Меню">' +
      '<div class="kk-drawer__head">' +
      '<a class="kk-logo" href="' +
      ROUTES.home +
      '">' +
      LOGO_SVG +
      '<span class="kk-logo__text"><span class="kk-logo__name">Контур Комфорта</span></span>' +
      "</a>" +
      '<button type="button" class="kk-drawer__close" data-drawer-close aria-label="Закрыть">×</button>' +
      "</div>" +
      '<div class="kk-drawer__body">' +
      '<a class="kk-drawer__link' +
      isActive("home") +
      '" href="' +
      ROUTES.home +
      '">Главная</a>' +
      '<div class="kk-drawer__group-label">Услуги</div>' +
      '<div class="kk-drawer__sub">' +
      '<a class="' +
      isActive("houses").trim() +
      '" href="' +
      ROUTES.houses +
      '">Строительство домов</a>' +
      '<a class="' +
      isActive("saunas").trim() +
      '" href="' +
      ROUTES.saunas +
      '">Бани</a>' +
      '<a class="' +
      isActive("windows").trim() +
      '" href="' +
      ROUTES.windows +
      '">Окна ПВХ</a>' +
      '<a class="' +
      isActive("aluminum").trim() +
      '" href="' +
      ROUTES.aluminum +
      '">Алюминиевые конструкции</a>' +
      "</div>" +
      '<a class="kk-drawer__link' +
      isActive("process") +
      '" href="' +
      ROUTES.process +
      '">Как мы работаем</a>' +
      '<a class="kk-drawer__link' +
      isActive("calculator") +
      '" href="' +
      ROUTES.calculator +
      '">Калькулятор окон</a>' +
      '<a class="kk-drawer__link' +
      isActive("contacts") +
      '" href="' +
      ROUTES.contacts +
      '">Контакты</a>' +
      "</div>" +
      '<div class="kk-drawer__foot">' +
      '<a class="kk-cta" href="' +
      ROUTES.calculator +
      '" style="width:100%">Рассчитать стоимость</a>' +
      '<div class="kk-drawer__meta">Пос. Шушары, ул. Ленина, 1А<br>+7 (812) 000-00-00</div>' +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function footerHTML() {
    return (
      '<footer class="w-full bg-surface-container-low border-t border-primary-container/10">' +
      '<div class="max-w-7xl mx-auto px-6 lg:px-12 pt-space-2xl pb-space-xl">' +
      '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter pb-space-2xl border-b border-primary-container/10">' +
      '<div class="lg:col-span-4 flex flex-col gap-space-md">' +
      '<a class="kk-footer-logo" href="' +
      ROUTES.home +
      '">' +
      LOGO_SVG +
      '<span class="font-headline-sm text-headline-sm uppercase tracking-wider text-primary font-semibold">Контур Комфорта</span>' +
      "</a>" +
      '<p class="font-body-md text-body-md text-on-surface-variant max-w-sm">Строим пространство для комфортной жизни. Дома, бани и окна — от производства до монтажа.</p>' +
      '<div class="flex flex-col gap-1 pt-2 font-label-technical text-label-technical text-on-surface-variant">' +
      '<span class="text-secondary font-medium">Производство &amp; Офис</span>' +
      "<span>Посёлок Шушары, улица Ленина, дом 1А</span>" +
      '<span class="text-outline">География работ: по всей территории РФ</span>' +
      "</div>" +
      "</div>" +
      '<div class="lg:col-span-3 flex flex-col gap-space-sm">' +
      '<h4 class="font-label-caps text-label-caps uppercase tracking-widest text-primary mb-2">Направления</h4>' +
      '<ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">' +
      '<li><a class="hover:text-primary transition-colors" href="' +
      ROUTES.houses +
      '">Строительство загородных домов</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="' +
      ROUTES.saunas +
      '">Бани и банные комплексы</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="' +
      ROUTES.windows +
      '">Окна ПВХ и остекление</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="' +
      ROUTES.aluminum +
      '">Алюминиевые фасадные системы</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="' +
      ROUTES.calculator +
      '">Онлайн-калькулятор параметров</a></li>' +
      "</ul>" +
      "</div>" +
      '<div class="lg:col-span-2 flex flex-col gap-space-sm">' +
      '<h4 class="font-label-caps text-label-caps uppercase tracking-widest text-primary mb-2">Компания</h4>' +
      '<ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">' +
      '<li><a class="hover:text-primary transition-colors" href="' +
      ROUTES.home +
      '">О компании</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="' +
      ROUTES.process +
      '">Регламент и этапы работ</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="' +
      ROUTES.contacts +
      '">Контакты</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="' +
      ROUTES.privacy +
      '">Политика конфиденциальности</a></li>' +
      "</ul>" +
      "</div>" +
      '<div class="lg:col-span-3 flex flex-col gap-space-sm">' +
      '<h4 class="font-label-caps text-label-caps uppercase tracking-widest text-primary mb-2">Связь</h4>' +
      '<div class="flex flex-col gap-2.5 font-body-sm text-body-sm">' +
      '<div class="flex flex-col"><span class="font-label-technical text-label-technical text-outline uppercase">Телефон</span><a class="text-on-surface hover:text-secondary" href="tel:+78120000000">+7 (812) 000-00-00</a></div>' +
      '<div class="flex flex-col"><span class="font-label-technical text-label-technical text-outline uppercase">Электронная почта</span><a class="text-on-surface hover:text-secondary" href="mailto:info@konturkomforta.ru">info@konturkomforta.ru</a></div>' +
      '<div class="p-3 bg-surface border border-outline-variant/60 font-label-technical text-[11px] text-on-surface-variant leading-relaxed mt-2">Реквизиты и документы предоставляются по запросу при оформлении договора.</div>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="pt-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-label-technical text-label-technical text-outline">' +
      "<p>© 2026 «Контур Комфорта». Все права защищены. Информация на сайте не является публичной офертой.</p>" +
      '<div class="flex items-center gap-6"><span>Санкт-Петербург • Шушары</span><a class="hover:text-on-surface transition-colors" href="' +
      ROUTES.privacy +
      '">Политика обработки данных</a></div>' +
      "</div>" +
      "</div>" +
      "</footer>"
    );
  }

  function mountChrome() {
    var mount = document.getElementById("site-header");
    if (mount) {
      mount.outerHTML = headerHTML();
    } else {
      document.body.insertAdjacentHTML("afterbegin", headerHTML());
    }

    var foot = document.getElementById("site-footer");
    if (foot) {
      foot.outerHTML = footerHTML();
    } else {
      var oldFoot = document.querySelector("footer");
      if (oldFoot) oldFoot.remove();
      document.body.insertAdjacentHTML("beforeend", footerHTML());
    }

    bindHeader();
    rewriteLegacyLinks();
    initMotion();
  }

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function initMotion() {
    document.documentElement.classList.add("kk-motion");
    document.body.classList.add("kk-page-enter");

    enhanceInteractive();
    setupHero();
    setupReveals();
    setupParallax();
  }

  function enhanceInteractive() {
    // Shine on primary CTAs
    document
      .querySelectorAll(
        'a[href*="calculator"], a.kk-cta, a[href="#sketch-calc"], a[href="#consultation"], button[type="submit"]'
      )
      .forEach(function (el) {
        el.classList.add("kk-shine");
      });

    // Lift on direction / tech cards
    document.querySelectorAll("main .group").forEach(function (el) {
      el.classList.add("kk-lift");
    });

    // Media wrappers for image zoom
    document.querySelectorAll("main img").forEach(function (img) {
      var parent = img.parentElement;
      if (parent && !parent.classList.contains("kk-media")) {
        parent.classList.add("kk-media");
      }
    });
  }

  function setupHero() {
    var hero = document.querySelector("main section");
    if (!hero) return;

    var bg = hero.querySelector(".absolute.inset-0.bg-cover, [style*='background-image']");
    if (bg) {
      bg.classList.add("kk-hero-bg");
      /* No parallax on home hero — scale/translate caused top/side ghosting */
    }

    var content = hero.querySelector(".kk-hero__copy, .relative.z-10 .max-w-4xl, .relative.z-10 .max-w-3xl, .relative.z-10 .lg\\:col-span-7, .relative.z-10 > div");
    if (content) {
      Array.prototype.slice.call(content.children).forEach(function (child) {
        child.classList.add("kk-hero-line");
      });
    }

    var rail = hero.querySelector(".kk-hero__rail");
    if (rail) rail.classList.add("kk-hero-line");

    var primaryCta = hero.querySelector('a[href="#sketch-calc"], a[href="#calculator-form"], .kk-hero__btn--primary, a.bg-secondary');
    if (primaryCta) primaryCta.classList.add("kk-cta-pulse");

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.classList.add("kk-hero-ready");
      });
    });
  }

  function setupReveals() {
    if (prefersReducedMotion()) {
      document.querySelectorAll("[data-reveal], .kk-reveal, section").forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }

    // Auto-tag major blocks
    document.querySelectorAll("main section").forEach(function (section, i) {
      if (i === 0) return; // hero handled separately
      var heading = section.querySelector("h2, h1");
      if (heading && !heading.classList.contains("kk-reveal")) {
        heading.classList.add("kk-reveal");
      }
      var grid =
        section.querySelector(
          ".grid.grid-cols-1.md\\:grid-cols-2, .grid.grid-cols-1.lg\\:grid-cols-3, .grid.grid-cols-1.md\\:grid-cols-2.gap-gutter, .grid"
        ) || null;
      if (grid && grid.children.length >= 2 && !grid.getAttribute("data-reveal")) {
        grid.setAttribute("data-reveal", "stagger");
      }
      var intro = section.querySelector("p.font-body-md, p.font-body-lg");
      if (intro && !intro.classList.contains("kk-reveal")) {
        intro.classList.add("kk-reveal");
        intro.style.transitionDelay = "0.08s";
      }
    });

    var targets = document.querySelectorAll(
      ".kk-reveal, [data-reveal], .kk-draw-line"
    );
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    targets.forEach(function (el) {
      io.observe(el);
    });
  }

  function setupParallax() {
    if (prefersReducedMotion()) return;
    var layers = document.querySelectorAll("[data-parallax]");
    if (!layers.length) return;

    var ticking = false;
    function update() {
      ticking = false;
      var y = window.scrollY || 0;
      layers.forEach(function (layer) {
        /* Home hero: keep photo pinned — scale/translate caused edge ghosting */
        if (layer.classList.contains("kk-hero-bg")) {
          layer.style.transform = "none";
          return;
        }
        var speed = parseFloat(layer.getAttribute("data-parallax")) || 0.15;
        var rect = layer.getBoundingClientRect();
        var offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed * -0.15;
        var scrollOffset = y * speed * 0.35;
        layer.style.transform =
          "scale(1.06) translate3d(0, " + (scrollOffset + offset) * 0.15 + "px, 0)";
      });
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  }

  function bindHeader() {
    var header = document.getElementById("kk-header");
    var burger = document.getElementById("kk-burger");
    var drawer = document.getElementById("kk-drawer");
    var megaItem = document.querySelector("[data-mega]");
    var megaBtn = document.querySelector("[data-mega-btn]");

    function onScroll() {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function openDrawer(open) {
      if (!drawer || !burger) return;
      drawer.classList.toggle("is-open", open);
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.classList.toggle("kk-lock", open);
    }

    if (burger) {
      burger.addEventListener("click", function () {
        openDrawer(!drawer.classList.contains("is-open"));
      });
    }
    if (drawer) {
      drawer.querySelectorAll("[data-drawer-close]").forEach(function (el) {
        el.addEventListener("click", function () {
          openDrawer(false);
        });
      });
    }

    if (megaItem && megaBtn) {
      megaBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = !megaItem.classList.contains("is-open");
        megaItem.classList.toggle("is-open", open);
        megaBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      document.addEventListener("click", function (e) {
        if (!megaItem.contains(e.target)) {
          megaItem.classList.remove("is-open");
          megaBtn.setAttribute("aria-expanded", "false");
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          megaItem.classList.remove("is-open");
          openDrawer(false);
        }
      });
    }
  }

  function rewriteLegacyLinks() {
    var map = {
      glavnaya: ROUTES.home,
      "stroitelstvo-domov": ROUTES.houses,
      bani: ROUTES.saunas,
      "okna-pvkh": ROUTES.windows,
      "alyuminievye-konstruktsii": ROUTES.aluminum,
      "kak-my-rabotaem": ROUTES.process,
      "kalkulyator-okon": ROUTES.calculator,
      kontakty: ROUTES.contacts,
      "politika-konfidentsialnosti": ROUTES.privacy,
    };

    document.querySelectorAll("[data-path]").forEach(function (a) {
      var key = a.getAttribute("data-path");
      if (map[key]) a.setAttribute("href", map[key]);
    });

    // Common hash CTAs on home that pointed to #consultation etc. — leave as-is
    document.querySelectorAll('a[href="#"]').forEach(function (a) {
      var path = a.getAttribute("data-path");
      if (path && map[path]) a.setAttribute("href", map[path]);
    });
  }

  window.kkToast = function (title, message) {
    var el = document.createElement("div");
    el.className = "kk-toast";
    el.innerHTML =
      '<div class="kk-toast__title">' +
      title +
      "</div><div>" +
      message +
      "</div>";
    document.body.appendChild(el);
    requestAnimationFrame(function () {
      el.classList.add("is-show");
    });
    setTimeout(function () {
      el.classList.remove("is-show");
      setTimeout(function () {
        el.remove();
      }, 400);
    }, 4200);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountChrome);
  } else {
    mountChrome();
  }
})();
