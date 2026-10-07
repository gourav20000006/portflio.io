const navToggle = document.querySelector('.nav-toggle');
const navPanel = document.querySelector('.nav-panel');

if (navToggle && navPanel) {
  navToggle.addEventListener('click', () => {
    navPanel.classList.toggle('open');
  });
}

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

if (tabButtons.length && tabPanels.length) {
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;

      tabButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
      tabPanels.forEach((panel) => panel.classList.toggle('active', panel.id === target));
    });
  });
}
