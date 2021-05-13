document.addEventListener('DOMContentLoaded', init);

function init() {
  const ordersTables = document.querySelectorAll('.orders__table');
  const sidebarSublistButtons = document.querySelectorAll('.sidebar__nav-button--sublist');
  const burgerBtn = document.querySelector('.topbar__btn--burger');
  const sidebar = document.querySelector('.sidebar');
  const contentWrap = document.querySelector('.content__item');

  let asideOpen = false;

  ordersTables.forEach((table) => {
    const sortButtons = table.querySelectorAll('.orders__table-head-item--button');

    sortButtons.forEach((btn) => {
      btn.addEventListener('click', () => btn.classList.toggle('inc'));
    });
  });

  sidebarSublistButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('sidebar__nav-button--open');
    });
  });

  burgerBtn.addEventListener('click', toggleAside);

  function toggleAside() {
    burgerBtn.classList.toggle('topbar__btn--open', !asideOpen);
    sidebar.classList.toggle('sidebar--open', !asideOpen);
    contentWrap.classList.toggle('content__item--open', !asideOpen);
    asideOpen = !asideOpen;
  }
}
