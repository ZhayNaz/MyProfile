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
        } else {
            setTimeout(() => {
                loaderContainer.classList.add("hidden"); 
            }, 1000);
        }
    }

    loadingText.textContent = ""; 
    setTimeout(typeEffect, 500);
});

// document.addEventListener("DOMContentLoaded", () => {
//     fetch("") 
//         .then(response => response.json()) 
//         .then(data => {
//             document.getElementById("motivational-quote").textContent = `"${data.content}"`;
//             document.getElementById("quote-author").textContent = `- ${data.author}`;
//         })
//         .catch(error => {
//             document.getElementById("motivational-quote").textContent = "Failed to load quote.";
//         });
// });

document.getElementById("download-resume-btn").addEventListener("click", function () {
    document.getElementById("resume-modal").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("resume-modal").style.display = "none";
});

function downloadResume(format) {
    const resumePath = format === 'pdf' ? 'resume.pdf' : 'resume.docx';
    window.location.href = resumePath;
}
