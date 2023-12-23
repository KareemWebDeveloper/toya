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
const redirectRoute : any = ref()
const lastRoute : any = ref()

const lecturers : Person[] = [
{
    id: 2,
    name: "فارس سامي",
    image: "placeholders/placeholder5.png",
    position : 'خبير تطوير الاعمال',
},
{
    id: 3,
    name: "سالم حسين",
    image: "Group%202.png",
    position : 'خبير تطوير الاعمال',

},
{
        id: 4,
        name: "سالم حسين",
        image: "Group%204.png",
        position : 'خبير تطوير الاعمال',

    },
    {
        id: 6,
        name: "سلمي محمود",
    position : 'خبير تطوير الاعمال',
        image: "Group%203.png",
    },
]
onMounted(() => {
  window.scrollTo({
    top : 0,
    behavior : 'smooth'
  })  
})


</script>

<template>
<div class="marginRight py-5" style="min-height: 80vh;">
    <section class="p-3 w-full">
        <h1 class="secondaryColor text-5xl my-5 md:text-7xl">اسم الكورس هنا</h1>
        <div class="flex align-items-center justify-content-between">
            <img src="../images/course.png" class="w-4 borderRound mx-3" alt="">
            <div class="p-3 mx-5">
                <h2 class="secondaryColor mx-3">دورة تنموية عن ادارة المال و الاعمال</h2>
                <p class="my-5 textColor text-base font-bold w-10">ادارة المال تشكل دورا كبيرا في حياتنا. هي الوصلة الوحيدة التي تؤدي الي نجاح مشروعك و استمرار اعمالك بشكل فعال. في هذه الدورة سنتعلم كيفية ادارة المال و الموارد المتاحة و تسخيرها في خدمة هدفك الموضوع في الخطة. سيقود الدورة باقة من امهر الخبراء الماليين.</p>
            </div>
        </div>

        <h1 class="secondaryColor  text-5xl my-5 md:text-6xl p-3 my-3 font-bold">المحاضرون</h1>
        <div class="flex flex-wrap align-items-baseline justify-content-center">
            <div v-for="lecturer in lecturers" class="mx-2">
                <PersonPartial :size="{ width : 280 , height : 300}" :person="lecturer" />
            </div>
        </div>
        <h1 class="secondaryColor text-5xl my-5 md:text-5xl p-3 my-3 font-bold">ماذا ستتعلم في هذه الدورة؟</h1>
        <p class="my-5 px-4 textColor text-base font-bold w-10">إدارة المال تعد أحد أهم الجوانب في الحياة الشخصية والأعمال. فهي تلعب دوراً حاسماً في نجاح المشاريع والأعمال بشكل فعّال. يُعتبر فهم كيفية إدارة المال والموارد المتاحة وتوجيهها نحو أهداف محددة أمراً بالغ الأهمية لضمان استدامة النجاح.<br>
            <br>
            تأتي الدورات المتخصصة في إدارة المال لتعليم الأساليب والاستراتيجيات التي يمكن للأفراد والشركات اتباعها لتحقيق أهدافهم المالية بشكل فعال ومستدام. تشمل هذه الدورات مجموعة واسعة من المواضيع، بدءاً من مبادئ الإدارة المالية الأساسية، وصولاً إلى تقنيات تحليل الاستثمارات وتخطيط الميزانية وإدارة الديون.
            <br>
            <br>
            يتميز مضمون الدورات بتوفير معرفة عميقة حول كيفية تقييم الاحتياجات المالية، وتحديد الأولويات، وتحديد مصادر التمويل المناسبة. كما تعطي الأدوات والمهارات الضرورية لتقييم الاستثمارات وإدارة المخاطر المالية بكفاءة.
            <br>
            <br>
            بفضل توجيه الخبراء الماليين ذوي الخبرة الذين يقودون هذه الدورات، يمكن للمشاركين الاستفادة من تجاربهم وتوجيهاتهم القيمة التي تساعدهم على فهم السوق المالية واتخاذ القرارات المالية الصائبة.
            <br>
            
            في النهاية، تلعب إدارة المال دوراً حاسماً في تحقيق النجاح والاستمرارية في الأعمال والحياة الشخصية، إذ تمثل الوسيلة الرئيسية لتحقيق الأهداف وتحقيق الاستقرار المالي.
        </p>

         <!-- Order Review and Submitting -->
  <div class="p-3 w-full">
      <h1 class="secondaryColor text-5xl md:text-7xl p-5">اشترك الآن</h1>
        <div class="flex" style="align-items: stretch;">
          <div class="mx-5">
              <div class="p-5 w-30rem borderRound" style="background-color: rgba(255, 255, 255, 0.075);">
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
                  <img src="../images/course.png" class="mx-2" style="width : 120px;" alt="">
                  <div>
                      <p class="secondaryColor text-xl">تصحيح لغوي من قبل عماد العادلي .</p>
                      <p class="secondaryColor my-1">٣٤٥٢ كلمة</p>
                  </div>
              </div>
              <div class="p-3 borderRound my-5 flex align-items-center justify-content-between" style="background-color: rgba(255, 255, 255, 0.075);">
                  <p class="secondaryColor text-2xl">الاجمالي</p>
                  <h2 class="primaryColor">24,712 ج.م</h2>
              </div>
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
    padding: 2rem;
    background: none;
    font-size: 18px;
    color: white;
    border: none !important;
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
