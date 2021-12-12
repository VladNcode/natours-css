const a = document.querySelector('iframe').contentDocument;

let area = localStorage.getItem('area');
a.body.children[0].innerText = area;

a.addEventListener('keydown', () => {
  localStorage.setItem('area', a.body.children[0].innerText);
});

// const b = document.querySelector(".js-filter-guidelines")
// const btnClearSave = document.createElement("BUTTON");
// btnClearSave.innerHTML = "CLEAR AUTO SAVE";
// b.appendChild(btnClearSave)

// btnClearSave.addEventListener('click', () => {
//   localStorage.setItem("area", '')
// })
