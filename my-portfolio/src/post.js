document.getElementById("add-review-btn").addEventListener("click", () => {
    document.getElementById("review-form").style.display = "block";
});

document.getElementById("submit-review").addEventListener("click", async () => {
    const review = document.getElementById("review-input").value;

    if (review.trim() === "") {
        alert("Please enter a review!");
        return;
    }

    const response = await fetch("http://localhost:3000/add-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review }),
    });

    const result = await response.json();
    document.getElementById("response-message").innerText = result.message;
    document.getElementById("review-input").value = ""; 

    loadReviews(); 
});

async function loadReviews() {
    const response = await fetch("http://localhost:3000/get-reviews");
    const reviews = await response.json();
    const container = document.getElementById("reviews-container");
    
    container.innerHTML = reviews.length ? reviews.map(r => `<p>${r}</p>`).join("") : "<p>No reviews yet.</p>";
}

loadReviews();
