const popup = document.querySelector('.popup');
const checkbox = document.querySelector('.navigation__checkbox');

document
  .querySelectorAll('.navigation__link')
  .forEach(link => link.addEventListener('click', () => (checkbox.checked = false)));

document.addEventListener('keyup', e => {
  if (checkbox.checked === true && e.key === 'Escape') checkbox.checked = false;
});

['click', 'keyup'].forEach(el =>
  document.addEventListener(el, e => {
    if (
      window.getComputedStyle(popup).opacity === '1' &&
      (e.target === popup || e.key === 'Escape')
    )
      window.location.href = '#section-tours';
  })
);
