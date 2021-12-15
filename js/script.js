const popup = document.querySelector('.popup');

document
  .querySelectorAll('.navigation__link')
  .forEach(link =>
    link.addEventListener(
      'click',
      () => (document.querySelector('.navigation__checkbox').checked = false)
    )
  );

['click', 'keyup'].forEach(el =>
  document.addEventListener(el, e => {
    if (
      window.getComputedStyle(popup).opacity === '1' &&
      (e.target === popup || e.key === 'Escape')
    )
      window.location.href = '#section-tours';
  })
);
