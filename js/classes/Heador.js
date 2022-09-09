export default class Heador {

  content;
  button;

  constructor() {
    this.content = document.querySelector('.the-header-content');
    this.button = document.querySelector('.the-header__menu-button');

    this.content.style.height = '50px';

    this.button.addEventListener('click', () => this.toggleDropdown());
  }

  toggleDropdown() {
    if(this.content.style.height === '50px')
      this.content.style.height = `${this.content.scrollHeight}px`;
    else
      this.content.style.height = '50px';
  }

}