<script setup lang="ts">
import {ref ,onMounted } from 'vue'
import { useRouter } from 'vue-router';
const { push , currentRoute } = useRouter();

const sections : any = ref([]);
let observer : any = null;
let activeSectionId = '';
const tabs = ref([
    { title: 'نبذة عنا', content: `الصنعة هي مبادرة تعليمية تهدف إلى تدريب وتطوير مهارات الحرفيين في مختلف المجالات والصناعات اليدوية. تتميز هذه الورشة بمشاركة عدد كبير من الخبراء والمحترفين المتميزين في مجالات متنوعة، مما يسهم في تقديم تجارب وخبرات متنوعة وقيمة للمشاركين.  يتم تنظيم ورشة الصنعة بشكل دوري أو عند الطلب، وتشمل مجموعة واسعة من المواضيع مثل النجارة، والخياطة، والفنون التقليدية، والحرف اليدوية المتنوعة مثل الخزف، النحت، النسيج، والأعمال الحرفية الأخرى. باختصار، تُعد "الصنعة" بيئة تعليمية مثالية لتنمية وتطوير مهارات الحرفيين وصقل مواهبهم من خلال تجارب عملية وتوجيهات خبراء متميزين في مجالاتهم.` },
    { title: 'الرؤية', content: 'هدف الورشة هو تمكين المشاركين من اكتساب المهارات اللازمة للعمل الحرفي، سواء لأغراض هواية شخصية أو لغايات مهنية. يتم تقديم المحتوى التعليمي بشكل عملي وتطبيقي، مما يسمح للمشاركين بالتعلم من خلال القيام بالأنشطة العملية والتدريب العملي تحت إشراف الخبراء.تساهم ورشة الصنعة في تعزيز المهارات اليدوية التقليدية والحفاظ على التراث الحرفي، بالإضافة إلى تشجيع الإبداع والابتكار في هذه الصناعات. كما تمثل فرصة للتواصل والتفاعل بين المشاركين والخبراء، مما يسهم في بناء شبكة اتصالات مهنية تعزز التعلم المستمر وتبادل الخبرات.' },
    { title: 'المهمة', content:  'رسالتنا في "الصنعة" هي تمكين وتطوير المهارات الحرفية من خلال تقديم بيئة تعليمية مميزة، تجمع بين التقنيات التقليدية والابتكار الحديث. نسعى لتوفير فرص للحرفيين لاكتساب المعرفة والتدريب العملي من خلال ورش عمل متخصصة بإشراف خبراء متميزين في مجالاتهم. نؤمن بأهمية الحفاظ على التراث الحرفي والتطور المستمر في عالم الصناعات اليدوية. من خلال دعم التعلم المستمر والابتكار، نهدف إلى تمكين الحرفيين وتعزيز إبداعهم ومهاراتهم الفنية. نسعى جاهدين لتقديم تجارب تعليمية غنية ومتنوعة تسهم في تطوير قدراتهم وتوجيههم نحو التميز والاحترافية في مجالاتهم المختلفة.مهمتنا هي تقديم بيئة ملهمة وداعمة تمكن الحرفيين من اكتشاف إمكانياتهم الكامنة وتحويلها إلى أعمال فنية مبدعة ومنتجات تعكس جودة الحرفة والإبداع. إننا نعمل جاهدين على توفير الدعم والتوجيه لكل فرد يشارك معنا، مما يساعدهم على تحقيق أهدافهم ورسم مسار ناجح في مجال الحرف اليدوية والصناعات التقليدية."الصنعة" هي مساحة مخصصة للاستكشاف والتعلم المستمر، حيث نتطلع إلى تعزيز التواصل والتبادل الثقافي بين الحرفيين والخبراء، مما يسهم في إثراء المعرفة وتعزيز التقاليد الحرفية لدى الأجيال الحالية والمستقبلية.'},
    { title: 'القيم', content:  '"الصنعة" تعتز وتؤمن بمجموعة من القيم التي تمثّل أساس رسالتنا. نحن نعزز التميز والجودة العالية في الحرف اليدوية، مع التركيز على الابتكار والتطوير المستمر. نحن ملتزمون بالتعلم المستمر والتنوع، حيث نرحّب بكافة الأفكار والثقافات لإثراء تجاربنا وتعزيز الحوار والتفاعل الإيجابي. الإبداع والتفرد يشكّلان جزءاً أساسياً في عملنا، حيث نشجع على الابتكار والتجديد في الصناعات اليدوية. نحن نضع الجودة في صميم عملنا، ونسعى دائمًا لتحقيق أعلى معايير الجودة في الإنتاج الحرفي. الاحترام والتعاون يعتبران قيمتين أساسيتين، حيث نؤمن بأهمية الاحترام المتبادل وروح التعاون في بناء مجتمع حرفي قوي ومترابط. هذه القيم توجّه عملنا وتشكّل ركيزة أساسية في توفير بيئة تعليمية تشجع على النمو والابتكار لكل من يشارك معنا.' }
]);

const feedbacks = ref([
    { feedback: '“من افضل دور النشر اللي اتعاملنا معاها. حرفية في المعاملة و مواعيد مظبوطة. شكراً تويا”',
      author : 'سلمي طارق',
      jobTitile : 'كاتبة و مؤلفة',
      image : 'src/images/asmaaB&W.png'
    },
    { feedback: '“من افضل دور النشر اللي اتعاملنا معاها. حرفية في المعاملة و مواعيد مظبوطة. شكراً تويا”',
      author : 'مستشار ثقافي',
      jobTitile : 'كاتب',
      image : 'src/images/placeholder1.png'
    },
]);

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold as needed
  };

  observer = new IntersectionObserver(handleIntersection, options);

  sections.value = document.querySelectorAll('div[id^="section"]');

  sections.value.forEach((section : any) => {
    observer.observe(section);
  });
});


const handleIntersection = (entries : any) => {
  entries.forEach((entry : any) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      if (sectionId !== activeSectionId) {
        // Push the hash to the URL using Vue Router
        push({ hash : `#${sectionId}` });
        activeSectionId = sectionId;
      }
    }
  });
};

</script>

<template>
<div class="marginRight py-5 max-w-screen">
  
  <!-- el san3a main -->
  <div id="section1" class="p-3 flex flex-column md:flex-row justify-content-center">
    <section class="hidden md:flex slider">
      <HomeSlider />
    </section>
  </div>

  <!-- el san3a main end -->

  <!-- Home -->
  <div id="sectionHome1" class="flex justify-content-center align-items-center animation-duration-1000 animation-ease-in-out">
    <div class="flex flex-column md:flex-row my-5 align-items-center">
          <div class="mx-auto md:mx-5 w-10 md:w-8 my-5">
              <TabView>
                      <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                          <p style="font-weight: bolder;" class="m-0 text-base md:text-xl">{{ tab.content }}</p>
                      </TabPanel>
              </TabView>
          </div>
          <div class="flex scroll-container mx-auto md:mx-5 md:flex-column" style="max-width: 90vw;">
            <img src="../images/homePage1.png" class="max-w-14rem mx-3 md:mx-1 my-3" alt="">
            <img src="../images/homePage2.png" class="max-w-14rem mx-3 md:mx-1 my-3" alt="">
          </div>
    </div>
  </div>
</div>

<!-- Video-Viewer Section -->

<div id="sectionHome2" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center animation-duration-1000 animation-ease-in-out">
  <div class="videoViewerBg py-5">
    <h1 class="secondaryColor text-7xl text-center">اعرف تويا</h1>
    <p class="text-center primaryColor">دار النشر "تويا" تعد إحدى الدور النشر البارزة في مصر</p>
    <div class="flex w-10 justify-content-center my-5 m-auto" style="max-width: 300px !important;">
      <YouTube
      src="https://www.youtube.com/watch?v=9MD4lRBusQw" 
      @ready="onReady" ref="youtube" />
    </div>
    <p class="w-10 md:w-8 text-center m-auto textColor font-bold">دار النشر "تويا" تعد إحدى الدور النشر البارزة في مصر والتي حظيت بشهرة واسعة بفضل تعزيزها للمحتوى الثقافي والعلمي من خلال نشر الكتب والأوراق البحثية. تمتاز دار النشر "تويا" بتقديم مجموعة متنوعة وغنية من الإصدارات التي تغطي مختلف المجالات الثقافية والعلمية.
      تمثلت أهمية دار النشر "تويا" في دورها الكبير في إثراء المكتبات والمجتمع القرائي المصري والعربي عمومًا، من خلال نشر الكتب التي تتنوع بين الأدب الكلاسيكي والحديث، والكتب العلمية والفلسفية، والأبحاث الأكاديمية.</p>
  </div>
</div>

<!-- El Masna3 (  اعمل كتابك  ) -->
<div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center animation-duration-1000 animation-ease-in-out">
  <div class="p-2 md:p-5 marginRight my-5">
    <h1 class="secondaryColor text-5xl my-3 md:my-0 md:text-7xl">اعمل كتابك</h1>
    <p class="textColor text-base md:text-xl font-bold w-11 mx-auto md:mx-0 md:w-9">"اعمل كتابك" هو تطبيق مميز مصمم لمساعدة الكتّاب والمؤلفين في إيجاد المصحح اللغوي المناسب ومصمم الغلاف المحترف لكتبهم. يهدف التطبيق إلى تسهيل عملية اختيار المصحح اللغوي المناسب الذي يمكنه تحسين اللغة والنحو والإملاء للنصوص بكفاءة عالية.
      بالإضافة إلى ذلك، يُمكنك من خلال "اعمل كتابك" الوصول إلى مجموعة من المصممين المحترفين لتصميم أغلفة الكتب، حيث يمكنك اختيار والتعامل مع مصمم يساعدك في تصميم غلاف كتابك بشكل جذاب وملهم.
    </p>
    <div class="flex justify-content-center w-9">
      <div style="z-index: 9 !important;" @click="push('/elmasna3')" class="w-15rem gredientBg text-center p-3 borderRound my-5 py-3 flex align-items-center justify-content-center cursor-pointer">
        <h2>ابدأ دلوقتي</h2>
        <span class="material-symbols-outlined mx-3 font-bold text-3xl">
          keyboard_backspace
        </span>
      </div>
    </div>
  </div>
</div>

<div id="sectionHome3" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center animation-duration-1000 animation-ease-in-out marginRight py-5 my-5">
<div style="width: 85%;" class="m-auto">
  <Carousel :value="feedbacks" :numVisible="1" :numScroll="1" orientation="vertical" circular :autoplayInterval="3000" verticalViewPortHeight="500px" contentClass="flex align-items-center">
    <template #item="slotProps">
      <div class="flex flex-column justify-content-center md:flex-row">
        <div>
          <h1 class="secondaryColor text-5xl md:text-7xl p-5">و كان رأيهم عننا...</h1>
          <h1 class="textColor w-full md:w-11 px-1 md:px-5">{{ slotProps.data.feedback }}</h1>
          <h1 class="secondaryColor my-3 px-5">{{ slotProps.data.author }}</h1>
          <h3 class="px-5 textColor">{{ slotProps.data.jobTitle }}</h3>
        </div>
        <img :src="slotProps.data.image" class="maxWidth" alt="">
      </div>
    </template>
  </Carousel>
</div>
</div>

<!-- Testimonials-Feedback Section -->
<div id="sectionHome4" v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center animation-duration-1000 animation-ease-in-out marginRight py-5 my-5">
    <div class="p-5">
      <h1 class="primaryColor text-5xl my-3 md:my-0 md:text-7xl">شاركونا نجاحنا</h1>
      <p class="textColor textCenter w-12 md:w-10">هتتبنى دار النشر "تويا" استراتيجية نشر تتميز بالجودة والتنوع، حيث
         تسعى لاختيار المواضيع المتميزة والمؤلفين المبدعين والمتخصصين في مجالاتهم. بالإضافة 
        إلى ذلك، تساهم في دعم الأبحاث العلمية والمقالات ذات الصلة بالمجتمع الأكاديمي والعلمي.<br>
        من خلال الكتب التي نشرتها والأوراق البحثية التي دعمتها، استطاعت دار النشر "تويا" أن تلعب دورًا
         هامًا في نشر المعرفة والثقافة والتحفيز على القراءة والتفكير النقدي في مصر. تجدر الإشارة إلى أن الدور 
        الإعلامي الكبير الذي حققته دار النشر "تويا" يعكس تأثيرها وأهميتها في الساحة الثقافية والعلمية في مصر.
      </p>
      <div class="flex flex-wrap justify-content-center my-5 align-items-center">
        <img src="../images/VirginLogo.png" class="max-w-8rem my-3 md:max-w-12rem mx-2 md:mx-5" alt="">
          <img src="../images/booksClub.png" class="max-w-6rem my-3 md:max-w-12rem mx-2 md:mx-5" alt="">
          <img src="../images/hayden-booksLogo.png" class="max-w-5rem my-3 md:max-w-7rem mx-2 md:mx-5" alt="">
          <img src="../images/warner-booksLogo.png" class="max-w-7rem my-3 md:max-w-12rem mx-2 md:mx-5" alt="">
      </div>
    </div>
</div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import HomeSlider from '@/components/home/HomeSlider.vue';
import AppImage from '@/components/app/AppImage.vue';
import Carousel from 'primevue/carousel';

export default defineComponent({
    components: { YouTube },
    methods: {
        onReady() {
            this.$refs.youtube.playVideo()
        },
    },
})
</script>
<style>
.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: var(--primary-color) !important;
}
.p-tabview .p-tabview-panels {
  background: none !important;
}
.p-tabview .p-tabview-nav {
  background: none !important;
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  background: none !important;
  border-color: var(--primary-color) !important;
  color: var(--primary-color) !important;
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.2rem var(--secondary-color) !important;
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link {
  background: none !important;
}
.videoViewerBg{
  background-color: rgb(16,18,20);
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
.p-carousel-items-content {
  height: 500px !important;
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
  .p-carousel-items-content {
    height: 820px !important;
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


<!-- <div class="w-full md:w-12 zoominright animation-duration-1000 animation-iteration-1">
      <img src="../images/elsan3a.png" class="max-w-12rem md:max-w-16rem flex mx-auto md:mx-0 my-5 md:my-0" alt="">
      <h2 class="secondaryColor"><span class="textColor">من</span> المتحدثين بالورشة</h2>
      <div class="flex my-3">
        <div class="flex align-items-center">
          <span class="material-symbols-outlined textColor text-3xl">
            calendar_month
          </span>
          <h4 class="textColor mx-2">١٩ نوفمبر ٢٠٢٣</h4>
        </div>
        <div class="flex align-items-center mx-2">
          <span class="material-symbols-outlined mx-2 textColor text-3xl">
            timer
          </span>
          <h4 class="textColor">٩ صباحاً</h4>
        </div>
      </div>
      <p class="textColor w-full font-bold">تهدف الورشة لاستخراج المواهب المدفونة من قبل 
        متخصصين و خبراء للمساهمة في تقدم الحرف في البلاد و اتاحة فرص اكثر للشباب. 
        تحتوي الصنعة علي عدة فقرات مفيدة و تتبع منهج علمي في الانتقاء و التوجيه. 
        شارك معنا باقة من امهر الخبراء و الحرفيين لتتكون الصورة الكاملة للصنعة...
        </p>
        <h2 class="w-5 my-3 cursor-pointer gredientBg text-center p-3 borderRound">سجل الآن</h2>
    </div>
    <div class="hidden md:flex flex-column align-items-center w-10 justify-content-center zoominleft animation-duration-1000 animation-iteration-1">
      <img src="../images/asmaa.png" class="w-9 mx-5" alt="">
      <div class="py-2 px-5 borderRound w-8" style="background-color: #D9B58D;">
        <h1 class="">أسماء الراشدي</h1>
        <h4 class="">مسئولة الشباب</h4>
      </div>
    </div> -->


      <!-- <div class="zoomin animation-duration-1000 animation-iteration-1" style="margin-bottom: 10vh;">
    <h2 class="textColor p-3">باقي المتحدثين</h2>
    <div class="flex scroll-container flex-nowrap md:flex-wrap w-full m-auto justifyCenter">
      <img src="../images/asmaa.png" class="flex md:hidden max-w-30rem max-h-17rem" alt="">
      <img src="../images/Group 4.png" class="max-w-20rem max-h-17rem" alt="">
      <img src="../images/Group 1.png" class="max-w-20rem max-h-17rem" alt="">
      <img src="../images/Group 2.png" class="max-w-20rem max-h-17rem" alt="">
      <img src="../images/Group 3.png" class="max-w-20rem max-h-17rem" style="margin: 0 4rem;" alt="">
    </div>
    <div class="flex flex-column text-center md:hidden py-2 px-5 borderRound" style="background-color: #D9B58D;">
      <h1 class="">أسماء الراشدي</h1>
      <h4 class="">مسئولة الشباب</h4>
    </div>
  </div> -->

              <!-- <img src="../images/elsan3a.png" class="my-5 flex mx-auto md:mx-0 max-w-16rem" alt="">
            <h1 class="secondaryColor">نبذة عنا</h1>
            <div class="borderRound mb-2 mt-1 secondaryBg" style="height: 0.5rem;"></div>
            <div class="flex align-items-center">
              <div class="hidden md:flex flex-column">
                <h2 class="my-5 inactiveColor cursor-pointer">الرؤية</h2>
                <h2 class="my-5 inactiveColor cursor-pointer">المهمة</h2>
                <h2 class="my-5 inactiveColor cursor-pointer">القيم</h2>
              </div>
              <h3 class="font-bold textColor my-3 mx-2 md:mx-5">
                الصنعة هي مبادرة تعليمية تهدف إلى تدريب وتطوير مهارات الحرفيين في مختلف المجالات والصناعات اليدوية. تتميز هذه الورشة بمشاركة عدد كبير من الخبراء والمحترفين المتميزين في مجالات متنوعة، مما يسهم في تقديم تجارب وخبرات متنوعة وقيمة للمشاركين.
                يتم تنظيم ورشة الصنعة بشكل دوري أو عند الطلب، وتشمل مجموعة واسعة من المواضيع مثل النجارة، والخياطة، والفنون التقليدية، والحرف اليدوية المتنوعة مثل الخزف، النحت، النسيج، والأعمال الحرفية الأخرى.<br><br>
                
                باختصار، تُعد "الصنعة" بيئة تعليمية مثالية لتنمية وتطوير مهارات الحرفيين وصقل مواهبهم من خلال تجارب عملية وتوجيهات خبراء متميزين في مجالاتهم.
              </h3>
            </div> -->