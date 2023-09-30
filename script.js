document.title = 'Objednávka';

const formElm = document.querySelector('form');
const creditCardElm = document.querySelector('#platebni-karta');
const selectElm = document.querySelector('select');

const proccesOfRequest = (event) => {
  formElm.innerHTML =
    '<h1>Hotovo</h1><p>Objednávka odeslána ke zpracování.</p>';

  console.log(creditCardElm.value);
  console.log(selectElm.value);
};

formElm.addEventListener('submit', proccesOfRequest);

formElm.addEventListener('input', (event) => {
  const messageParagraph = document.querySelector('p');
  const shortPassword = 16 - creditCardElm.value.length;
  const longPassword = creditCardElm.value.length - 16;

  if (creditCardElm.value.length < 16) {
    return (messageParagraph.innerHTML = `Číslo karty je příliš krátké. Chybí ${shortPassword} číslic.`);
  } else if (creditCardElm.value.length > 16) {
    return (messageParagraph.innerHTML = `Číslo karty je příliš dlouhé. Přebývá ${longPassword} číslic.`);
  }
  return (messageParagraph.textContent = '');
});
