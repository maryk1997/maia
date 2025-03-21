// Scroll to Top Button Functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopBtn.classList.remove("d-none");
    } else {
        scrollToTopBtn.classList.add("d-none");
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Product Search Functionality (Simple Filter by Name)
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", function () {
    const filter = searchBar.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach(item => {
        const productName = item.getAttribute("data-name").toLowerCase();
        if (productName.includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});
