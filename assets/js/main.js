/**
* Template Name: AgriCulture
* Template URL: https://bootstrapmade.com/agriculture-bootstrap-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Scroll up sticky header to headers with .scroll-up-sticky class
   */
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky')) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = `-${header.offsetHeight + 50}px`;
    } else if (scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = "0";
    } else {
      selectHeader.style.removeProperty('top');
      selectHeader.style.removeProperty('position');
    }
    lastScrollTop = scrollTop;
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

})();

  //language switcher 

  const translations = {
    ru: {
      "home": "Главная",
      "about": "О нас",
      "partnership": "Партнерства",
      "contact": "Контакты",
      "hero_title_1": "Свежие фрукты – прямо от производителей!",
      "hero_desc_1": "Импорт и поставки свежих фруктов высочайшего качества. Доставка по всей стране, лучшие условия для оптовых клиентов.",
      "hero_title_2": "Натуральные фрукты со всего мира",
      "hero_desc_2": "Мы доставляем только отборные фрукты напрямую от проверенных фермеров. Гарантируем свежесть и качество на каждом этапе!",
      "hero_title_3": "Оптовые поставки для вашего бизнеса",
      "hero_desc_3": "Сотрудничаем с магазинами, ресторанами и сетями супермаркетов. Индивидуальные условия и бесперебойные поставки.",
      "service_title": "Услуги",
      "service_description": "Обеспечение свежими продуктами каждый день",
      "service_heading_1": "Прямые поставки от производителей",
      "service_head_desc_1": "Сотрудничаем с надежными фермерами и агрохозяйствами по всему миру, гарантируя свежесть и высокое качество продукции.",
      "service_heading_2": "Поставка экзотических фруктов по запросу",
      "service_head_desc_2": "Импортируем редкие и сезонные экзотических фрукты из разных уголков мира по вашему запросу.",
      "service_heading_3": "Логистика и таможенное оформление",
      "service_head_desc_3": "Берём на себя всю логистику: транспортировку, таможенное оформление и доставку до вашего склада.",
      "service_heading_4": "Хранение и складские услуги",
      "service_head_desc_4": "Обеспечиваем правильные условия хранения продукции в наших современных складских комплексах.",
      "service_heading_5": "Контроль качества продукции",
      "service_head_desc_5": "Строгий контроль качества на каждом этапе: от сбора урожая до доставки конечному клиенту.",
      "service_heading_6": "Оптовые поставки фруктов",
      "service_head_desc_6": "Доставка свежих и качественных фруктов оптовыми партиями для магазинов, ресторанов и супермаркетов",
      "service_heading_7": "Индивидуальные условия для бизнеса",
      "service_head_desc_7": "Гибкие цены и удобные условия сотрудничества для оптовых покупателей.",
      "service_heading_8": "Доставка по всей стране",
      "service_head_desc_8": "Быстрая и надежная транспортировка фруктов с соблюдением всех температурных режимов.",
      "about_title": "Почему выбирают нас",
      "about_subtitle": "Более чем <strong>10-летний опыт</strong> в импорте свежих фруктов",
      "about_desciption": "Мы – надёжный поставщик свежих фруктов высочайшего качества. Работаем с проверенными производителями,обеспечиваем бесперебойные поставки и предлагаем выгодные условия сотрудничества.",
      "about_quality": "Высокая качества",
      "about_quality_desc": "от сбора урожая до доставки конечному клиенту.",
      "about_price": "Оптовые цены",
      "about_price_desc": "Индивидуальные условия и бесперебойные поставки.",
      "about_partner": "Сотрудничество с производителями",
      "about_partner_desc": "Работаем напрямую с фермерами и агропредприятиями.",
      "about3_title": "Наши ценности",
      "about3_description": "Мы гордимся своей репутацией надёжного партнёра и стремимся к долгосрочному сотрудничеству.Наши клиенты – это розничные сети, магазины, рестораны и оптовые компании, ценящие качество и надёжность.",
      "about3_item1": "Честность и прозрачность",
      "about3_item2": "Ответственность за продукт",
      "about3_item3": "Долгосрочные партнёрские отношения",
      "about3_btn": "Заказать услугу",
      "gallery_title": "Галерея",
      "gallery_description": "Немного о нашей деятельности",
      "testimonial_title": "Отзывы",
      "testimonial_desc": "Что говорят о нас наши клиенты",
      "testimonial_alex": "Сотрудничаем с этой компанией уже не первый год, и всегда довольны качеством фруктов!Поставки приходят вовремя, продукция свежая, а условия сотрудничества — прозрачные и удобные.Отличный партнёр в сфере оптовой торговли!",
      "client_alex": "Алексей Иванов, директор сети продуктовых магазинов",
      "testimonial_anna": "Работаем с этой компанией на протяжении нескольких месяцев, и за это время не возникло ни одной проблемы.Все фрукты проходят строгий контроль качества, транспортировка организована на высшем уровне.Надёжные поставщики!",
      "client_anna": "Анна Ковальчук, менеджер по закупкам ресторанной сети",
      "testimonial_max": "Заказывали большую партию экзотических фруктов — всё приехало в идеальном состоянии, без задержек.Компания действительно заботится о своей репутации и о клиентах. Будем работать дальше!",
      "client_max": "Максим Романов, владелец оптового склада",
      "testimonial_caty": "Отличный сервис и индивидуальный подход! Нам предложили удобные условия поставки, и теперь наша компания регулярно получает свежие фрукты без лишних хлопот.Спасибо за профессионализм!",
      "client_caty": "Екатерина Смирнова, владелица кафе здорового питания",
      "partnership_title": "Станьте нашим партнёром",
      "partnership_desc": "Мы предлагаем свежие и качественные фрукты с доставкой по всей стране.Работаете с розницей или оптом? Давайте обсудим сотрудничество!",
      "part_assortiment": "<strong>- Широкий ассортимент</strong> – Экзотические и сезонные фрукты круглый год",
      "part_flexible": "<strong>- Гибкие условия</strong> – Индивидуальные предложения для оптовых клиентов",
      "part_delivery": "<strong>- Быстрая доставка</strong> – Оперативная логистика по всей стране",
      "part_quality": "<strong>- Гарантия качества</strong> – Только свежая и отборная продукция",
      "partner_btn": "Стать партнёром",
      "contact_title": "Свяжитесь с нами",
      "contact_description": "Ваш запрос — наш приоритет! мы всегда будем рады вам.",
      "address": "Адрес:",
      "address_info": " г. Ташкент, ул. Примерная, 12",
      "email": "Email:",
      "email_info": "<a href='mailto:info@company.uz'>info@company.uz</a>",
      "phone": "Телефон:",
      "phone_info": "<a href='tel:+998994440204'>+998994440204</a>",
      "working_hours": "Пн-Сб, 09:00 - 18:00",
      "footer_text1": "<b>Glamour Fruits</b> – это команда профессионалов, которая занимается импортом и дистрибуцией свежих фруктов.Мы работаем с ведущими фермерами и агропредприятиями, чтобы предложить нашим клиентам только качественные и натуральные продукты.",
      "footer_text2": "Мы гордимся своей репутацией надёжного партнёра и стремимся к долгосрочному сотрудничеству.<b>Наши клиенты</b> – это розничные сети, магазины, рестораны и оптовые компании, ценящие качество и надёжность.",
      "copyright": "© 2025 <strong><span>Glamour Fruits</span></strong>. Все права защищены"



  },

    en: {
        "home": "Home",
        "about": "About",
        "partnership": "Partnership",
        "contact": "Contacts",
        "hero_title_1": "Fresh fruit - straight from the growers!",
        "hero_desc_1": "Import and supply of fresh fruits of the highest quality. Delivery throughout the country, best conditions for wholesale customers.",
        "hero_title_2": "Natural fruits from all over the world",
        "hero_desc_2": "We deliver only selected fruits directly from verified farmers. We guarantee freshness and quality at every stage!",
        "hero_title_3": "Wholesale supplies for your business",
        "hero_desc_3": "We cooperate with stores, restaurants and supermarket chains. Individual conditions and uninterrupted deliveries.",
        "service_title": "Services",
        "service_description": "Provision of fresh food every day",
        "service_heading_1": "Direct deliveries from manufacturers",
        "service_head_desc_1": "We cooperate with reliable farmers and agribusinesses all over the world, guaranteeing freshness and high quality products.",
        "service_heading_2": "Supply of exotic fruits on request",
        "service_head_desc_2": "We import rare and seasonal exotical fruits from around the world at your request.",
        "service_heading_3": "Logistics and customs clearance",
        "service_head_desc_3": "We take care of all logistics: transportation, customs clearance and delivery to your warehouse.",
        "service_heading_4": "Storage and warehousing",
        "service_head_desc_4": "We provide the right storage conditions for our products in our state-of-the-art warehousing facilities.",
        "service_heading_5": "Product quality control",
        "service_head_desc_5": "Strict quality control at every stage: from harvesting to delivery to the end customer.",
        "service_heading_6": "Wholesale fruit supplies",
        "service_head_desc_6": "Delivery of fresh and quality fruit in bulk for stores, restaurants and supermarkets",
        "service_heading_7": "Individual conditions for business",
        "service_head_desc_7": "Flexible prices and convenient terms of cooperation for wholesale buyers.",
        "service_heading_8": "Countrywide delivery",
        "service_head_desc_8": "Fast and reliable transportation of fruit with observance of all temperature conditions.",
        "about_title": "Why choose us",
        "about_subtitle": "More than <strong>10 years of experience</strong> in importing fresh fruits",
        "about_desciption": "We are - a reliable supplier of fresh fruit of the highest quality. We work with trusted producers,we ensure uninterrupted deliveries and offer favorable terms of cooperation.",
        "about_quality": "High quality",
        "about_quality_desc": "from harvest to delivery to the end customer.",
        "about_price": "Wholesale pricing",
        "about_price_desc": "Customized terms and uninterrupted supply.",
        "about_partner": "Cooperation with manufacturers",
        "about_partner_desc": "We work directly with farmers and agribusinesses.",
        "about3_title": "Our values",
        "about3_description": "We are proud of our reputation as a reliable partner and strive for long-term cooperation.Our customers are retail chains, stores, restaurants and wholesale companies that value quality and reliability.",
        "about3_item1": "Integrity and transparency",
        "about3_item2": "Product liability",
        "about3_item3": "Long-term partnerships",
        "about3_btn": "Order a service",
        "gallery_title": "Gallery",
        "gallery_description": "A little about our activities",
        "testimonial_title": "Reviews",
        "testimonial_desc": "What our customers say about us",
        "testimonial_alex": "We have been cooperating with this company for a number of years, and we are always satisfied with the quality of fruit! Deliveries arrive on time, the products are fresh, and the terms of cooperation are transparent and convenient.An excellent partner in the wholesale trade!",
        "client_alex": "Alexey Ivanov, director of a chain of grocery stores",
        "testimonial_anna": "We have been working with this company for several months, and during this time we have not had a single problem.All fruits undergo strict quality control, transportation is organized at the highest level.Reliable suppliers!",
        "client_anna": "Anna Kovalchuk, Purchasing Manager of a restaurant chain",
        "testimonial_max": "We ordered a large shipment of exotic fruit - everything arrived in perfect condition, no delays.The company really cares about its reputation and customers. We will work further!",
        "client_max": "Maxim Romanov, owner of a wholesale warehouse",
        "testimonial_caty": "Excellent service and individual approach! We were offered convenient delivery terms and now our company regularly receives fresh fruit without any hassle.Thank you for your professionalism!",
        "client_caty": "Ekaterina Smirnova, owner of a healthy food cafe",
        "partnership_title": "Become our partner",
        "partnership_desc": "We offer fresh and quality fruit with nationwide delivery.Working with retail or wholesale? Let's discuss cooperation!",
        "part_assortiment": "<strong>- Wide range</strong> - Exotic and seasonal fruits all year round",
        "part_flexible": "<strong>- Flexible terms</strong> - Customized offers for wholesale customers",
        "part_delivery": "<strong>- Fast delivery</strong> - Operational logistics throughout the country",
        "part_quality": "<strong>- Quality assurance</strong> - Only fresh and selected products",
        "partner_btn": "Become a partner",
        "contact_title": "Get in touch",
        "contact_description": "Your request - our priority! we are always happy to hear from you.",
        "address": "Address:",
        "address_info": "Ташкент city, Примерная street, 12",
        "email": "Email:",
        "email_info": "info@example.com",
        "phone": "Phone:",
        "phone_info": "+998994440204",
        "working_hours": "Mon-Sat, 09:00 - 18:00",
        "footer_text1": "<b>Glamour Fruits</b> is a team of professionals that imports and distributes fresh fruits.We work with leading farmers and agribusinesses to offer our customers only quality and natural products.",
        "footer_text2": "We are proud of our reputation as a reliable partner and strive for long-term cooperation.<br><b>Our clients</b> are retail chains, shops, restaurants and wholesale companies that value quality and reliability.",
        "copyright": "© 2025 <strong><span>Glamour Fruits</span></strong>. All Rights Reserved"

    },
  }


  //til o'zgartishirish funksiyasi
  function changeLanguage(language) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = translations[language][key];
    });
  }
  
  // Устанавливаем язык по умолчанию
  changeLanguage('ru');