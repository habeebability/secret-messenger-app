const {hash} = window.location;
const message = atob(hash.replace('#', ''));

if(message) {
  document.querySelector('#message-form').classList.add('invisible');
  document.querySelector('#message-show').classList.remove('invisible');

  document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('invisible');
  document.querySelector('#link-form').classList.remove('invisible');
  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);
  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
})



