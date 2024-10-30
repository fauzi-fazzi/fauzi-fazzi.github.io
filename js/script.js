//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// pesan whatsapp
function kirimKeWhatsApp(event) {
  event.preventDefault();

  const nama = document.getElementById("name").value;
  const pesan = document.getElementById("pesan").value;

  const nomorWhatsApp = "6282138145768"; // Gunakan format 62 untuk nomor Indonesia
  const url = `https://wa.me/${nomorWhatsApp}?text=Halo, saya ${nama}. Pesan saya: ${encodeURIComponent(
    pesan
  )}`;

  window.open(url, "_blank");
}
