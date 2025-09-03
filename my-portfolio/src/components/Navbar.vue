<template>
  <header class="navbar">
    <nav>
      <h1 class="logo">My Portfolio</h1>
      <ul>
        <li><a href="#profile" class="nav-link active">Profile</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#info" class="nav-link">Info</a></li>
        <li><a href="#work" class="nav-link">Work Experience</a></li>
        <li><a href="#education" class="nav-link">Education</a></li>
        <li><a href="#reviews" class="nav-link">Reviews</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;         
  padding-right: 200px;    
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: space-between;  
  align-items: center;
  width: 100%;
  padding: 1rem 3rem;            
}

.logo {
  color: #4cafef;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

ul {
  display: flex;
  flex: 1;
  justify-content: flex-end;    
  list-style: none;
  gap: 1rem;                      
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #ccc;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255,255,255,0.08);
}

.nav-link.active {
  color: #4cafef;
  background: rgba(76, 175, 239, 0.15);
}
</style>
