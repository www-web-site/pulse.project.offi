window.addEventListener("DOMContentLoaded", () => {
  const orderBtn = document.getElementById("orderbtn");
  const orderBtn2 = document.getElementById("orderbtn2");
  const orderForm = document.querySelector(".overlay");
  const close = document.querySelector(".close");
  const orderBtn3 = document.querySelector(".thirdOrder");

  close.addEventListener("click", () => {
    orderForm.style.display = "none";
  });

  orderBtn.addEventListener("click", () => {
    orderForm.style.display = "flex";
  });

  orderBtn2.addEventListener("click", () => {
    orderForm.style.display = "flex";
  });

  orderBtn3.addEventListener("click", () => {
    orderForm.style.display = "flex";
  });

  orderForm.addEventListener("click", (e) => {
    if (e.target === orderForm) {
      orderForm.style.display = "none";
    }
  });

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  AOS.init({
    duration: 800,
    once: true,
  });

  const tabs = document.querySelectorAll(".tab");
  const container = document.querySelector(".cardsfour");

  const cardData = {
    fitness: [
      {
        title: "Polar FT1",
        old: "4 750 руб.",
        new: "4 500 руб.",
        image: "img/handwatches.png",
      },
      {
        title: "Suunto M2",
        old: "6 690 руб.",
        new: "6 641 руб.",
        image: "img/handwatches.png",
      },
      {
        title: "Polar FT4",
        old: "7 390 руб.",
        new: "7 021 руб.",
        image: "img/handwatches.png",
      },
      {
        title: "Polar FT1",
        old: "4 750 руб.",
        new: "4 500 руб.",
        image: "img/handwatches.png",
      },
      {
        title: "Suunto M2",
        old: "6 690 руб.",
        new: "6 641 руб.",
        image: "img/handwatches.png",
      },
      {
        title: "Polar FT4",
        old: "6 690 руб.",
        new: "6 641 руб.",
        image: "img/handwatches.png",
      },
    ],
    run: [
      {
        title: "Polar FT1",
        old: "4 750 руб.",
        new: "4 500 руб.",
        image: "img/handwatches.png",
      },
      {
        title: "Suunto M2",
        old: "6 690 руб.",
        new: "6 641 руб.",
        image: "img/handwatches.png",
      },
      {
        title: "Polar FT4",
        old: "7 390 руб.",
        new: "7 021 руб.",
        image: "img/handwatches.png",
      },
    ],
    triathlon: [
      {
        title: "Polar FT1",
        old: "4 750 руб.",
        new: "4 500 руб.",
        image: "img/handwatches.png",
      },
      {
        title: "Suunto M2",
        old: "6 690 руб.",
        new: "6 641 руб.",
        image: "img/handwatches.png",
      },
      {
        title: "Polar FT4",
        old: "7 390 руб.",
        new: "7 021 руб.",
        image: "img/handwatches.png",
      },
    ],
  };

  function createCard(card) {
    return `
    <div class="cardfour">
      <div class="front">
        <img src="${card.image}" />
        <h4>Пульсометр ${card.title}</h4>
        <p>Для первых шагов в тренировках,<br />основанных на сердечном ритме</p>
        <button class="more">ПОДРОБНЕЕ</button>
        <hr />
        <div class="sectionsmall">
          <div class="price">
            <p class="old">${card.old}</p>
            <p class="new">${card.new}</p>
          </div>
          <button class="buy">КУПИТЬ</button>
        </div>
      </div>
      <div class="back" style="display:none;">
        <ul>
          <li><p>Звуковое оповещение<br />о пульсе во время тренировки</p></li>
          <li><p>Графический индикатор<br />зон пульса</p></li>
          <li><p>Информация о<br />расходе калорий</p></li>
          <li><p>Данные по 10 тренировкам</p></li>
        </ul>
        <button class="back-btn">НАЗАД</button>
        <hr />
        <div class="sectionsmall">
          <div class="price">
            <p class="old">${card.old}</p>
            <p class="new">${card.new}</p>
          </div>
          <button class="buy">КУПИТЬ</button>
        </div>
      </div>
    </div>
  `;
  }

  function render(category) {
    container.innerHTML = "";
    cardData[category].forEach((card) => {
      container.innerHTML += createCard(card);
    });
    setupEvents();
  }

  function setupEvents() {
    document.querySelectorAll(".cardfour").forEach((card) => {
      const front = card.querySelector(".front");
      const back = card.querySelector(".back");

      card.querySelector(".more").onclick = () => {
        front.style.display = "none";
        back.style.display = "flex";
        back.style.flexDirection = "column";
      };

      card.querySelector(".back-btn").onclick = () => {
        back.style.display = "none";
        front.style.display = "flex";
        front.style.flexDirection = "column";
      };

      card.querySelectorAll(".buy").forEach((btn) => {
        btn.onclick = () => showForm();
      });
    });
  }

  function showForm() {
    const form = document.createElement("div");
    form.classList.add("order-overlay");
    form.innerHTML = `
    <div class="order-form">
      <h3>Оформить заказ</h3>
      <input type="text" placeholder="Ваше имя" />
      <input type="tel" placeholder="Телефон" />
      <input type="email" placeholder="Email" />
      <button class="submit-order">Заказать</button>
      <button class="close-order">Отмена</button>
    </div>
  `;
    document.body.appendChild(form);

    form.querySelector(".close-order").onclick = () => form.remove();
    form.querySelector(".submit-order").onclick = () => {
      alert("Спасибо! Заявка отправлена.");
      form.remove();
    };
  }

  tabs.forEach((tab, index) => {
    tab.onclick = () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const text = tab.textContent.toLowerCase();
      if (text.includes("фитнес")) render("fitness");
      else if (text.includes("бега")) render("run");
      else render("triathlon");
    };
  });

  // Стартовая загрузка
  render("fitness");
});
