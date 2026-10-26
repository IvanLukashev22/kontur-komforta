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

  var CONTACT = {
    phoneDisplay: "+7 (812) 000-00-00",
    phoneTel: "+78120000000",
    email: "info@konturkomforta.ru",
    addressShort: "Пос. Шушары, ул. Ленина, 1А",
    addressFull: "Посёлок Шушары, улица Ленина, дом 1А",
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

  function servicesActive() {
    return ["houses", "saunas", "windows", "aluminum"].indexOf(PAGE) >= 0
      ? " is-active"
      : "";
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
      servicesActive() +
      '" aria-expanded="false" aria-haspopup="true" data-mega-btn>' +
      "Услуги" +
      '<svg class="kk-nav__chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.4"/></svg>' +
      "</button>" +
      '<div class="kk-mega" role="menu">' +
      '<div class="kk-mega__grid">' +
      megaCard(
        "01",
        "Строительство домов",
        "Каркас, брус, газобетон — проект и смета под участок",
        ROUTES.houses,
        "houses"
      ) +
      megaCard(
        "02",
        "Бани",
        "Банные комплексы из бруса, каркаса и газобетона",
        ROUTES.saunas,
        "saunas"
      ) +
      megaCard(
        "03",
        "Окна ПВХ",
        "Собственное производство, монтаж и ремонт",
        ROUTES.windows,
        "windows"
      ) +
      megaCard(
        "04",
        "Алюминиевые системы",
        "Тёплый алюминий, витражи и фасадное остекление",
        ROUTES.aluminum,
        "aluminum"
      ) +
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
      '<div class="kk-drawer__meta">' +
      CONTACT.addressShort +
      "<br>" +
      '<a href="tel:' +
      CONTACT.phoneTel +
      '">' +
      CONTACT.phoneDisplay +
      "</a>" +
      "</div>" +
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
      "<span>" +
      CONTACT.addressFull +
      "</span>" +
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
      '<div class="flex flex-col"><span class="font-label-technical text-label-technical text-outline uppercase">Телефон</span><a class="text-on-surface hover:text-secondary" href="tel:' +
      CONTACT.phoneTel +
      '">' +
      CONTACT.phoneDisplay +
      "</a></div>" +
      '<div class="flex flex-col"><span class="font-label-technical text-label-technical text-outline uppercase">Электронная почта</span><a class="text-on-surface hover:text-secondary" href="mailto:' +
      CONTACT.email +
      '">' +
      CONTACT.email +
      "</a></div>" +
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
    drawLogo();
    initMotion();
  }

  function drawLogo() {
    if (prefersReducedMotion()) return;
    var mark = document.querySelector("#kk-header .kk-logo__mark");
    if (!mark) return;
    mark.querySelectorAll("path, rect").forEach(function (shape, i) {
      var len = 0;
      try {
        len = shape.getTotalLength();
      } catch (err) {
        return;
      }
      if (!len) return;
      shape.style.strokeDasharray = String(len);
      shape.style.strokeDashoffset = String(len);
      shape.style.transition =
        "stroke-dashoffset 1.15s cubic-bezier(0.22, 1, 0.36, 1) " +
        (0.2 + i * 0.12) +
        "s";
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          shape.style.strokeDashoffset = "0";
        });
      });
    });
  }

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function initMotion() {
    document.documentElement.classList.add("kk-motion");
    if (prefersReducedMotion()) {
      document.body.classList.add("kk-hero-ready");
    }

    enhanceInteractive();
    setupHero();
    setupReveals();
    setupParallax();
    setupProgress();
    setupMagnetic();
    setupFaq();
    setupImageUnveil();
  }

  function enhanceInteractive() {
    document
      .querySelectorAll(
        'a[href*="calculator"], a.kk-cta, a[href="#sketch-calc"], a[href="#consultation"], button[type="submit"]'
      )
      .forEach(function (el) {
        el.classList.add("kk-shine");
      });

    document.querySelectorAll("main .group").forEach(function (el) {
      el.classList.add("kk-lift");
    });

    document.querySelectorAll("main img").forEach(function (img) {
      var parent = img.parentElement;
      if (parent && !parent.classList.contains("kk-media")) {
        parent.classList.add("kk-media");
      }
    });
  }

  function findHero() {
    return document.querySelector("main .kk-hero, main [class*='-hero']");
  }

  function splitHeading(el) {
    if (!el || el.getAttribute("data-kk-split")) return;
    el.setAttribute("data-kk-split", "1");
    el.classList.add("kk-split");
    var index = 0;

    function process(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var text = child.textContent;
          if (!text || !/\S/.test(text)) return;
          var frag = document.createDocumentFragment();
          text.split(/(\s+)/).forEach(function (part) {
            if (!part || /^\s+$/.test(part)) {
              if (part) frag.appendChild(document.createTextNode(" "));
              return;
            }
            var word = document.createElement("span");
            word.className = "kk-word";
            var inner = document.createElement("span");
            inner.className = "kk-word__in";
            inner.style.transitionDelay = 0.18 + index * 0.055 + "s";
            inner.textContent = part;
            word.appendChild(inner);
            frag.appendChild(word);
            index += 1;
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== "BR") {
          process(child);
        }
      });
    }

    process(el);
  }

  function prepareHero() {
    var hero = findHero();
    if (!hero || hero.getAttribute("data-kk-prepared")) return hero;
    hero.setAttribute("data-kk-prepared", "1");

    var bg = hero.querySelector(
      ".absolute.inset-0.bg-cover, .kk-hero-bg, [style*='background-image']"
    );
    if (bg) bg.classList.add("kk-hero-bg");

    var primaryCta = hero.querySelector(
      'a[href="#sketch-calc"], a[href="#calculator-form"], .kk-hero__btn--primary, a[class*="btn--olive"], a.bg-secondary'
    );
    if (primaryCta) primaryCta.classList.add("kk-cta-pulse");

    if (prefersReducedMotion()) return hero;

    var h1 = hero.querySelector("h1");
    if (h1) splitHeading(h1);

    var copy = hero.querySelector("[class*='__copy']") || hero;
    var delay = 0.12;
    copy.querySelectorAll("p, [class*='actions']").forEach(function (node) {
      if (node.closest("h1")) return;
      node.classList.add("kk-hero-line");
      node.style.transitionDelay = delay + "s";
      delay += 0.12;
    });

    hero.querySelectorAll(".kk-hero__fact, [class$='-fact']").forEach(function (fact, i) {
      fact.classList.add("kk-hero-line");
      fact.style.transitionDelay = 0.62 + i * 0.08 + "s";
    });

    var caption = hero.querySelector("[class*='__caption']");
    if (caption) {
      caption.classList.add("kk-hero-line");
      caption.style.transitionDelay = "0.78s";
    }

    return hero;
  }

  function setupHero() {
    if (!findHero()) {
      document.body.classList.add("kk-hero-ready");
      return;
    }
    prepareHero();
    if (prefersReducedMotion()) document.body.classList.add("kk-hero-ready");
  }

  function runCounters() {
    var nodes = document.querySelectorAll(
      ".kk-hero__fact em, [class*='fact__value']"
    );
    nodes.forEach(function (el) {
      if (el.getAttribute("data-kk-counted")) return;
      var raw = (el.textContent || "").trim();
      var match = raw.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/);
      if (!match) return;
      var prefix = match[1];
      var numStr = match[2];
      var suffix = match[3];
      if (prefix.trim().length > 4) return;
      if (/\d/.test(suffix)) return;
      var target = parseFloat(numStr.replace(",", "."));
      if (!isFinite(target) || target <= 0 || target > 9999) return;
      el.setAttribute("data-kk-counted", "1");
      var decimals = (numStr.split(/[.,]/)[1] || "").length;
      var pad = /^0\d/.test(numStr) ? numStr.split(/[.,]/)[0].length : 0;
      var comma = numStr.indexOf(",") >= 0;
      var duration = 1200;
      var start = performance.now();

      function frame(now) {
        var t = Math.min(1, (now - start) / duration);
        var eased = 1 - Math.pow(1 - t, 3);
        var val = target * eased;
        var shown = decimals ? val.toFixed(decimals) : String(Math.round(val));
        if (pad) {
          var bits = shown.split(".");
          bits[0] = bits[0].padStart(pad, "0");
          shown = bits.join(".");
        }
        if (comma) shown = shown.replace(".", ",");
        el.textContent = prefix + shown + suffix;
        if (t < 1) requestAnimationFrame(frame);
      }

      el.textContent = prefix + (pad ? "0".repeat(pad) : "0") + (decimals ? (comma ? "," : ".") + "0".repeat(decimals) : "") + suffix;
      requestAnimationFrame(frame);
    });
  }

  function bootMotion() {
    document.documentElement.classList.add("kk-motion");
    if (prefersReducedMotion()) return;

    var curtain = document.createElement("div");
    curtain.className = "kk-curtain";
    curtain.setAttribute("aria-hidden", "true");
    curtain.innerHTML = '<span class="kk-curtain__edge"></span>';
    document.body.appendChild(curtain);
    curtain.addEventListener("animationend", function () {
      if (curtain.parentNode) curtain.remove();
    });
    window.setTimeout(function () {
      if (curtain.parentNode) curtain.remove();
    }, 1400);

    prepareHero();
    window.setTimeout(function () {
      document.body.classList.add("kk-hero-ready");
      runCounters();
    }, 280);
  }

  function setupProgress() {
    if (prefersReducedMotion()) return;
    var bar = document.createElement("div");
    bar.className = "kk-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    var ticking = false;
    function update() {
      ticking = false;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = "scaleX(" + p + ")";
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

  function setupMagnetic() {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches) return;
    document
      .querySelectorAll(
        ".kk-cta, a[class*='btn--olive'], a[class*='btn--primary'], a[class*='btn--dark'], button[type='submit']"
      )
      .forEach(function (btn) {
        btn.addEventListener("mousemove", function (e) {
          var rect = btn.getBoundingClientRect();
          if (rect.width > 460) {
            btn.style.transform = "";
            return;
          }
          var x = (e.clientX - rect.left) / rect.width - 0.5;
          var y = (e.clientY - rect.top) / rect.height - 0.5;
          btn.style.transform =
            "translate3d(" + x * 7 + "px," + y * 4 + "px,0)";
        });
        btn.addEventListener("mouseleave", function () {
          var from = btn.style.transform;
          if (!from) return;
          btn.style.transform = "";
          btn.animate(
            [{ transform: from }, { transform: "translate3d(0,0,0)" }],
            { duration: 480, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
          );
        });
      });
  }

  function setupFaq() {
    var items = document.querySelectorAll(".faq-item");
    if (!items.length) return;
    items.forEach(function (item) {
      var toggle = item.querySelector(".faq-toggle");
      var content = item.querySelector(".faq-content");
      if (!toggle || !content) return;
      var fresh = toggle.cloneNode(true);
      toggle.parentNode.replaceChild(fresh, toggle);
      if (!content.querySelector(".kk-faq__in")) {
        var inner = document.createElement("div");
        inner.className = "kk-faq__in";
        while (content.firstChild) inner.appendChild(content.firstChild);
        content.appendChild(inner);
      }
      content.classList.remove("hidden");
      content.classList.remove("is-open");
      fresh.setAttribute("aria-expanded", "false");
      fresh.addEventListener("click", function () {
        var willOpen = fresh.getAttribute("aria-expanded") !== "true";
        items.forEach(function (other) {
          var btn = other.querySelector(".faq-toggle");
          var panel = other.querySelector(".faq-content");
          var icon = other.querySelector(".material-symbols-outlined");
          if (panel) panel.classList.remove("is-open");
          if (btn) btn.setAttribute("aria-expanded", "false");
          if (icon) icon.style.transform = "rotate(0deg)";
        });
        if (willOpen) {
          content.classList.add("is-open");
          fresh.setAttribute("aria-expanded", "true");
          var icon = item.querySelector(".material-symbols-outlined");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    });
  }

  function setupImageUnveil() {
    if (prefersReducedMotion()) return;
    var imgs = document.querySelectorAll("main img");
    if (!imgs.length) return;
    var frames = [];
    Array.prototype.forEach.call(imgs, function (img, index) {
      if (img.classList.contains("kk-hero-bg")) return;
      if (img.closest(".kk-hero, [class*='-hero']")) return;
      img.classList.add("kk-unveil");
      if (index % 2) img.classList.add("kk-unveil--side");
      var parent = img.parentElement;
      if (!parent) return;
      var blocks = false;
      Array.prototype.forEach.call(parent.children, function (kid) {
        if (kid === img) return;
        var pos = window.getComputedStyle(kid).position;
        if (pos !== "absolute" && pos !== "fixed") blocks = true;
      });
      if (!blocks) parent.classList.add("kk-frame");
      if (frames.indexOf(parent) === -1) frames.push(parent);
    });
    if (!frames.length) return;
    function showFrame(frame) {
      frame.querySelectorAll("img.kk-unveil").forEach(function (img) {
        img.classList.add("is-in");
      });
    }
    if (!("IntersectionObserver" in window)) {
      frames.forEach(showFrame);
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          showFrame(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.2 }
    );
    frames.forEach(function (frame) {
      io.observe(frame);
    });
  }

  function setupReveals() {
    if (prefersReducedMotion()) {
      document
        .querySelectorAll("[data-reveal], .kk-reveal, section")
        .forEach(function (el) {
          el.classList.add("is-in");
        });
      return;
    }

    document.querySelectorAll("main section").forEach(function (section, i) {
      if (i === 0) return; // hero / first band handled separately
      if (section.classList.contains("kk-hero")) return;

      var heading = section.querySelector("h2, h1");
      if (heading && !heading.classList.contains("kk-reveal")) {
        heading.classList.add("kk-reveal");
      }
      var grid =
        section.querySelector(
          ".grid.grid-cols-1.md\\:grid-cols-2, .grid.grid-cols-1.lg\\:grid-cols-3, .grid.grid-cols-1.md\\:grid-cols-2.gap-gutter, .grid"
        ) || null;
      if (
        grid &&
        grid.children.length >= 2 &&
        !grid.getAttribute("data-reveal")
      ) {
        grid.setAttribute("data-reveal", "stagger");
      }
      var intro = section.querySelector("p.font-body-md, p.font-body-lg, [class*='eyebrow']");
      if (intro && !intro.classList.contains("kk-reveal") && !intro.closest(".kk-hero, [class*='-hero']")) {
        intro.classList.add("kk-reveal");
        intro.style.transitionDelay = "0.08s";
      }
      section.querySelectorAll("[class*='eyebrow']").forEach(function (brow) {
        if (brow.closest(".kk-hero, [class*='-hero']")) return;
        if (!brow.classList.contains("kk-reveal")) brow.classList.add("kk-reveal");
      });
    });

    var foot = document.querySelector("footer .grid");
    if (foot && !foot.getAttribute("data-reveal")) {
      foot.setAttribute("data-reveal", "stagger");
    }

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
        var offset =
          (rect.top + rect.height / 2 - window.innerHeight / 2) * speed * -0.15;
        var scrollOffset = y * speed * 0.35;
        layer.style.transform =
          "scale(1.06) translate3d(0, " +
          (scrollOffset + offset) * 0.15 +
          "px, 0)";
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
      if (open) {
        closeMega();
      }
    }

    function closeMega() {
      if (!megaItem || !megaBtn) return;
      megaItem.classList.remove("is-open");
      megaBtn.setAttribute("aria-expanded", "false");
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
      // Close drawer after navigating (same-page hash or leaving)
      drawer.querySelectorAll("a[href]").forEach(function (link) {
        link.addEventListener("click", function () {
          openDrawer(false);
        });
      });
    }

    if (megaItem && megaBtn) {
      megaBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = !megaItem.classList.contains("is-open");
        if (open) openDrawer(false);
        megaItem.classList.toggle("is-open", open);
        megaBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      document.addEventListener("click", function (e) {
        if (!megaItem.contains(e.target)) {
          closeMega();
        }
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMega();
        openDrawer(false);
      }
    });
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

    document.querySelectorAll('a[href="#"]').forEach(function (a) {
      var path = a.getAttribute("data-path");
      if (path && map[path]) a.setAttribute("href", map[path]);
    });

    // Rewrite bare legacy slug hrefs if any remain
    document.querySelectorAll("a[href]").forEach(function (a) {
      var href = (a.getAttribute("href") || "").replace(/^\//, "");
      if (map[href]) a.setAttribute("href", map[href]);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  window.kkToast = function (title, message) {
    var t = title && String(title).trim() ? String(title).trim() : "Заявка принята";
    var m =
      message && String(message).trim()
        ? String(message).trim()
        : "Мы получили ваши данные и свяжемся с вами в ближайшее рабочее время.";

    var existing = document.querySelector(".kk-toast");
    if (existing) existing.remove();

    var el = document.createElement("div");
    el.className = "kk-toast";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    el.innerHTML =
      '<div class="kk-toast__title">' +
      escapeHtml(t) +
      "</div><div>" +
      escapeHtml(m) +
      "</div>";
    document.body.appendChild(el);
    requestAnimationFrame(function () {
      el.classList.add("is-show");
    });
    setTimeout(function () {
      el.classList.remove("is-show");
      setTimeout(function () {
        if (el.parentNode) el.remove();
      }, 400);
    }, 4200);
  };

  bootMotion();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountChrome);
  } else {
    mountChrome();
  }
})();
