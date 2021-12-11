const hello = 'Hello world!';

console.log(hello);
console.log('Suh dude');

console.log(10 + 30);

const hide = document.querySelector(".hideme");
const btn = document.querySelector(".btn");
hide.style.opacity = "1";

btn.addEventListener("click", () => {
  if (hide.style.opacity === "1") hide.style.opacity = "0";
  else hide.style.opacity = "1";
});
