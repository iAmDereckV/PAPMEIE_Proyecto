// Navegación entre pestañas
const views = ["inicio", "galeria", "blog", "nosotros", "servicios"];
const sections = Object.fromEntries(
  views.map((id) => [id, document.getElementById(id)])
);
const tabs = Array.from(document.querySelectorAll(".tab"));

function activate(target) {
  const id = views.includes(target) ? target : "inicio";
  // activar sección
  for (const key in sections) {
    sections[key].classList.toggle("active", key === id);
  }
  // activar pestaña
  tabs.forEach((a) => {
    const current = a.getAttribute("data-view") === id;
    a.setAttribute("aria-current", current ? "page" : "false");
  });
}

function syncFromHash() {
  const id = location.hash.replace("#", "");
  activate(id);
}

window.addEventListener("hashchange", syncFromHash);
window.addEventListener("DOMContentLoaded", () => {
  // año en footer
  document.getElementById("year").textContent = new Date().getFullYear();
  // activar vista inicial
  syncFromHash();
});
