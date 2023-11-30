<script setup lang="ts">

</script>

<template>
    <div class="footerGredBg">
        <div class="flex flex-column md:flex-row align-items-center justify-content-center md:justify-content-between">
            <img src="../images/toyaLogo.png" class="max-w-11rem" alt="">
            <p class="textColor textCenter w-11 md:w-5">دار النشر "تويا" تعد إحدى الدور النشر البارزة في مصر والتي حظيت بشهرة واسعة بفضل تعزيزها للمحتوى الثقافي والعلمي من خلال نشر الكتب والأوراق البحثية. تمتاز دار النشر "تويا" بتقديم مجموعة متنوعة وغنية من الإصدارات التي تغطي مختلف المجالات الثقافية والعلمية.</p>
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