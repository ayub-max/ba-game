/* .B.A. GAME — language: en / uz / ru */
(function () {
  "use strict";
  var KEY = "bagame.language";
  var dict = {
    en: {
      home: "Home", news: "News", library: "Library", history: "History",
      profile: "Profile", explore: "Explore", deals: "Deals", support: "Support",
      addCart: "Add to cart", buy: "Buy", play: "Play", logout: "Log out",
      search: "Search games…", live: "Live",
      gateLead: "Sign in with Gmail and a password to open the store.",
      gateNick: "Nickname", gateEmail: "Gmail", gatePass: "Password",
      gateSubmit: "Create account / Sign in",
      gateTerms: "I agree to the platform rules",
      welcome: "Welcome",
      weekly: "Weekly deals", trending: "Trending now", fresh: "Fresh releases",
      aboutTitle: "What is .B.A. GAME",
      aboutText: ".B.A. GAME is a digital store for buying games: deals, library, history and profile in one place.",
      footerAbout: "A game store with fair prices and a library that remembers your progress.",
      lang: "Language",
      supportTitle: "Support",
      dealsTitle: "Weekly deals",
      histTitle: "Play history",
      libTitle: "Your library",
      newsTitle: "Platform news",
      exploreTitle: "Explore",
      profileTitle: "Your profile"
    },
    uz: {
      home: "Bosh sahifa", news: "Yangiliklar", library: "Kutubxona", history: "Tarix",
      profile: "Profil", explore: "Kashf etish", deals: "Chegirmalar", support: "Yordam",
      addCart: "Savatga", buy: "Sotib olish", play: "O‘ynash", logout: "Chiqish",
      search: "O‘yin qidirish…", live: "Jonli",
      gateLead: "Do‘konni ochish uchun Gmail va parol kiriting.",
      gateNick: "Nickname", gateEmail: "Gmail", gatePass: "Parol",
      gateSubmit: "Hisob yaratish / Kirish",
      gateTerms: "Platforma qoidalariga roziman",
      welcome: "Xush kelibsiz",
      weekly: "Haftalik chegirmalar", trending: "Trendda", fresh: "Yangi chiqishlar",
      aboutTitle: ".B.A. GAME nima?",
      aboutText: ".B.A. GAME — o‘yin sotib olish do‘koni: chegirmalar, kutubxona, tarix va profil bir joyda.",
      footerAbout: "Adolatli narxlar va progressni eslab qoladigan kutubxona.",
      lang: "Til",
      supportTitle: "Yordam",
      dealsTitle: "Haftalik chegirmalar",
      histTitle: "O‘ynash tarixi",
      libTitle: "Sizning kutubxonangiz",
      newsTitle: "Yangiliklar",
      exploreTitle: "Kashf etish",
      profileTitle: "Profilingiz"
    },
    ru: {
      home: "Главная", news: "Новости", library: "Библиотека", history: "История",
      profile: "Профиль", explore: "Обзор", deals: "Скидки", support: "Поддержка",
      addCart: "В корзину", buy: "Купить", play: "Играть", logout: "Выйти",
      search: "Поиск игр…", live: "Онлайн",
      gateLead: "Войдите через Gmail и пароль, чтобы открыть магазин.",
      gateNick: "Никнейм", gateEmail: "Gmail", gatePass: "Пароль",
      gateSubmit: "Создать аккаунт / Войти",
      gateTerms: "Я согласен с правилами платформы",
      welcome: "Добро пожаловать",
      weekly: "Скидки недели", trending: "В тренде", fresh: "Новинки",
      aboutTitle: "Что такое .B.A. GAME",
      aboutText: ".B.A. GAME — магазин игр: скидки, библиотека, история и профиль в одном месте.",
      footerAbout: "Честные цены и библиотека, которая помнит ваш прогресс.",
      lang: "Язык",
      supportTitle: "Поддержка",
      dealsTitle: "Скидки недели",
      histTitle: "История игр",
      libTitle: "Ваша библиотека",
      newsTitle: "Новости",
      exploreTitle: "Обзор",
      profileTitle: "Ваш профиль"
    }
  };

  function getLang() {
    try {
      var v = localStorage.getItem(KEY);
      if (v && dict[v]) return v;
    } catch (e) {}
    try { localStorage.setItem(KEY, "en"); } catch (e) {}
    return "en";
  }
  function setLang(l) {
    if (!dict[l]) l = "en";
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply(l);
  }
  function t(key) {
    var L = dict[getLang()] || dict.en;
    return L[key] || dict.en[key] || key;
  }

  function apply(lang) {
    lang = lang || getLang();
    var L = dict[lang] || dict.en;
    document.documentElement.lang = lang === "uz" ? "uz" : lang;

    // Nav links by href
    var map = {
      "index.html": L.home, "news.html": L.news, "library.html": L.library,
      "history.html": L.history, "profile.html": L.profile, "explore.html": L.explore,
      "deals.html": L.deals, "support.html": L.support
    };
    document.querySelectorAll("#main-nav a, .footer__col a").forEach(function (a) {
      var href = (a.getAttribute("href") || "").split("/").pop();
      if (map[href]) a.textContent = map[href];
    });

    // data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (L[k]) el.textContent = L[k];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-placeholder");
      if (L[k]) el.setAttribute("placeholder", L[k]);
    });

    // Gate labels if present
    var lead = document.getElementById("gate-lead");
    if (lead) lead.textContent = L.gateLead;
    var nickL = document.querySelector('label[for="gate-nick"]');
    if (nickL) nickL.textContent = L.gateNick;
    var emailL = document.querySelector('label[for="gate-email"]');
    if (emailL) emailL.textContent = L.gateEmail;
    var passL = document.querySelector('label[for="gate-pass"]');
    if (passL) passL.textContent = L.gatePass;
    var terms = document.querySelector("#field-terms span");
    if (terms) terms.textContent = L.gateTerms;
    var submit = document.querySelector("#gate-form button[type=submit]");
    if (submit) submit.textContent = L.gateSubmit;

    // Common buttons
    document.querySelectorAll("[data-buy]").forEach(function (b) {
      if (b.tagName === "BUTTON" && /cart|savat|корзин/i.test(b.textContent + " cart")) {
        b.textContent = L.addCart;
      }
    });

    // Language switcher active state
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });

    // Live clock label
    var clock = document.querySelector("[data-ba-clock]");
    if (clock && clock.textContent) {
      // keep time, prefix handled in tools
    }

    // Page titles h1 common
    var h1 = document.querySelector(".page-head h1, main h1");
    var page = document.body.getAttribute("data-page");
    var titleMap = {
      deals: L.dealsTitle, support: L.supportTitle, history: L.histTitle,
      library: L.libTitle, news: L.newsTitle, explore: L.exploreTitle, profile: L.profileTitle
    };
    if (h1 && titleMap[page]) h1.textContent = titleMap[page];

    var aboutH = document.querySelector(".about-site__text-block h2");
    if (aboutH) aboutH.textContent = L.aboutTitle;
    var aboutP = document.querySelector(".about-site__text");
    if (aboutP) aboutP.textContent = L.aboutText;
    var footAbout = document.querySelector(".footer__about");
    if (footAbout) footAbout.textContent = L.footerAbout;
  }

  function mountSwitcher() {
    if (document.querySelector(".lang-switch")) return;
    var host = document.querySelector(".topbar__inner .session") || document.querySelector(".topbar__inner");
    if (!host) return;
    var box = document.createElement("div");
    box.className = "lang-switch";
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", "Language");
    ["uz", "en", "ru"].forEach(function (code) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("data-lang", code);
      b.textContent = code === "uz" ? "UZ" : code === "en" ? "EN" : "RU";
      b.addEventListener("click", function () { setLang(code); });
      box.appendChild(b);
    });
    // insert before session content
    if (host.classList.contains("session")) {
      host.parentNode.insertBefore(box, host);
    } else {
      host.appendChild(box);
    }
  }

  function boot() {
    mountSwitcher();
    apply(getLang());
    // re-apply after app paints dynamic content
    setTimeout(function () { apply(getLang()); }, 400);
    setTimeout(function () { apply(getLang()); }, 1200);
  }

  window.BALang = { get: getLang, set: setLang, t: t, apply: apply };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
