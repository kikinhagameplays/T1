document.addEventListener("DOMContentLoaded", () => {
    const mobileQuery = window.matchMedia("(max-width: 1100px)");
    const toggles = document.querySelectorAll(".menu-toggle");

    toggles.forEach((toggle) => {
        const menuId = toggle.getAttribute("aria-controls");
        const menu = menuId ? document.getElementById(menuId) : null;
        if (!menu) {
            return;
        }

        const closeMenu = () => {
            menu.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Abrir menu");
        };

        const openMenu = () => {
            menu.classList.add("is-open");
            toggle.setAttribute("aria-expanded", "true");
            toggle.setAttribute("aria-label", "Fechar menu");
        };

        toggle.addEventListener("click", () => {
            const isOpen = menu.classList.contains("is-open");
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        menu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                if (mobileQuery.matches) {
                    closeMenu();
                }
            });
        });

        window.addEventListener("resize", () => {
            if (!mobileQuery.matches) {
                closeMenu();
            }
        });
    });
});
