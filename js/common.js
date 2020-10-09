const modalButton = document.querySelector("#modal-button");
const modal = document.querySelector (".modal");
const close = document.querySelector(".close")

modalButton.addEventListener("click", function (event) {
	modal.classList.add("is__open");
});

close.addEventListener("click", function (event) {
	modal.classList.remove("is__open");
});

new WOW().init();