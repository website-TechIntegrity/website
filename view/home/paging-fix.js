// TechIntegrity Solutions - Paging System Fix
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && link.hostname === window.location.hostname) {
        sessionStorage.setItem("pagingScrollPos", window.scrollY);
        sessionStorage.setItem("isPaging", "true");
    }
});

(function() {
    const isPaging = sessionStorage.getItem("isPaging");
    const savedPos = sessionStorage.getItem("pagingScrollPos");

    if (isPaging === "true" && savedPos !== null) {
        window.scrollTo(0, parseInt(savedPos));
        requestAnimationFrame(() => {
            window.scrollTo(0, parseInt(savedPos));
        });
    }
})();