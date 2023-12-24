<script setup lang="ts">
import {ref ,onMounted } from 'vue'
import { useRouter } from 'vue-router';
import BookCategory from '@/components/partials/BookCategoryPartial.vue';
const { push , currentRoute } = useRouter();
import PersonPartial from '../components/partials/PersonPartial.vue';
import type { Person } from '../types/types';
import AppImage from '@/components/app/AppImage.vue';
import type { Ref } from 'vue';
import Rating from 'primevue/rating';
type providerTypes = 'editor' | 'designer' | undefined
const providerId = ref()
const provider = ref()
const redirectRoute : any = ref()
const lastRoute : any = ref()
const providerType : Ref<providerTypes> = ref()

const providers : Person[] = [
{
    id: 1,
    name: "حنان السيد",
    image: "placeholders/placeholder2.png",
    rating : 3,
    position : 'مصحح لغوي',
    pricePerJob : 2.40
},
{
    id: 2,
    name: "فارس سامي",
    image: "placeholders/placeholder5.png",
    rating : 4,
    position : 'مصحح لغوي',
    pricePerJob : 1.40
},
{
    id: 3,
    name: "سالم حسين",
    image: "placeholders/placeholder4.png",
    rating : 5,
    position : 'مصحح لغوي',
    pricePerJob : 3.60
},
{
        id: 4,
        name: "سالم حسين",
        image: "placeholders/placeholder4.png",
        rating : 3,
        position : 'مصمم غلاف',
        pricePerJob : 200
    },
    {
        id: 5,
        name: "أحمد ياسر",
        position : 'مصمم غلاف',
        image: "placeholders/placeholder6.png",
        rating : 4,
        pricePerJob : 250
    },
    {
        id: 6,
        name: "سلمي محمود",
        position : 'مصمم غلاف',
        image: "placeholders/placeholder3.png",
        rating : 5,
        pricePerJob : 380
    },
]
onMounted(() => {
providerId.value = parseInt(currentRoute.value.params.id as string)
  window.scrollTo({
    top : 0,
    behavior : 'smooth'
  })  
  if(currentRoute.value.query.type){
    providerType.value = currentRoute.value.query.type as providerTypes
  }
  provider.value = providers.filter((provider : Person) => provider.id == providerId.value as any)
  if(providerType.value == 'designer'){
      redirectRoute.value = {
        path : '/elmasna3',
        query : {checkpoint : 'submitOrder'}
      }
    lastRoute.value = {
        path : '/elmasna3',
        query : {checkpoint : 'chooseDesigner'}
    }
  }
  if(providerType.value == 'editor'){
    redirectRoute.value = {
        path : '/elmasna3',
        query : {checkpoint : 'chooseCover'}
    }
    lastRoute.value = {
        path : '/elmasna3',
        query : {checkpoint : 'chooseEditor'}
    }
  }
})

const setProvider = () => {
  if(localStorage.getItem('elsan3a_cart')){
    let cart = JSON.parse(localStorage.getItem('elsan3a_cart') as string)
    console.log(cart , 'exists');
    if(providerType.value == 'designer'){
      cart.bookDesigner = provider.value
    }
    else{
      cart.languageEditor = provider.value
    }
    localStorage.setItem('elsan3a_cart' , JSON.stringify(cart))
  }
  else{
    let cart = {
      bookDesigner : providerType.value == 'designer' ? provider.value : {},
      languageEditor : providerType.value == 'editor' ? provider.value : {}
    }
    console.log(cart , 'new');
    localStorage.setItem('elsan3a_cart' , JSON.stringify(cart))
  }
}

</script>

<template>
<div class="marginRight py-5" style="min-height: 80vh;">
    <section v-if="provider" class="p-3 w-full">
        <div class="flex flex-column md:flex-row align-items-center">
            <div class="p-3">
                <h1 v-if="providerType == 'editor'" class="secondaryColor text-5xl md:text-7xl">اختار مصحح لغوي</h1>
                <h1 v-else class="secondaryColor text-5xl md:text-7xl">اختار مصمم للغلاف</h1>
                <p class="my-5 textColor text-base font-bold w-12 md:w-10">مصحح لغوي ذو خبرة كبيرة. صحح اكثر من ١٠٠ كتاب. جاهز للبدأ في تصحيح كتابك في اي وقت و تسليمه في اسرع وقت ممكن.</p>
                <div class="flex my-3 providers">
                    <h3 v-if="providerType == 'editor'" class="primaryColor mx-3">{{ provider[0].pricePerJob }} ج.م / كلمة</h3>
                    <h3 v-else class="primaryColor mx-3">{{ provider[0].pricePerJob }} ج.م / غلاف</h3>
                    <Rating readonly v-model="provider[0].rating" :cancel="false" />
                </div>
                <div class="flex flex-column md:flex-row my-3">
                    <div style="z-index: 9 !important;" @click="setProvider();push(redirectRoute)" class="w-15rem gredientBg text-center p-3 borderRound mt-5 mx-auto md:mx-2 py-3 flex justify-content-center cursor-pointer">
                        <h2>تأكيد الطلب</h2>
                    </div>
                    <div style="z-index: 9 !important;" @click="push(lastRoute)" class="w-15rem gredientBg text-center p-3 borderRound mt-5 mx-auto md:mx-2 py-3 flex justify-content-center cursor-pointer">
                        <h2 v-if="providerType == 'editor'">اختيار مصحح اخر</h2>
                        <h2 v-else>اختيار مصمم اخر</h2>
                    </div>
                </div>
            </div>
            <PersonPartial :size="{ width : 280 , height : 300}" :person="{id : providerId , name : provider[0].name , image : provider[0].image ,  position : provider[0].position }" />
        </div>
        <h2 class="textColor p-3 font-bold">الأعمال السابقة</h2>
        <div class="flex justify-content-center md:justify-content-start flex-wrap md:flex-nowrap my-2">
            <img src="../images/book1.png" class="w-2 mx-2 md:mx-4 my-2 max-w-7rem" alt="">
            <img src="../images/book2.png" class="w-2 mx-2 md:mx-4 my-2 max-w-7rem" alt="">
            <img src="../images/book3.png" class="w-2 mx-2 md:mx-4 my-2 max-w-7rem" alt="">
            <img src="../images/book4.png" class="w-2 mx-2 md:mx-4 my-2 max-w-7rem" alt="">
        </div>
    </section>
</div>
</template>
<style>
.providers .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: var(--secondary-color) !important;
}
.wordsInput{
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 2rem;
    background: none;
    font-size: 18px;
    outline: none;
}
.inactiveColor{
  color: #5B5044;
}
.justifyCenter{
  justify-content: center;
}
.gredientBg{
  background: linear-gradient(to bottom , rgb(217 , 181 , 141) 0% , rgb(203 , 203 , 203) 100%);
}
.marginRight{
  margin-right: 10rem;
}
.maxWidth{
  max-width: 33rem;
}
@media screen and (max-width : 600px) {
  .marginRight{
    margin-right: 0;
  }
  .justifyCenter{
    justify-content: start;
  }
  iframe{
    width: 360px !important;
  }
  .maxWidth{
    max-width: 18rem;
  }
  .textCenter{
    text-align: center;
  }
  .scroll-container {
    overflow-x: auto !important; /* Enable horizontal scrolling */
    -webkit-overflow-scrolling: touch !important; /* Enable smooth scrolling on iOS devices */
    scrollbar-width: none !important; /* Hide scrollbar for modern browsers */
    -ms-overflow-style: none !important; /* Hide scrollbar for IE and Edge */
    white-space: nowrap !important; /* Prevent content from wrapping */
    max-width: 95%;
  }
}
</style>
