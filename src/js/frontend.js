function Frontend() {
  this.init = function () {
    initSocialsDropdown();
  };
}

function initSocialsDropdown() {
  var dropdown = document.querySelector(".js-socials");
  var toggleButton = document.querySelector(".js-socials__item--dropdown");

  if (!dropdown || !toggleButton) return;

  toggleButton.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("socials--open");
  });

  document.addEventListener("click", function () {
    dropdown.classList.remove("socials--open");
  });
}

module.exports = new Frontend();
