
<template>
    <div class="card">
        <Galleria :value="persons" :responsiveOptions="responsiveOptions" :numVisible="4" :circular="true"  :autoPlay="true" :transitionInterval="2000"
         containerStyle="max-width: 100%">
            <template #item="slotProps">
                <div class="flex flex-column md:flex-row justify-content-between align-items-center slider-wrapper">
                    <div class="flex flex-column">
                        <AppImage class="logo" :size="{ width: 250 }" src="elsan3a.png"></AppImage>
                        <div class="slider-text-wrapper w-11 mx-2 font-bold" style="color: var(--text-color); font-size: 18px !important; " v-html="slotProps.item.description!">
                        </div>
                    </div>
                    <div class="person p-3">
                        <PersonPartial :key="slotProps.item.id" :size="{ width : 300 , height : 300}" :person="slotProps.item" />
                    </div>
                </div>
            </template>
            <template #thumbnail="slotProps">
                <div class="flex mx-2">
                    <PersonPartial :person="slotProps.item" :size="{width : 200 , height : 200}" />
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script setup lang="ts">
import type { Person } from '@/types/types';
import { ref, onMounted } from "vue";
import PersonPartial from '../partials/PersonPartial.vue';
import { PhotoService } from '@/service/PhotoService';
import Galleria from 'primevue/galleria';
import AppImage from '@/components/app/AppImage.vue';
const persons: Person[] = [
    {
        id: 1,
        name: "شريف الليثي",
        image: "sherif.png",
        position: "مؤسس دار تويا للنشر و التوزيع",
        description: `<p>شريف الليثي، ناشر مصري رائد أسس دار تويا للنشر والتوزيع
                        عام 2015.
                        يتميز بمساهماته الفعّالة في مجالات الثقافة والأدب والفن، حيث قام بتنظيم العديد من المبادرات التي
                        تعزز التنوع
                        الثقافي وتعمل على نشر الفهم والتواصل في المجتمع. يعتبر الليثي شخصية مهمة في المجال النشري، حيث يسعى
                        جاهداً
                        لتعزيز قيم الفن والمعرفة في مصر وخارجها.

                    </p>
                    <p>
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
        description: `<p>
            عماد العادلي، المستشار السابق لمكتبات "ألف" والحالي لمركز الهالة الثقافي، يعتبر رائدًا في عالم الأدب والثقافة. بنقده الدقيق وتفاعله مع 2300 كتاب، أثبت العادلي تميزه في التعامل مع مختلف أنواع الأدب، سواء الروائي أو القصصي أو الفلسفي أو البحثي. يبرز دوره في التواصل مع الأجيال المختلفة، من الستينيات حتى الألفية الجديدة، مما يجسد تفاعله الرائع مع التنوع الثقافي. بفضل خبرته وتفانيه، يترأس العادلي رؤية تجمع بين التراث الأدبي والتطلعات المعاصرة، مما يسهم في تطوير وتنوير المجتمع من خلال مساهمته المميزة.

                    </p>
                    <p>
                      بالإضافة إلى دوره الرئيسي في مجال الأدب والثقافة، يتألق عماد العادلي كمدرب ومرشد في دورة "كيف تقرأ ... وماذا تقرأ". كمُحاضِر ملهم ومُرشد ذو خبرة واسعة، يقود العادلي هذه الدورة ببراعة، حيث يشارك مشاركيه في رحلة استكشافية فريدة لعالم الكتب والأفكار. يتفاعل العادلي مع الطلاب بطريقة تشجيعية، يحثهم على فهم أعماق النصوص واستخلاص المعاني العميقة. يقدم في هذه الدورة الأدوات والمهارات الضرورية لفهم الأدب بشكل أفضل والاستفادة القصوى من قراءاتهم. إن دوره كمدرب في هذه الدورة يسهم في بناء جيل من القراء المتميزين والفهم العميق للنصوص الأدبية.
                    </p>`

    },
    {
        id: 3,
        name: "شريف سعيد",
        image: "s-sa3eed.png",
        position: "مستشار اقتصادي",
        description: `<p>
            عماد العادلي، المستشار السابق لمكتبات "ألف" والحالي لمركز الهالة الثقافي، يعتبر رائدًا في عالم الأدب والثقافة. بنقده الدقيق وتفاعله مع 2300 كتاب، أثبت العادلي تميزه في التعامل مع مختلف أنواع الأدب، سواء الروائي أو القصصي أو الفلسفي أو البحثي. يبرز دوره في التواصل مع الأجيال المختلفة، من الستينيات حتى الألفية الجديدة، مما يجسد تفاعله الرائع مع التنوع الثقافي. بفضل خبرته وتفانيه، يترأس العادلي رؤية تجمع بين التراث الأدبي والتطلعات المعاصرة، مما يسهم في تطوير وتنوير المجتمع من خلال مساهمته المميزة.

                    </p>
                    <p>
                      بالإضافة إلى دوره الرئيسي في مجال الأدب والثقافة، يتألق عماد العادلي كمدرب ومرشد في دورة "كيف تقرأ ... وماذا تقرأ". كمُحاضِر ملهم ومُرشد ذو خبرة واسعة، يقود العادلي هذه الدورة ببراعة، حيث يشارك مشاركيه في رحلة استكشافية فريدة لعالم الكتب والأفكار. يتفاعل العادلي مع الطلاب بطريقة تشجيعية، يحثهم على فهم أعماق النصوص واستخلاص المعاني العميقة. يقدم في هذه الدورة الأدوات والمهارات الضرورية لفهم الأدب بشكل أفضل والاستفادة القصوى من قراءاتهم. إن دوره كمدرب في هذه الدورة يسهم في بناء جيل من القراء المتميزين والفهم العميق للنصوص الأدبية.
                    </p>`


    },
    {
        id: 4,
        name: "اسما علاء الدين",
        image: "asmaa.png",
        position: "كاتبة و طبيبة",
        description: `<p>الدكتورة أسماء علاء الدين، كاتبة وعالمة نفس، قد انطلقت في عالم الكتابة منذ سن مبكرة، حيث أظهرت موهبتها واهتمامها بالأدب والعلوم الاجتماعية. نالت عضوية في اتحاد كتاب مصر، ومارست الكتابة العلمية والأدبية بتفرد. تتألق الدكتورة أسماء كضيفة على العديد من البرامج الإعلامية، حيث تتحدث بشكل ملهم في مجال تخصصها في علم النفس. بالإضافة إلى ذلك، قامت بتقديم عدة برامج في نفس المجال، مساهمةً في نشر الوعي النفسي والاجتماعي.

تعمل حالياً الدكتورة أسماء علاء الدين كمعالجة نفسية في مستشفيات الشرطة، وتشغل أيضاً منصب عضو في اللجنة النفسية العليا للمجندين بمستشفى الشرطة في الرحاب. صدر لها عشر إصدارات، تنوعت بين الروايات والكتب العلمية في مجال علم النفس. من بين أعمالها المميزة روايات "شمال" و"سيناريو وحوار" و"عاشق البنفسج"، بالإضافة إلى كتاب "مالا نتوقعه" وغيرها. يعتبر كتاب "ملفات سرية من داخل العيادة النفسية" أحدث إصداراتها، حيث تقدم فيه رؤى عميقة حول تحليل النفس والمواضيع النفسية المعاصرة.
                    </p>
                   `
    },

]
onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>
<style>
.p-galleria-thumbnail-item-content{
    outline: none !important;
    background: none !important;
}
.p-galleria .p-galleria-thumbnail-container {
    background: none !important;
    padding: 1rem 0.25rem;
    margin: 2vh 0 !important;
    outline: none !important;
}
.p-galleria .p-galleria-thumbnail-container {
    direction: ltr;
    outline: none !important;
    background: none !important;
}
.p-galleria-thumbnail-item p-galleria-thumbnail-item-active{
    outline: none !important;
    border: none !important;
    background: none !important;
}
[data-pc-section="thumbnailitem"] {
    outline: none !important;
    border: none;
}
.p-galleria-thumbnail-items {
    align-items: baseline !important;
    outline: none !important;
    background: none !important;
}

</style>