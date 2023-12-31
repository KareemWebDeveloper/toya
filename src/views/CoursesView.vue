<script setup lang="ts">
import { ref, onMounted, h } from 'vue';
import { useRouter } from 'vue-router';
const { push , currentRoute } = useRouter();
import PersonPartial from '../components/partials/PersonPartial.vue';
import type { Person } from '../types/types';
import AppImage from '@/components/app/AppImage.vue';
import type { Ref } from 'vue';

type sectionTypes = 'goals' | 'hours' | 'details' | undefined
const activeSection : Ref<sectionTypes> = ref('details')

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
        <div class="flex flex-column md:flex-row align-items-center justify-content-between">
            <img src="../images/course.png" class="w-10 md:w-4 borderRound mx-3" alt="">
            <div class="p-3 mx-0 md:mx-5">
                <h2 class="secondaryColor mx-3">دورة تنموية عن ادارة المال و الاعمال</h2>
                <p class="my-3 md:my-5 textColor text-base font-bold w-12 md:w-10">ادارة المال تشكل دورا كبيرا في حياتنا. هي الوصلة الوحيدة التي تؤدي الي نجاح مشروعك و استمرار اعمالك بشكل فعال. في هذه الدورة سنتعلم كيفية ادارة المال و الموارد المتاحة و تسخيرها في خدمة هدفك الموضوع في الخطة. سيقود الدورة باقة من امهر الخبراء الماليين.</p>
            </div>
        </div>

        <h1 class="secondaryColor  text-5xl my-5 md:text-6xl p-3 my-3 font-bold">المحاضرون</h1>
        <div class="flex flex-wrap align-items-baseline justify-content-center">
            <div v-for="lecturer in lecturers" class="mx-0 md:mx-2">
                <PersonPartial :size="{ width : 280 , height : 300}" :person="lecturer" />
            </div>
        </div>
        <div class="header flex text-center flex-column md:flex-row align-items-center p-3 my-5">
          <h1 class="secondaryColor my-2 cursor-pointer sectionTitle font-bold" :class="{'text-5xl md:text-6xl' : activeSection == 'details'}"
           @click="activeSection = 'details'">ماذا ستتعلم في هذه الدورة؟</h1>
          <div class="secondaryBg w-5rem" style="height: 3px;"></div>
          <h1 class="secondaryColor my-2 cursor-pointer sectionTitle font-bold" :class="{'text-5xl md:text-6xl' : activeSection == 'goals'}"
           @click="activeSection = 'goals'">الأهداف</h1>
          <div class="secondaryBg w-5rem" style="height: 3px;"></div>
          <h1 class="secondaryColor my-2 cursor-pointer sectionTitle font-bold" :class="{'text-5xl md:text-6xl' : activeSection == 'hours'}"
           @click="activeSection = 'hours'">الساعات</h1>
        </div>

        <div v-if="activeSection == 'details'">
          <p class="my-5 px-4 textColor text-base font-bold w-12 md:w-10">إدارة المال تعد أحد أهم الجوانب في الحياة الشخصية والأعمال. فهي تلعب دوراً حاسماً في نجاح المشاريع والأعمال بشكل فعّال. يُعتبر فهم كيفية إدارة المال والموارد المتاحة وتوجيهها نحو أهداف محددة أمراً بالغ الأهمية لضمان استدامة النجاح.<br>
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
        </div>
        <p v-if="activeSection == 'goals'" class="my-5 px-4 textColor text-base font-bold w-12 md:w-10">
            <ol>
              <li class="my-2">المالي ووضع الميزانيات وصولاً إلى تحليل الاستثمارات وإدارة الديون.</li>
              <li class="my-2">
                تحليل الاستثمارات: توفير المعرفة والأدوات اللازمة لتقييم الاستثمارات المختلفة، سواء كانت في الأسهم أو العقارات أو أسواق الأوراق المالية الأخرى، مع التركيز على كيفية اتخاذ القرارات الاستثمارية الصائبة.
              </li>
              <li class="my-2">تخطيط الميزانية وإدارة الديون: تعليم الطرق الفعالة لوضع الميزانيات الشخصية أو الخاصة بالشركات، بالإضافة إلى كيفية إدارة الديون بشكل مستدام والحفاظ على استقرار مالي مستقبلي.</li>
              <li class="my-2">
إدارة المخاطر المالية: فهم كيفية التعامل مع المخاطر المالية المحتملة وتقييمها وإدارتها بشكل فعّال لتقليل المخاطر وتحقيق أهداف الاستثمار بشكل أفضل. 
              </li>
              <li class="my-2">
                تطوير مهارات اتخاذ القرارات المالية: تعزيز مهارات اتخاذ القرارات الفعّالة والصحيحة فيما يتعلق بالاستثمارات المالية والتخطيط المالي الشخصي أو الأعمال.
              </li>
            </ol>
        </p>
        <div class="w-12 md:w-8 textColor" v-if="activeSection == 'hours'">
          <div class="my-2 flex align-items-center justify-content-between">
            <p>
                "مبادئ تخطيط الميزانية وضبط النفقات: كيفية وضع ميزانية فعالة وإدارة النفقات بذكاء"
            </p>
            <h4 class="p-2 text-white px-3" style="background-color: rgba(255, 255, 255, 0.055);">12 ساعة</h4>
          </div>
          <div class="my-2 flex align-items-center justify-content-between">
            <p>
              "تقييم الاستثمارات: أساسيات اتخاذ القرارات الاستثمارية الناجحة"
            </p>
            <h4 class="p-2 text-white px-3" style="background-color: rgba(255, 255, 255, 0.055);">12 ساعة</h4>
          </div>
          <div class="my-2 flex align-items-center justify-content-between">
            <p>
              "إدارة الديون والتمويل: استراتيجيات فعّالة للتعامل مع الديون وتحقيق الاستقرار المالي"
            </p>
            <h4 class="p-2 text-white px-3" style="background-color: rgba(255, 255, 255, 0.055);">12 ساعة</h4>
          </div>
          <div class="my-2 flex align-items-center justify-content-between">
            <p>
              "التحليل المالي: كيفية قراءة التقارير المالية وتحليل الأداء المالي للشركات والأفراد"
            </p>
            <h4 class="p-2 text-white px-3" style="background-color: rgba(255, 255, 255, 0.055);">12 ساعة</h4>
          </div>
        </div>

         <!-- Order Review and Submitting -->
  <div class="p-1 md:p-3 w-full">
      <h1 class="secondaryColor text-5xl md:text-7xl p-5">اشترك الآن</h1>
        <div class="flex flex-column md:flex-row" style="align-items: stretch;">
          <div class="mx-0 md:mx-5 my-3 w-full md:w-max">
              <div class="p-5 w-full md:w-30rem borderRound" style="background-color: rgba(255, 255, 255, 0.075);">
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
          <div class="w-full md:w-max mx-0 md:mx-5 p-3 borderRound" style="background-color: rgba(255, 255, 255, 0.075);">
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
.sectionTitle{
  transition-duration: 0.2s;
}
.sectionTitle:hover{
  color: var(--primary-color);
}
.formkit-label{
    color: var(--primary-color) !important;
    margin: 1vh !important;
    font-size: 16px;
}
input{
    color: white !important;
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
المالي ووضع الميزانيات وصولاً إلى تحليل الاستثمارات وإدارة الديون.
تحليل الاستثمارات: توفير المعرفة والأدوات اللازمة لتقييم الاستثمارات المختلفة، سواء كانت في الأسهم أو العقارات أو أسواق الأوراق المالية الأخرى، مع التركيز على كيفية اتخاذ القرارات الاستثمارية الصائبة.
تخطيط الميزانية وإدارة الديون: تعليم الطرق الفعالة لوضع الميزانيات الشخصية أو الخاصة بالشركات، بالإضافة إلى كيفية إدارة الديون بشكل مستدام والحفاظ على استقرار مالي مستقبلي.
إدارة المخاطر المالية: فهم كيفية التعامل مع المخاطر المالية المحتملة وتقييمها وإدارتها بشكل فعّال لتقليل المخاطر وتحقيق أهداف الاستثمار بشكل أفضل.
تطوير مهارات اتخاذ القرارات المالية: تعزيز مهارات اتخاذ القرارات الفعّالة والصحيحة فيما يتعلق بالاستثمارات المالية والتخطيط المالي الشخصي أو الأعمال.
التوجيه والمشورة من الخبراء الماليين: تقديم فرصة للمشاركين للتواصل مع خبراء ماليين ذوي خبرة والاستفادة من معرفتهم ونصائحهم في مجال إدارة المال.