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
	const nav_close_button = document.getElementById("navclosebutton");

	nav_button.addEventListener("click", () => {
		menu.classList.add("menu-open");
		nav_button.classList.add("nav-button-novisible");
	});

	nav_close_button.addEventListener("click", () => {
		menu.classList.remove("menu-open");
		nav_button.classList.remove("nav-button-novisible");
	});

	document.addEventListener("click", (e) => {
		if (
			menu.classList.contains("menu-open") &&
			!menu.contains(e.target) &&
			!nav_button.contains(e.target)
		) {
			menu.classList.remove("menu-open");
			nav_button.classList.remove("nav-button-novisible");
		}
	});

	document.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();

			const targetID = link.getAttribute("href").slice(1);
			const targetEl = document.getElementById(targetID);
			if (targetEl) {
				targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		});
	});

	document.querySelectorAll("#menu a").forEach((link) => {
		link.addEventListener("click", () => {
			if (menu.classList.contains("menu-open")) {
				menu.classList.remove("menu-open");
                nav_button.classList.remove("nav-button-novisible");
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

	// FFJ Observer

	const ffj_container = document.querySelector(".ffj");
	const ffj_spans = Array.from(ffj_container.querySelectorAll("span"));

	const observer_ffj = new IntersectionObserver(
		(entries, obs) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				ffj_spans.forEach((span, i) => {
					setTimeout(() => {
						span.classList.add("ffj-visible");
					}, i * 700);
				});

				const ffj_totalDelay = ffj_spans.length * 700;
				setTimeout(() => {
					ffj_spans.forEach((span) => span.classList.add("ffj-pulse"));
				}, ffj_totalDelay);
				obs.unobserve(ffj_container);
			});
		},
		{
			threshold: 1.0,
		}
	);

	observer_ffj.observe(ffj_container);
});
