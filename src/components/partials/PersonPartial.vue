<script setup lang="ts">
import type { PersonPartialProps } from '@/types/types'
import AppImage from '../app/AppImage.vue';
import Rating from 'primevue/rating';
// import AppImage from '@/components/app/AppImage.vue';
const props = defineProps<PersonPartialProps>()
const { image,
    name,
    position,
    rating , 
    pricePerJob } = props.person
</script>
 <!-- zoominleft animation-duration-1000 animation-iteration-1 -->
<template>
    <div class="person md:flex flex-column align-items-center  justify-content-center">
        <AppImage :src="props.person.image" :size="props.size" />
        <div class="py-2 w-18rem px-5 name-wrapper personHover" :class="{'gredientBg' : rating || pricePerJob}" style="background-color: #D9B58D; border-radius: 5px;">
            <h1 class="title my-1" :class="{'text-center' : pricePerJob || rating}">{{ name }}</h1>
            <div class="flex justify-content-center m-auto">
                <Rating class="m-auto" v-if="rating" readonly v-model="props.person.rating" :cancel="false" />
            </div>
            <h4 class="position">{{ position }}</h4>
            <h4 class="pricePerJob my-1 text-center primaryColor">{{ pricePerJob }}</h4>
        </div>
    </div>
</template>
<style>
.personHover{
    transition-duration: 0.2s;
}
.personHover:hover{
    background-color: #d9b68db5 !important;
    padding: 1rem 2rem !important;
}
.gredientBg{
    background: linear-gradient(to bottom , rgb(217 , 181 , 141) 0% , rgb(203 , 203 , 203) 100%) !important;
  }
.p-rating {
    direction: ltr;
}
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: black !important;
}
</style>