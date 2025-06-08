window.addEventListener("load", () => {
	// Высота окна пользователя
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
	// Preloader
	const preloader = document.getElementById("preloader");
	preloader.style.opacity = "0";
	preloader.style.visibility = "hidden";
	setTimeout(() => {
		preloader.remove();
	}, 500);
	// Header animaton
	const header = document.querySelector(".header");
	setTimeout(() => {
		header.classList.add("visible");
	}, 200);

	// NAV

	const nav_button = document.getElementById("navbutton");
	const menu = document.getElementById("menu");

	nav_button.addEventListener("click", () => {
		const isOpen = menu.classList.toggle("menu-open");
	});

	document.addEventListener("click", (e) => {
		if (
			menu.classList.contains("menu-open") &&
			!menu.contains(e.target) &&
			!nav_button.contains(e.target)
		) {
			menu.classList.remove("menu-open");
		}
	});

	document.querySelectorAll("#menu a").forEach((link) => {
		link.addEventListener("click", () => {
			if (menu.classList.contains("menu-open")) {
				menu.classList.remove("menu-open");
			}
		});
	});

	// Анимация при скролле

	const observer1 = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("scroll-visible");
					observer1.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.3,
		}
	);

	document.querySelectorAll(".scroll-text").forEach((el) => {
		observer1.observe(el);
	});

	const observer2 = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("scroll-visible");
					observer2.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 1,
		}
	);

	document.querySelectorAll(".scroll-img, .quote-block").forEach((el) => {
		observer2.observe(el);
	});
});
