<script setup lang="ts">
import { useRouter } from 'vue-router';
const { push , currentRoute } = useRouter();
function scrollToSection(sectionId : any) {
    push({path : '/' , hash : `#${sectionId}`})
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

</script>
<template>
    
    <div class="gredBg py-5 px-3 w-5rem flex flex-column justify-content-center align-items-center">
        <img  src="../images/logo.png" class="w-6 absolute" style="top: 5vh;" alt="">
        <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="scrollToSection('section1')" :class="{'activeSection' : currentRoute.hash == '#section1'}">
            pages
        </span>
        <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="scrollToSection('sectionHome1')"  :class="{'activeSection' : currentRoute.hash .includes('#sectionHome')}">
            home
        </span>
        <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3">
            build
        </span>
        <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3">
            engineering
        </span>
    </div>
    <div class="image-overlay"></div>
</template>
<style>
.activeSection{
    padding: 2px 0;
    border-bottom: 4px solid var(--primary-color);
}
.gredBg{
    height: 100vh;
    z-index: 9;
    position: fixed;
    background: linear-gradient(to bottom , rgb(19 , 24 , 28) 0% , rgb(30 , 34 , 42) 100%);
}
.image-overlay {
    width: 60%;
    height: 100%;
    background-image: url('../images/logoForBg.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    right: 7.2%;
    opacity: 0.5; /* Adjust the opacity as needed */
  }
</style>