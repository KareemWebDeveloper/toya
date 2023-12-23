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
    id : 1,
    name: "شريف الليثي",
    position : 'مصحح لغوي',
    image: "sherif.png",
    rating : 3,
    pricePerJob : '2.40 ج.م '
},
{
    id : 2,
    name: "عماد العادلي",
    position : 'مصحح لغوي',
    image: "emad.png",
    rating : 4,
    pricePerJob : '10.00 ج.م'
},
{
    id : 3,
    name: "شريف سعيد",
    position : 'مصحح لغوي',
    image: "s-sa3eed.png",
    rating : 5,
    pricePerJob : '3.60 ج.م'
}
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


</script>

<template>
<div class="marginRight py-5">
    <section v-if="provider" class="p-3 w-full">
        <div  class="flex align-items-center">
            <div class="p-3">
                <h1 v-if="providerType == 'editor'" class="secondaryColor text-5xl md:text-7xl">اختار مصحح لغوي</h1>
                <h1 v-else class="secondaryColor text-5xl md:text-7xl">اختار مصمم للغلاف</h1>
                <p class="my-5 textColor text-base font-bold w-10">مصحح لغوي ذو خبرة كبيرة. صحح اكثر من ١٠٠ كتاب. جاهز للبدأ في تصحيح كتابك في اي وقت و تسليمه في اسرع وقت ممكن.</p>
                <div class="flex my-3 providers">
                    <h3 v-if="providerType == 'editor'" class="primaryColor mx-3">{{ provider[0].pricePerJob }} / كلمة</h3>
                    <h3 v-else class="primaryColor mx-3">{{ provider[0].pricePerJob }} / غلاف</h3>
                    <Rating readonly v-model="provider[0].rating" :cancel="false" />
                </div>
                <div class="flex my-3">
                    <div style="z-index: 9 !important;" @click="push(redirectRoute)" class="w-15rem gredientBg text-center p-3 borderRound mt-5 mx-2 py-3 flex justify-content-center cursor-pointer">
                        <h2>تأكيد الطلب</h2>
                    </div>
                    <div style="z-index: 9 !important;" @click="push(lastRoute)" class="w-15rem gredientBg text-center p-3 borderRound mt-5 mx-2 py-3 flex justify-content-center cursor-pointer">
                        <h2>اختيار مصحح اخر</h2>
                    </div>
                </div>
            </div>
            <PersonPartial :size="{ width : 300 , height : 300}" :person="{id : providerId , name : provider[0].name , image : provider[0].image ,  position : provider[0].position }" />
        </div>
        <h2 class="textColor p-3 font-bold">الأعمال السابقة</h2>
        <div class="flex my-2">
            <img src="../images/book1.png" class="w-2 mx-4 max-w-7rem" alt="">
            <img src="../images/book2.png" class="w-2 mx-4 max-w-7rem" alt="">
            <img src="../images/book3.png" class="w-2 mx-4 max-w-7rem" alt="">
            <img src="../images/book4.png" class="w-2 mx-4 max-w-7rem" alt="">
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
