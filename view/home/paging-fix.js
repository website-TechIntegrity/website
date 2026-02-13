// TechIntegrity Solutions - Paging System Fix
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if (link) {
        const href = link.getAttribute("href");

        if (href && (href.startsWith("..") || href.startsWith("/") || link.hostname === window.location.hostname) && href !== "#") {
            
            sessionStorage.setItem("pagingScrollPos", window.scrollY);
            sessionStorage.setItem("isPaging", "true");
        }
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const isPaging = sessionStorage.getItem("isPaging");
    const savedPos = sessionStorage.getItem("pagingScrollPos");

    if (isPaging === "true" && savedPos !== null) {
        window.scrollTo(0, parseInt(savedPos));
        sessionStorage.removeItem("isPaging");
    }
});