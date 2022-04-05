const list = [
  { type: 'education', value: 'образование', photo: '/assets/образование.png' },
  { type: 'recreational', value: 'развлечения', photo: '/assets/развлечения.png' },
  { type: 'social', value: 'общество', photo: '/assets/общество.png' },
  { type: 'diy', value: 'сделай сам', photo: '/assets/сделайСам.png' },
  { type: 'charity', value: 'благотворительность', photo: '/assets/благотворительность.png' },
  { type: 'cooking', value: 'приготовление еды', photo: '/assets/приготовлениеЕды.png' },
  { type: 'relaxation', value: 'отдых', photo: '/assets/отдых.png' },
  { type: 'music', value: 'музыка', photo: '/assets/музыка.png' },
  { type: 'busywork', value: 'ничегонеделание', photo: '/assets/ничегонеделание.png' },
];

const card = document.querySelector('.row');
list.forEach((element) => {
  card.innerHTML += `<div class="wrapperTitle">
          <div class="button" onclick="document.body.classList.add('active')">
              <span data-type=${element.type} class="button-text">${element.value}</span>
              <div class="button-backgrounds">
                  <div class="button-circle button-circle1"></div>
                  <div class="button-circle button-circle2"></div>
                  <div class="button-circle button-circle3"></div>
                  <div class="button-circle button-circle4"></div>
              </div>
          </div>
      </div>
     `;
});
