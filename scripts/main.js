const $ = {
  logo: document.getElementById('logo'),
  menuButton: document.getElementById('menu-button'),
  menuTab: document.getElementById('menu-tab'),
  menu: document.getElementById('menu'),

}

const menu = {
  isOpen: false,

  open: function () {
    $.menu.classList.add('open');
    $.menuTab.classList.add('open');
    this.isOpen = true;
    
  },

  close: function () {
    $.menu.classList.remove('open');
    $.menuTab.classList.remove('open');
    this.isOpen = false;
  }
}

$.logo.addEventListener('click', () => (window.location.href == '/index.html') && (window.location.href = '/index.html'));
$.menuButton.addEventListener('click', () => {
  if (menu.isOpen) {
    menu.close();
  } else {
    menu.open();
  }
});

document.addEventListener('click', e => {
  console.log(e);
  if (!e.target.classList.contains('menu-element')) {
    menu.close();
  }
});