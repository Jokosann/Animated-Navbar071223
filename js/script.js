document.addEventListener("DOMContentLoaded", function () {
	const header = document.querySelector("header");
	const menuButoon = document.getElementById("menu");
	const links = document.querySelectorAll('a[href^="#"]');

	// jika di scroll
	function handleScroll() {
		header.classList.toggle("menu-close", window.scrollY >= 100);
	}

	// jika menu dicllick maka menambahkan menu-close
	function menuClick() {
		header.classList.remove("menu-close");
	}

	// apapun yang diclick maka menambahkan menu close
	function handleCloseOutside(event) {
		if (!menuButoon.contains(event.target)) {
			header.classList.add("menu-close");
		}
	}

	// untuk menambahkan animasi scroll smooth
	function handleLinkClick(event) {
		event.preventDefault();
		const targetId = this.getAttribute("href");
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: "smooth",
			});
		}
	}

	links.forEach((link) => link.addEventListener("click", handleLinkClick));
	window.addEventListener("scroll", handleScroll);
	menuButoon.addEventListener("click", menuClick);
	document.addEventListener("click", handleCloseOutside);
});
