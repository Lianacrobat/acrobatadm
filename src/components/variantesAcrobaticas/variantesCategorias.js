// Event delegation for category card interactions
document.addEventListener("DOMContentLoaded", () => {
	const debounce = (func, wait) => {
		let timeout;
		return (...args) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(this, args), wait);
		};
	};

	const toggleSportsGrid = (card, sportsGrid) => {
		// Close all other open grids
		document.querySelectorAll(".sports-grid").forEach((grid) => {
			if (grid !== sportsGrid) grid.classList.add("hidden");
		});

		// Toggle current grid
		sportsGrid.classList.toggle("hidden");
		const isExpanded = !sportsGrid.classList.contains("hidden");
		card.setAttribute("aria-expanded", isExpanded);

		// Smooth scroll to card if opening
		if (isExpanded) {
			setTimeout(() => {
				card.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 100);
		}
	};

	// Event delegation on the container
	const container = document.querySelector("#categorias");
	if (container) {
		container.addEventListener(
			"click",
			debounce((e) => {
				const target = e.target.closest(".category-card, .close-sports");
				if (!target) return;

				const card = target.closest(".category-card");
				const sportsGrid = card?.querySelector(".sports-grid");

				if (target.classList.contains("close-sports")) {
					if (sportsGrid) sportsGrid.classList.add("hidden");
					if (card) card.setAttribute("aria-expanded", "false");
					return;
				}

				if (card && sportsGrid) toggleSportsGrid(card, sportsGrid);
			}, 100),
		);

		// Keyboard navigation
		container.addEventListener("keydown", (e) => {
			const target = e.target.closest(".category-card");
			if (!target || !["Enter", "Space"].includes(e.key)) return;

			const sportsGrid = target.querySelector(".sports-grid");
			if (sportsGrid) {
				e.preventDefault();
				toggleSportsGrid(target, sportsGrid);
			}
		});
	}
});