<script setup lang="ts">
import {ref ,onMounted } from 'vue'
import { useRouter } from 'vue-router';
import BookCategory from '@/components/partials/BookCategoryPartial.vue';
const { push , currentRoute } = useRouter();
import PersonPartial from '../components/partials/PersonPartial.vue';
import { Person } from '../types/types';
import AppImage from '@/components/app/AppImage.vue';
const chooseBookCategoy = ref(true)
const chooseWordsCounts = ref(false)
const chooseLanguageEditor = ref(false)
const chooseCoverDesigner = ref(false)
const chooseCoverType = ref(false)
const submitOrder = ref(false)
const wordsCount = ref()
onMounted(() => {
  window.scrollTo({
    top : 0,
    behavior : 'smooth'
  })  
  if(currentRoute.value.query.checkpoint){
    if(currentRoute.value.query.checkpoint == 'submitOrder'){
        submitOrder.value = true
        chooseBookCategoy.value = false
        chooseWordsCounts.value = false
        chooseLanguageEditor.value = false
        chooseCoverDesigner.value = false
        chooseCoverType.value = false
    }
    if(currentRoute.value.query.checkpoint == 'chooseCover'){
        chooseCoverType.value = true
        chooseCoverDesigner.value = false
        submitOrder.value = false
        chooseBookCategoy.value = false
        chooseWordsCounts.value = false
        chooseLanguageEditor.value = false
    }
    if(currentRoute.value.query.checkpoint == 'chooseEditor'){
        chooseLanguageEditor.value = true
        chooseCoverDesigner.value = false
        submitOrder.value = false
        chooseBookCategoy.value = false
        chooseWordsCounts.value = false
        chooseCoverType.value = false
    }
    if(currentRoute.value.query.checkpoint == 'chooseDesigner'){
        chooseCoverDesigner.value = true
        chooseLanguageEditor.value = false
        submitOrder.value = false
        chooseBookCategoy.value = false
        chooseWordsCounts.value = false
        chooseCoverType.value = false
    }
  }
})
const BookCategories = [
    {
        category : 'السيرة الذاتية',
        icon : 'person'
    },
    {
        category : 'المذكرات',
        icon : 'bookmarks'
    },
    {
        category : 'التطوير.',
        icon : 'show_chart'
    },
    {
        category : 'السيرة الذاتية.',
        icon : 'person'
    },
    {
        category : 'السيرة الذاتية.',
        icon : 'person'
    },
    {
        category : 'السيرة الذاتية.',
        icon : 'person'
    },
    {
        category : 'السيرة الذاتية.',
        icon : 'diversity_1'
    },
    {
        category : 'السيرة الذاتية.',
        icon : 'person'
    },
    {
        category : 'السيرة الذاتية.',
        icon : 'person'
    },
    {
        category : 'السيرة الذاتية.',
        icon : 'diversity_1'
    },
    {
        category : 'السيرة الذاتية.',
        icon : 'person'
    },
    {
        category : 'السيرة الذاتية.',
        icon : 'person'
    },
]

const BookCoverDesigns = [
    {
        category : 'السيرة الذاتية',
        icon : 'person'
    },
    {
        category : 'المذكرات',
        icon : 'bookmarks'
    },
    {
        category : 'التطوير',
        icon : 'show_chart'
    },
    {
        category : 'الصحة',
        icon : 'volunteer_activism'
    },
    {
        category : 'الفن',
        icon : 'brush'
    },
    {
        category : 'واقعي',
        icon : 'visibility'
    },
    {
        category : 'التحفيز',
        icon : 'diversity_1'
    },
    {
        category : 'التاريخ',
        icon : 'history_edu'
    },
    {
        category : 'كتب الطبخ',
        icon : 'skillet'
    },
]

const languageEditors: Person[] = [
    {
        id: 1,
        name: "شريف الليثي",
        image: "sherif.png",
        rating : 3,
        pricePerJob : '2.40 ج.م / كلمة'
    },
    {
        id: 2,
        name: "عماد العادلي",
        image: "emad.png",
        rating : 4,
        pricePerJob : '20.00 ج.م / كلمة'
    },
    {
        id: 3,
        name: "شريف سعيد",
        image: "s-sa3eed.png",
        rating : 5,
        pricePerJob : '3.60 ج.م / كلمة'
    },
]
const coverDesigners: Person[] = [
    {
        id: 1,
        name: "شريف الليثي",
        image: "sherif.png",
        rating : 3,
        pricePerJob : '200.00 ج.م / الغلاف'
    },
    {
        id: 2,
        name: "عماد العادلي",
        image: "emad.png",
        rating : 4,
        pricePerJob : '250.00 ج.م / الغلاف'
    },
    {
        id: 3,
        name: "شريف سعيد",
        image: "s-sa3eed.png",
        rating : 5,
        pricePerJob : '380.00 ج.م / الغلاف'
    },
]

</script>

<template>
<div class="marginRight py-5">
  
  <!-- Choose Book Categories -->
    <section v-if="chooseBookCategoy" class="p-3 w-full">
        <h1 class="secondaryColor text-5xl md:text-7xl p-5">اختار نوع الكتاب</h1>
        <div class="flex flex-wrap">
            <div v-for="category in BookCategories">
                <BookCategory class="m-3" :category="category.category" :icon="category.icon"></BookCategory>
            </div>
        </div>
        <div class="w-10 flex justify-content-end ">
            <div style="z-index: 9999 !important;" @click="chooseWordsCounts = true; chooseBookCategoy = false;" class="w-2 gredientBg text-center p-3 borderRound my-5 py-3 flex justify-content-center cursor-pointer">
                <h2>التالي</h2>
                <span class="material-symbols-outlined mx-3 font-bold text-3xl mt-2">
                  keyboard_backspace
                </span>
            </div>
        </div>
    </section>

  <!-- Choose Book Words Counts -->
  <section v-if="chooseWordsCounts" class="p-3 w-full">
        <h1 class="secondaryColor text-5xl md:text-8xl p-5">عدد كلمات الكتاب</h1>
        <h3 class="text-3xl secondaryColor p-5">ادخل عدد كلمات كتابك</h3>
        <div class="flex flex-column justify-content-center m-auto">
            <div class="relative wordsCount">
                <input v-model="wordsCount" type="text" placeholder="عدد كلمات كتابك" class="wordsInput">
                <h2 class="absolute secondaryColor" style="bottom: 0.5rem; left: 1.5rem;">كلمة</h2>
            </div>
            <h5 class="underline secondaryColor cursor-pointer" style="margin: 1vh 6vh;">أعرف عدد كلمات كتابي ازاي؟</h5>
        </div>
        <div class="w-10 flex justify-content-end ">
            <div style="z-index: 9999 !important;" @click="chooseWordsCounts = false; chooseLanguageEditor = true;" class="w-2 gredientBg text-center p-3 borderRound my-5 py-3 flex  align-items-center justify-content-center cursor-pointer">
                <h2>التالي</h2>
                <span class="material-symbols-outlined mx-3 font-bold text-3xl">
                keyboard_backspace
                </span>
            </div>
        </div>
    </section>

  <!-- Choose Language Editor -->
  <section v-if="chooseLanguageEditor" class="p-3 w-full">
        <h1 class="secondaryColor text-5xl md:text-8xl p-5">اختار مصحح لغوي</h1>
        <div class="flex align-items-baseline mx-5 my-3 px-5">
            <div v-for="person in languageEditors" @click="push({path : `/providers/${person.id}` , query : {type : 'editor'}})" class="mx-3 cursor-pointer">
                <PersonPartial :person="person" :size="{width : 200 , height : 200}"></PersonPartial>
            </div>
        </div>
        <div class="w-10 flex justify-content-end ">
            <div style="z-index: 9999 !important;" @click="chooseLanguageEditor = false; chooseCoverType = true;" class="w-2 gredientBg text-center p-3 borderRound my-5 py-3 flex align-items-center justify-content-center cursor-pointer">
                <h2>التالي</h2>
                <span class="material-symbols-outlined mx-3 font-bold text-3xl">
                keyboard_backspace
                </span>
            </div>
        </div>
    </section>

      <!-- Choose Cover Type -->
    <section v-if="chooseCoverType" class="p-3 w-full">
        <h1 class="secondaryColor text-5xl md:text-8xl p-5">اختار نوع الغلاف</h1>
        <div class="flex flex-wrap">
            <div v-for="category in BookCoverDesigns">
                <BookCategory class="m-3" :category="category.category" :icon="category.icon"></BookCategory>
            </div>
        </div>
            <!-- <div class="flex flex-wrap mx-2 my-3">
                <div @click="chooseCoverType = false; chooseCoverDesigner = true;" v-for="type in BookCoverDesigns" class="mx-3 my-2 h-10rem w-10rem flex flex-column justify-content-center cursor-pointer gredientBg p-3 borderRound">
                    <span class="material-symbols-outlined my-3 text-center font-bold text-3xl mt-2">
                        {{ type.icon }}
                    </span>
                    <h2 class="text-center">{{ type.category }}</h2>
                </div>
            </div> -->
        <div class="w-10 flex justify-content-end ">
            <div style="z-index: 9999 !important;" @click="chooseCoverType = false; chooseCoverDesigner = true;" class="w-2 gredientBg text-center p-3 borderRound my-5 py-3 flex align-items-center justify-content-center cursor-pointer">
                <h2>التالي</h2>
                <span class="material-symbols-outlined mx-3 font-bold text-3xl">
                keyboard_backspace
                </span>
            </div>
        </div>
    </section>

  <!-- Choose Book Cover Designer -->
  <section v-if="chooseCoverDesigner" class="p-3 w-full">
        <h1 class="secondaryColor text-5xl md:text-8xl p-5">اختار مصمم للغلاف</h1>
        <div class="flex align-items-baseline">
            <div class="flex align-items-baseline mx-5 my-3 px-5">
                <div v-for="designer in coverDesigners" @click="push({path : `/providers/${designer.id}` , query : {type : 'designer'}})" class="mx-3 cursor-pointer">
                    <PersonPartial :person="designer" :size="{width : 200 , height : 200}"></PersonPartial>
                </div>
            </div>
        </div>
        <div class="w-10 flex justify-content-end ">
            <div style="z-index: 9999 !important;" @click="chooseCoverDesigner = false; submitOrder = true;" class="w-2 gredientBg text-center p-3 borderRound my-5 py-3 flex align-items-center justify-content-center cursor-pointer">
                <h2>التالي</h2>
                <span class="material-symbols-outlined mx-3 font-bold text-3xl">
                keyboard_backspace
                </span>
            </div>
        </div>
    </section>


  <!-- Order Review and Submitting -->
  <section v-if="submitOrder" class="p-3 w-full">
      <div class="flex align-items-center justify-content-center">
            <div class="mx-5">
                <h1 class="secondaryColor text-5xl md:text-7xl p-5">اتمام الطلب</h1>
                <div class="p-5 borderRound" style="background-color: rgba(255, 255, 255, 0.075);">
                    <h2 class="secondaryColor text-3xl md:text-4xl p-5">تفاصيل الطلب</h2>
                    <div class="mt-3">
                        <FormKit prefix-icon="text" type="text" label="الاسم" placeholder="أدخل الاسم" name="username" validation="required|length:3" />
                    </div>
                    <div class="mt-3">
                        <FormKit prefix-icon="tools" type="text" label="اسم الكتاب" placeholder="أدخل اسم الكتاب" name="book_name" validation="required|length:3" />
                    </div>
                    <div class="mt-3">
                        <FormKit prefix-icon="telephone" type="text" label="رقم التليفون" placeholder="أدخل رقم التليفون" name="phone_number" validation="required|length:10" />
                    </div>
                    <div class="mt-3">
                        <FormKit prefix-icon="email" type="email" label="البريد الالكتروني" placeholder="أدخل البريد الالكتروني" name="email" validation="required|length:10" />
                    </div>
                </div>  
            </div>
            <div class="mx-5 p-3 borderRound" style="background-color: rgba(255, 255, 255, 0.075);">
                <h1 class="secondaryColor text-3xl md:text-4xl p-5">حصيلة الطلب</h1>
                <div class="p-3 borderRound flex align-items-center" style="background-color: rgba(255, 255, 255, 0.075);">
                    <AppImage src="emad.png" :size="120" />
                    <div>
                        <p class="secondaryColor text-xl">تصحيح لغوي من قبل عماد العادلي .</p>
                        <p class="secondaryColor my-1">٣٤٥٢ كلمة</p>
                    </div>
                </div>
                <div class="p-3 borderRound my-2 flex align-items-center" style="background-color: rgba(255, 255, 255, 0.075);">
                    <AppImage src="sherif.png" :size="110" />
                    <div>
                        <p class="secondaryColor text-xl">تصميم غلاف من قبل شريف الليثي .</p>
                        <p class="secondaryColor my-1">٣٤٥٢ كلمة</p>
                    </div>
                </div>
                <div class="p-3 borderRound my-5 flex align-items-center justify-content-between" style="background-color: rgba(255, 255, 255, 0.075);">
                    <p class="secondaryColor text-2xl">الاجمالي</p>
                    <h2 class="primaryColor">24,712 ج.م</h2>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<style>
.formkit-label{
    color: var(--primary-color) !important;
    margin: 1vh !important;
    font-size: 16px;
}
.formkit-input {
    padding: 1.2rem;
    background-color: rgba(255, 255, 255, 0.075) !important;    
}
.wordsCount{
    margin: 5vh;
    margin-bottom: 0;
    width: 30rem;
    border-radius: 8px;
    background: linear-gradient(to bottom , rgba(217, 182, 141, 0.20) 0% , rgba(203, 203, 203, 0.20) 100%);
    font-size: 18px;
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
