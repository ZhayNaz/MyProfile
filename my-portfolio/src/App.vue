<template>
  <div>
    <Navbar />
    <Profile />
    <!-- <Projects />
    <Info />
    <Work />
    <Education />
    <Reviews /> -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Profile from "./components/Profile.vue";
// import Projects from "./components/Projects.vue";
// import Info from "./components/Info.vue";
// import Work from "./components/Work.vue";
// import Education from "./components/Education.vue";
// import Reviews from "./components/Reviews.vue";

export default {
  name: "App",
  components: { 
    Navbar, 
    Profile // ✅ register it here so it works
    // Projects, Info, Work, Education, Reviews
  }
};
</script>
