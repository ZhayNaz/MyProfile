document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveSection() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; 
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveSection);
});


document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            projects.forEach(project => {
                if (category === "all" || project.getAttribute("data-category") === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const loaderContainer = document.querySelector(".loader-container");

    const name = "Joseph Jeremy C. Garcia"; 
    let index = 0;

    function typeEffect() {
        if (index < name.length) {
            loadingText.textContent += name[index]; 
            index++;
            setTimeout(typeEffect, 150);
            // console.log(loadingText);
            
        } else {
            setTimeout(() => {
                loaderContainer.classList.add("hidden"); 
            }, 1000);
        }
    }

    loadingText.textContent = ""; 
    setTimeout(typeEffect, 500);
});

document.addEventListener("DOMContentLoaded", () => {
    const reviews = [
        { text: "This portfolio is amazing!", author: "John Doe" },
        { text: "Very professional work!", author: "Jane Smith" },
        { text: "Great developer, highly recommend!", author: "Michael Johnson" },
        { text: "Impressive projects and clean UI!", author: "Sarah Lee" }
    ];

    const reviewText = document.getElementById("review-text");
    const reviewAuthor = document.getElementById("review-author");
    const addReviewBtn = document.getElementById("add-review-btn");

    let currentIndex = 0;

    function changeReview() {
        reviewText.textContent = `"${reviews[currentIndex].text}"`;
        reviewAuthor.textContent = `- ${reviews[currentIndex].author}`;
        currentIndex = (currentIndex + 1) % reviews.length;
    }

    changeReview();
    setInterval(changeReview, 4000);

    addReviewBtn.addEventListener("click", () => {
        const newReviewText = prompt("Enter your review:");
        const newReviewAuthor = prompt("Enter your name:");

        if (newReviewText && newReviewAuthor) {
            reviews.push({ text: newReviewText, author: newReviewAuthor });
            alert("Your review has been added!");
        }
    });
});
