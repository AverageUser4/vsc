/*
  when .the-header__button is pressed:
    - change the height of .the-header-content to auto
    - it should be animated with transition

*/

const content = document.querySelector('.the-header-content');
const button = document.querySelector('.the-header__menu-button');

button.addEventListener('click', () => {
  console.log('clicked')
  content.style.maxHeight = 'auto';
});