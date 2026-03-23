const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const temaBtn = document.getElementById("temaBtn");
const status = document.getElementById("status");

// MENU
menuToggle?.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// TEMA COM SALVAMENTO
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
  document.body.classList.add("dark");
  temaBtn.textContent = "🌛";
}

temaBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    temaBtn.textContent = "🌛";
    localStorage.setItem("tema", "dark");
  } else {
    temaBtn.textContent = "🌞";
    localStorage.setItem("tema", "light");
  }
});

// FORMULÁRIO
document.getElementById("formContato")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = nome.value.trim();
  const email = email.value.trim();
  const mensagem = mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    status.textContent = "Preencha tudo!";
    return;
  }

  status.textContent = "Mensagem enviada!";
  e.target.reset();
});
