<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title">🚀 Projects</h2>

    <div class="projects-grid">
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <img :src="project.image" :alt="project.title" class="project-img" />
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-links">
            <a :href="project.demo" target="_blank" class="btn">🔗 Live Demo</a>
            <a :href="project.github" target="_blank" class="btn secondary">💻 Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Portfolio Website",
          description: "A responsive portfolio built with Vue.js and deployed on Vercel.",
          image: "https://via.placeholder.com/400x250",
          demo: "https://your-portfolio.vercel.app",
          github: "https://github.com/yourusername/portfolio"
        },
        {
          title: "POS System",
          description: "Point of Sale system with inventory management and reporting.",
          image: "https://via.placeholder.com/400x250",
          demo: "#",
          github: "#"
        },
        {
          title: "IoT Smart Bin",
          description: "An IoT-enabled school smart trash bin for waste management.",
          image: "https://via.placeholder.com/400x250",
          demo: "#",
          github: "#"
        }
      ]
    };
  }
};
</script>

<style scoped>
.projects-section {
  padding: 5rem 2rem;
  background: #121212; /* Dark background */
  color: #eaeaea;
  min-height: 100vh;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #4cafef;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
}

.project-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-content {
  padding: 1.2rem;
}

.project-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.project-desc {
  font-size: 0.95rem;
  color: #bbb;
  margin-bottom: 1rem;
}

.project-links {
  display: flex;
  gap: 0.8rem;
}

.btn {
  background: #4cafef;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #3a9dd6;
}

.btn.secondary {
  background: transparent;
  border: 1px solid #4cafef;
  color: #4cafef;
}

.btn.secondary:hover {
  background: #4cafef;
  color: #fff;
}
</style>
