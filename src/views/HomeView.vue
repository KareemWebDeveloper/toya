<script setup lang="ts">
import {ref ,onMounted } from 'vue'
import type {Ref} from 'vue'
import { useRouter } from 'vue-router';
const { push , currentRoute } = useRouter();

const sections : any = ref([]);
const activePersonIndex = ref(0);
const currentSlide = ref(0);
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
      jobTitle : 'كاتبة و مؤلفة',
      image : 'src/images/asmaaB&W.png'
    },
    { feedback: '“من افضل دور النشر اللي اتعاملنا معاها. حرفية في المعاملة و مواعيد مظبوطة. شكراً تويا”',
      author : 'مستشار ثقافي',
      jobTitle : 'كاتب',
      image : 'src/images/placeholder1.png'
    },
]);

const slideTo = (val : any) => {
  currentSlide.value = val
}
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

const persons: Ref<Person[]> = ref([
    {
        id: 1,
        name: "شريف الليثي",
        image: "sherif.png",
        position: "مؤسس دار تويا للنشر و التوزيع",
        description: `<p class="text-center md:text-right">شريف الليثي، ناشر مصري رائد أسس دار تويا للنشر والتوزيع
                        عام 2015.
                        يتميز بمساهماته الفعّالة في مجالات الثقافة والأدب والفن، حيث قام بتنظيم العديد من المبادرات التي
                        تعزز التنوع
                        الثقافي وتعمل على نشر الفهم والتواصل في المجتمع. يعتبر الليثي شخصية مهمة في المجال النشري، حيث يسعى
                        جاهداً
                        لتعزيز قيم الفن والمعرفة في مصر وخارجها.

                    </p>
                    <p class="text-center md:text-right">
                        بفضل رؤيته الرائعة وجهوده المستمرة، ينطلق شريف الليثي لتحقيق تحول هائل في عالم النشر والصناعة
                        الثقافية. من
                        خلال إطلاق "الصنعة"، يقدم الليثي منصة استثنائية توحد جميع احتياجات الصناعة تحت سقف واحد، مما يعزز
                        التفاعل
                        والتواصل بين الأفراد والمؤسسات في هذا القطاع المتنوع. بتجميع جميع قطع النشر على هذه المنصة، يفتح
                        الليثي أفقًا
                        جديدًا من التفاعل والتعاون، مما يعزز التبادل الثقافي ويسهم في نمو الصناعة. بفضل هذه المبادرة
                        الرائدة، يمهد
                        شريف الليثي الطريق لمستقبل مشرق حيث يتم تحقيق التكامل الكامل لكل جوانب الصناعة عبر منصة "الصنعة".
                    </p>`

    },
    {
        id: 2,
        name: "عماد العادلي",
        image: "emad.png",
        position: "مستشار ثقافي",
        description: `<p class="text-center md:text-right">
            عماد العادلي، المستشار السابق لمكتبات "ألف" والحالي لمركز الهالة الثقافي، يعتبر رائدًا في عالم الأدب والثقافة. بنقده الدقيق وتفاعله مع 2300 كتاب، أثبت العادلي تميزه في التعامل مع مختلف أنواع الأدب، سواء الروائي أو القصصي أو الفلسفي أو البحثي. يبرز دوره في التواصل مع الأجيال المختلفة، من الستينيات حتى الألفية الجديدة، مما يجسد تفاعله الرائع مع التنوع الثقافي. بفضل خبرته وتفانيه، يترأس العادلي رؤية تجمع بين التراث الأدبي والتطلعات المعاصرة، مما يسهم في تطوير وتنوير المجتمع من خلال مساهمته المميزة.

                    </p>
                    <p class="text-center md:text-right">
                      بالإضافة إلى دوره الرئيسي في مجال الأدب والثقافة، يتألق عماد العادلي كمدرب ومرشد في دورة "كيف تقرأ ... وماذا تقرأ". كمُحاضِر ملهم ومُرشد ذو خبرة واسعة، يقود العادلي هذه الدورة ببراعة، حيث يشارك مشاركيه في رحلة استكشافية فريدة لعالم الكتب والأفكار. يتفاعل العادلي مع الطلاب بطريقة تشجيعية، يحثهم على فهم أعماق النصوص واستخلاص المعاني العميقة. يقدم في هذه الدورة الأدوات والمهارات الضرورية لفهم الأدب بشكل أفضل والاستفادة القصوى من قراءاتهم. إن دوره كمدرب في هذه الدورة يسهم في بناء جيل من القراء المتميزين والفهم العميق للنصوص الأدبية.
                    </p>`

    },
    {
        id: 3,
        name: "شريف سعيد",
        image: "s-sa3eed.png",
        position: "مستشار اقتصادي",
        description: `<p class="text-center md:text-right">
          شريف سعيد المستشار السابق لمكتبات "ألف" والحالي لمركز الهالة الثقافي، يعتبر رائدًا في عالم الأدب والثقافة. بنقده الدقيق وتفاعله مع 2300 كتاب، أثبت العادلي تميزه في التعامل مع مختلف أنواع الأدب، سواء الروائي أو القصصي أو الفلسفي أو البحثي. يبرز دوره في التواصل مع الأجيال المختلفة، من الستينيات حتى الألفية الجديدة، مما يجسد تفاعله الرائع مع التنوع الثقافي. بفضل خبرته وتفانيه، يترأس العادلي رؤية تجمع بين التراث الأدبي والتطلعات المعاصرة، مما يسهم في تطوير وتنوير المجتمع من خلال مساهمته المميزة.

                    </p>
                    <p class="text-center md:text-right">
                      بالإضافة إلى دوره الرئيسي في مجال الأدب والثقافة، يتألق عماد العادلي كمدرب ومرشد في دورة "كيف تقرأ ... وماذا تقرأ". كمُحاضِر ملهم ومُرشد ذو خبرة واسعة، يقود العادلي هذه الدورة ببراعة، حيث يشارك مشاركيه في رحلة استكشافية فريدة لعالم الكتب والأفكار. يتفاعل العادلي مع الطلاب بطريقة تشجيعية، يحثهم على فهم أعماق النصوص واستخلاص المعاني العميقة. يقدم في هذه الدورة الأدوات والمهارات الضرورية لفهم الأدب بشكل أفضل والاستفادة القصوى من قراءاتهم. إن دوره كمدرب في هذه الدورة يسهم في بناء جيل من القراء المتميزين والفهم العميق للنصوص الأدبية.
                    </p>`


    },
    {
        id: 4,
        name: "اسما علاء الدين",
        image: "asmaa.png",
        position: "كاتبة و طبيبة",
        description: `<p class="text-center md:text-right">الدكتورة أسماء علاء الدين، كاتبة وعالمة نفس، قد انطلقت في عالم الكتابة منذ سن مبكرة، حيث أظهرت موهبتها واهتمامها بالأدب والعلوم الاجتماعية. نالت عضوية في اتحاد كتاب مصر، ومارست الكتابة العلمية والأدبية بتفرد. تتألق الدكتورة أسماء كضيفة على العديد من البرامج الإعلامية، حيث تتحدث بشكل ملهم في مجال تخصصها في علم النفس. بالإضافة إلى ذلك، قامت بتقديم عدة برامج في نفس المجال، مساهمةً في نشر الوعي النفسي والاجتماعي.

تعمل حالياً الدكتورة أسماء علاء الدين كمعالجة نفسية في مستشفيات الشرطة، وتشغل أيضاً منصب عضو في اللجنة النفسية العليا للمجندين بمستشفى الشرطة في الرحاب. صدر لها عشر إصدارات، تنوعت بين الروايات والكتب العلمية في مجال علم النفس. من بين أعمالها المميزة روايات "شمال" و"سيناريو وحوار" و"عاشق البنفسج"، بالإضافة إلى كتاب "مالا نتوقعه" وغيرها. يعتبر كتاب "ملفات سرية من داخل العيادة النفسية" أحدث إصداراتها، حيث تقدم فيه رؤى عميقة حول تحليل النفس والمواضيع النفسية المعاصرة.
                    </p>
                   `
    },

])

const scrollUp = () => {
  window.scrollTo({
    behavior : 'smooth',
    top : 0
  })
}

const breakpoints = {
      // 700px and up
      250: {
        itemsToShow: 1.2,
        snapAlign: 'center',
      },
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
}
}

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
    <!-- Mobile Slider -->
    <div class="flex flex-column">
      <div class="mx-auto flex md:hidden justify-content-center mt-3">
        <AppImage class="logo" :size="{ width: 250 }" src="elsan3a.png"></AppImage>
      </div>
        <Carousel :autoplay="3000" :wrap-around="true" v-model="currentSlide" :circular="true" :snapAlign="'center'" :dir="'rtl'" :pauseAutoplayOnHover="true">
          <Slide v-for="person in persons" :key="person.id">
            <div class="flex justify-content-center align-items-center my-5 py-1 px-2 textColor text-lg font-bold">
              <div>
                <div class="hidden md:flex mt-3">
                  <AppImage class="logo" :size="{ width: 250 }" src="elsan3a.png"></AppImage>
                </div>
                <div class="w-full md:w-11 mx-0 md:mx-4 font-bold text-start" v-html="person.description"></div>
              </div>
              <div class="hidden md:flex text-base" style="color: black;">
                <PersonPartial :key="person.id" :size="{ width : 300 , height : 300}" :person="person" />
              </div>
            </div>
          </Slide>
        </Carousel>
        <Carousel :breakpoints="breakpoints" v-model="currentSlide" :circular="true" :snapAlign="'center'" :dir="'rtl'" :pauseAutoplayOnHover="true">
          <Slide v-for="(person , personIndex) in persons" :key="person.id">
            <div class="mx-3  my-2 cursor-pointer" @click="slideTo(personIndex); scrollUp()"
            :class="{'desaturate-image' : currentSlide != personIndex}">
            <PersonPartial :person="person" :size="{width : 200 , height : 200}"></PersonPartial>
           </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
    </div>
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

<!-- El Masna3 (  اعمل كتابك  ) -->
<div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center animation-duration-1000 animation-ease-in-out">
  <div class="p-2 md:p-5 marginRight my-5">
    <h1 class="secondaryColor text-5xl my-3 md:my-0 md:text-7xl">اعمل كتابك</h1>
    <p class="textColor text-base md:text-xl font-bold w-11 mx-auto md:mx-0 md:w-9">"اعمل كتابك" هو تطبيق مميز مصمم لمساعدة الكتّاب والمؤلفين في إيجاد المصحح اللغوي المناسب ومصمم الغلاف المحترف لكتبهم. يهدف التطبيق إلى تسهيل عملية اختيار المصحح اللغوي المناسب الذي يمكنه تحسين اللغة والنحو والإملاء للنصوص بكفاءة عالية.
      بالإضافة إلى ذلك، يُمكنك من خلال "اعمل كتابك" الوصول إلى مجموعة من المصممين المحترفين لتصميم أغلفة الكتب، حيث يمكنك اختيار والتعامل مع مصمم يساعدك في تصميم غلاف كتابك بشكل جذاب وملهم.
    </p>
    <div class="flex justify-content-center w-full md:w-9">
      <div style="z-index: 9 !important;" @click="push('/elmasna3')" class="w-15rem gredientBg text-center p-3 borderRound my-5 py-3 flex align-items-center justify-content-center cursor-pointer">
        <h2>ابدأ دلوقتي</h2>
        <span class="material-symbols-outlined mx-3 font-bold text-3xl">
          keyboard_backspace
        </span>
      </div>
    </div>
  </div>
</div>

<div id="sectionHome3" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center animation-duration-1000 animation-ease-in-out py-5 my-5">
<div class="darkBg py-5">
<div class="marginRight testominialsWidth">
  <Carousel :autoplay="3000" :wrap-around="true" :circular="true" :snapAlign="'center'" :dir="'rtl'" :pauseAutoplayOnHover="true">
    <Slide v-for="(feedback , index) in feedbacks" :key="index">
      <div class="flex flex-column justify-content-center md:flex-row">
        <div>
          <h1 class="secondaryColor text-center md:text-right text-4xl md:text-7xl p-5">و كان رأيهم عننا...</h1>
          <h1 class="textColor text-center md:text-right w-full md:w-11 px-1 md:px-5">{{ feedback.feedback }}</h1>
          <h1 class="secondaryColor text-center md:text-right my-3 px-5">{{ feedback.author }}</h1>
          <h3 class="px-5 text-center md:text-right textColor">{{ feedback.jobTitle }}</h3>
        </div>
        <img :src="feedback.image" class="maxWidth mx-auto md:mx-0" alt="">
      </div>
    </Slide>
  </Carousel>
</div>
</div>
</div>

<!-- Testimonials-Feedback Section -->
<div id="sectionHome4" v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center animation-duration-1000 animation-ease-in-out marginRight py-5 my-5">
    <div class="p-5 ">
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

<!-- Video-Viewer Section -->

<div id="sectionHome2" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center animation-duration-1000 animation-ease-in-out">
  <div class="darkBg py-5">
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

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'
import TabView from 'primevue/tabview';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import TabPanel from 'primevue/tabpanel';
// import HomeSlider from '@/components/home/HomeSlider.vue';
import AppImage from '@/components/app/AppImage.vue';
import type { Person } from '@/types/types';
import PersonPartial from '@/components/partials/PersonPartial.vue';

export default defineComponent({
    components: { YouTube ,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    },
    methods: {
        onReady() {
            this.$refs.youtube.playVideo()
        },
    },
})
</script>
<style>
.desaturate-image {
  filter: saturate(0.25);
}
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
.darkBg{
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
.testominialsWidth{
  width: 85%;
}
@media screen and (max-width : 600px) {
  .marginRight{
    margin-right: 0;
  }
  .testominialsWidth{
    width: 100%;
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
    height: 680px !important;
  }
  .homeSlider .p-carousel-items-content {
    height: 1150px !important;
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
