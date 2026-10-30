const searchInput = document.getElementById("search");
const locationInput = document.getElementById("location");


// ================= SEARCH INPUT =================

searchInput.addEventListener("focus", () => {
    searchInput.parentElement.classList.add("active");
});

searchInput.addEventListener("blur", () => {
    searchInput.parentElement.classList.remove("active");
});


// ================= LOCATION INPUT =================

locationInput.addEventListener("focus", () => {
    locationInput.parentElement.classList.add("active");
});

locationInput.addEventListener("blur", () => {
    locationInput.parentElement.classList.remove("active");
});


// ================= SEARCH FUNCTION =================

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        const searchValue = searchInput.value.trim();

        if (searchValue === "") {

            alert("Please enter something to search!");

        } else {

            alert(`Searching for "${searchValue}"...`);

        }
    }
});


// ================= CARD ANIMATION =================

const cards = document.querySelectorAll(
    "main > div:nth-of-type(4) > div"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


cards.forEach((card) => {
    observer.observe(card);
});