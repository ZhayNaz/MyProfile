<template>
  <section id="reviews">
    <div class="profile-container">
      <div class="reviews-header">
        <h2 class="title">What People Say</h2>
        <div class="tooltip-container">
          <button @click="addReview">+</button>
          <span class="tooltip-text">Add Your Review</span>
        </div>
      </div>

      <div class="review-box">
        <p>"{{ reviews[currentIndex].text }}"</p>
        <h4>- {{ reviews[currentIndex].author }}</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reviews",
  data() {
    return {
      reviews: [
        { text: "This portfolio is amazing!", author: "John Doe" },
        { text: "Very professional work!", author: "Jane Smith" },
        { text: "Great developer, highly recommend!", author: "Michael Johnson" },
        { text: "Impressive projects and clean UI!", author: "Sarah Lee" }
      ],
      currentIndex: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    }, 4000);
  },
  methods: {
    addReview() {
      const text = prompt("Enter your review:")?.trim();
      const author = prompt("Enter your name:")?.trim();
      if (!text || !author) {
        alert("Error: Review and name cannot be empty!");
        return;
      }
      this.reviews.push({ text, author });
      alert("Success: Your review has been added!");
    }
  }
};
</script>
