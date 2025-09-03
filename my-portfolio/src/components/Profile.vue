<template>
  <section id="profile" class="profile-section">
    <div class="profile-card">
      <!-- Left Column -->
      <div class="profile-left">
        <img src="../assets/profile.jpg" alt="Profile Picture" class="profile-img" />
        <h2 class="name">Joseph Jeremy C. Garcia</h2>
        <p class="bio">
          Web Developer | System Developer <br />
          Computer Engineering
        </p>
        <button class="resume-btn" @click="downloadResume">
          📄 Download Resume
        </button>
      </div>

      <!-- Right Column -->
      <div class="profile-right">
        <h3 class="section-title">About Me</h3>
        <div class="details-grid">
          <p><strong>Age:</strong> 24</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Birthday:</strong> November 20, 2000</p>
          <p><strong>Nationality:</strong> Filipino</p>
          <p><strong>Address:</strong> Cavite, Philippines</p>
          <p><strong>Profession:</strong> Computer Engineer</p>
          <p><strong>Status:</strong> Single</p>
        </div>

        <div class="quote-box">
          <blockquote>{{ quote }}</blockquote>
          <p v-if="author" class="author">— {{ author }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      quote: "Loading quote...",
      author: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.quote =
        "Success is not final, failure is not fatal: It is the courage to continue that counts.";
      this.author = "Winston Churchill";
    }, 1000);
  },
  methods: {
    downloadResume() {
      alert("Resume download feature coming soon!");
    }
  }
};
</script>

<style scoped>
.profile-section {
  padding: 6rem 2rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e6edf3;
}

.profile-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #1c1f26;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.6);
  max-width: 1000px;
  width: 100%;
  overflow: hidden;
  border: 1px solid #2d333b;
}

.profile-left {
  background: #1a1e23;
  padding: 2rem;
  text-align: center;
  border-right: 1px solid #2d333b;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #4cafef;
  margin-bottom: 1rem;
}

.name {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #ffffff;
}

.bio {
  font-size: 0.95rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.resume-btn {
  background: #4cafef;
  color: #fff;
  padding: 0.7rem 1.4rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.resume-btn:hover {
  background: #3a9dd6;
  transform: translateY(-2px);
}

.profile-right {
  padding: 2rem;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #4cafef;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem 1.2rem;
  margin-bottom: 1.5rem;
}

.details-grid p {
  font-size: 0.95rem;
  color: #c9d1d9;
}

.details-grid strong {
  color: #ffffff;
}

.quote-box {
  padding: 1rem 1.2rem;
  background: #111418;
  border-left: 4px solid #4cafef;
  border-radius: 6px;
  font-style: italic;
  color: #e6edf3;
}

.author {
  margin-top: 0.6rem;
  font-size: 0.9rem;
  text-align: right;
  color: #9ca3af;
}
</style>
