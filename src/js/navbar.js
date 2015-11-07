var menu = document.getElementById("mobile");

window.addEventListener("resize", function() {
  if (window.innerWidth > 750) {
    menu.style.display = 'none'
  };
}, true);

function toggle() {
  if (menu.style.display === 'inline-table') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'inline-table';
  }
}
