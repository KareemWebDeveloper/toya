<script setup lang="ts">

</script>

<template>
    <div class="footerGredBg">
        <div class="flex flex-column md:flex-row align-items-center justify-content-center md:justify-content-between">
            <img src="../images/toyaLogo.png" class="max-w-11rem" alt="">
            <p class="textColor textCenter w-11 md:w-5">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ 
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" </p>
        </div>
        <p class="font-bold text-center textColor">developed by <span style="color: #C94B63;">Esolve</span>. a melon company</p>
    </div>
</template>
<style>
.footerGredBg{
    padding: 3rem 9rem 1rem;
    z-index: 999;
    background: linear-gradient( to left , rgba(19 , 24 , 28) 0% , rgba(37 , 42 , 49) 100%);
}
@media screen and (max-width : 600px){
    .footerGredBg{
        padding: 2vh 0;
    }  
    .textCenter{
        text-align: center;
    }
}
</style>