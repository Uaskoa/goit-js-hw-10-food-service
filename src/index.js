import './styles.css';
import menuItems from './menu.json';
import itemsTemplate from './templates/gallery-items.hbs';

const markup = itemsTemplate(menuItems);
const menuGalleryRef = document.querySelector('.js-menu');
const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menuGalleryRef.insertAdjacentHTML('beforeend', markup);

checkTheme();

toggleRef.addEventListener('change', changeTheme);

function changeTheme() {
  if (!bodyRef.hasAttribute('class')) {
    bodyRef.setAttribute('class', Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else if (bodyRef.getAttribute('class') === Theme.DARK) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  } else {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  }
}

function checkTheme() {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    toggleRef.checked = true;
    bodyRef.setAttribute('class', Theme.DARK);
  }
}
