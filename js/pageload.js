document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        const href = this.getAttribute("href");

        // Ignora links externos, âncoras e abas especiais
        if (!href || href.startsWith("#") || this.target === "_blank") {
            return;
        }

        event.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});