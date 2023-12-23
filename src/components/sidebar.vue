<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Sidebar from 'primevue/sidebar';
const { push , currentRoute } = useRouter();
const isMobExpanded = ref(false)
function scrollToSection(sectionId : any) {
    push({path : '/' , hash : `#${sectionId}`}).then((result) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    })
}

</script>
<template>
    <div class="w-full" style="direction: rtl;">
        <!-- <div class="fixed " @click="isMobExpanded = true" style="top: 2vh; right: 2vh; z-index: 999;"> -->
            <span @click="isMobExpanded = true" class="material-symbols-outlined fixed cursor-pointer text-6xl flex md:hidden primaryColor font-bold" style="top: 2vh; right: 2vh; z-index: 999;">
                menu
            </span>
        <!-- </div> -->
        <Sidebar v-model:visible="isMobExpanded" :position="'left'">
            <div class="mobSideBar expanded">
              <span class="material-symbols-outlined textColor p-3 text-4xl" @click="isMobExpanded = false">
                close
              </span>
                <div class="flex flex-column text-center py-2">
                    <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="isMobExpanded = false; scrollToSection('section1');" :class="{'activeSection' : currentRoute.hash == '#section1'}">
                        pages
                    </span>
                    <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="isMobExpanded = false; scrollToSection('sectionHome1');"  :class="{'activeSection' : currentRoute.hash .includes('#sectionHome')}">
                        home
                    </span>
                    <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="isMobExpanded = false; push('/elmasna3');" :class="{'activeSection' : currentRoute.path.includes('elmasna3')}">
                        build
                    </span>
                    <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="isMobExpanded = false; push('/courses');" :class="{'activeSection' : currentRoute.path.includes('courses')}">
                        engineering
                    </span>
                </div>
            </div>
        </Sidebar>
    </div>
    <div class="hidden md:flex gredBg py-5 px-3 w-7rem flex-column justify-content-center align-items-center">
        <img  src="../images/logo.png" class="w-6 absolute" style="top: 5vh;" alt="">
        <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="scrollToSection('section1')" :class="{'activeSection' : currentRoute.hash == '#section1'}">
            pages
        </span>
        <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="scrollToSection('sectionHome1')"  :class="{'activeSection' : currentRoute.hash .includes('#sectionHome')}">
            home
        </span>
        <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="push('/elmasna3')" :class="{'activeSection' : currentRoute.path.includes('elmasna3')}">
            build
        </span>
        <span class="material-symbols-outlined cursor-pointer primaryColor text-5xl my-3" @click="push('/courses')" :class="{'activeSection' : currentRoute.path.includes('courses')}">
            engineering
        </span>
    </div>
    <!-- <div class="image-overlay"></div> -->
</template>
<style>
.p-sidebar {
    background: none !important;
}
.activeSection{
    padding: 2px 0;
    border-bottom: 4px solid var(--primary-color);
}
.gredBg{
    height: 100vh;
    position: fixed;
    background: linear-gradient(to bottom , rgb(19 , 24 , 28) 0% , rgb(30 , 34 , 42) 100%);
}
.p-sidebar-icon {
    display: none !important;
}
.image-overlay {
    width: 60%;
    height: 100%;
    background-image: url('../images/logoForBg.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    z-index: 1;
    right: 6.2%;
    opacity: 0.5; /* Adjust the opacity as needed */
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--gredient-color);
    width: 100px;
    border-end-end-radius: 25px;
    border-start-end-radius: 25px;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.81);
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    transition: width 0.3s ease;
    overflow-y: auto;
  }
  .mobSideBar {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--gredient-color);
    width: 100px;
    border-end-end-radius: 25px;
    border-start-end-radius: 25px;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.81);
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    transition: width 0.3s ease;
    overflow-y: auto;
  }
  @media screen and (max-width : 600px){
      .image-overlay {
          right: 1%;
    }
    
  }
</style>