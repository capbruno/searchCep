function State() {
  this.listSection = null;
}

const state = new State();

export function init() {
  state.listSection = document.querySelector('#list-section');
}

export function addCard(address) {
  const card = createCard(address);
  state.listSection.appendChild(card);
}

function createCard(address) {
  const div = document.createElement('div');
  div.classList.add('card-list-item');


  const h3 = document.createElement('h3');
  h3.innerHTML = address.city;

  const p = document.createElement('p');
  p.innerHTML = `${address.street}, ${address.number}`

  const cep = document.createElement('p');
  cep.innerHTML = address.cep;

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(cep);

  return div;
}

