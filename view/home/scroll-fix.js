// TechIntegrity Solutions - Scroll Management System
document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && link.hostname === window.location.hostname) {
        localStorage.setItem("navScrollPos", window.scrollY);
        localStorage.setItem("isRedirecting", "true");
    }
});

window.addEventListener("load", () => {
    const savedPos = localStorage.getItem("navScrollPos");
    const isRedirecting = localStorage.getItem("isRedirecting");

    if (isRedirecting === "true" && savedPos) {
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(savedPos),
                behavior: "instant" 
            });
            localStorage.removeItem("isRedirecting");
        }, 100);
    }
});