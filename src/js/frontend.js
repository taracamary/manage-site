function Frontend() {
  this.init = function () {
    initSocialsDropdown();
  };
}

function initSocialsDropdown() {
  const dropdown = document.querySelector(".js-socials");
  const toggleButton = document.querySelector(".js-socials__item--dropdown");

  if (!dropdown || !toggleButton) return;

  toggleButton.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("socials--open");
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("socials--open");
  });
}

module.exports = new Frontend();
