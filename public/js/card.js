/* eslint-disable no-undef */
const url = 'http://www.boredapi.com/api/activity/?type=';
const buttons = document.getElementsByClassName('button-text');

const imgHash = {
  education: '/assets/образование.png',
  recreational: '/assets/развлечения.png',
  social: '/assets/общество.png',
  diy: '/assets/сделайСам.png',
  charity: '/assets/благотворительность.png',
  cooking: '/assets/приготовлениеЕды.png',
  relaxation: '/assets/отдых.png',
  music: '/assets/музыка.png',
  busywork: '/assets/ничегонеделание.png',
};

const cw = document.querySelector('.content-wrapper');

const cardData = [];

Array.from(buttons).forEach((b) => {
  b.addEventListener('click', async (e) => {
    const { type } = e.target.dataset;
    // addBtn.style.visibility = 'visible';

    const response = await fetch(url + type);
    const data = await response.json();

    cardData.push(data, type);

    const activity = await translate(data.activity, 'ru');
    cw.innerHTML = `
          <img class="img" src="${imgHash[type]}" img-fluid rounded-start alt="..." width="420" height="270">
          <p class="activity">${activity}</p>
          <p class="participants">Количество участников: ${data.participants}</p>
          <p class="try-again" onclick="document.body.classList.remove('active')">Выбрать другую</p>
          `;
  });
});
