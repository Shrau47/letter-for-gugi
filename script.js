
let currentPage = 0;

const pages = document.querySelectorAll(".page");

function showPage(index) {

    pages.forEach((page, i) => {

        if (i === index) {
            page.classList.add("active");
        } else {
            page.classList.remove("active");
        }

    });

    currentPage = index;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function nextPage() {

    if (currentPage < pages.length - 1) {

        showPage(currentPage + 1);

    }

}

function previousPage() {

    if (currentPage > 0) {

        showPage(currentPage - 1);

    }

}

function restartStory() {

    showPage(0);

}
