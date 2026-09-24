// Keep abstracts readable if JavaScript is unavailable. Only collapse a panel
// once its button is ready to open it again.
document.querySelectorAll(".abstract-toggle").forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  if (!panel) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    panel.hidden = expanded;
    button.setAttribute("aria-expanded", String(!expanded));
  });

  panel.hidden = true;
  button.setAttribute("aria-expanded", "false");
  button.hidden = false;
});
