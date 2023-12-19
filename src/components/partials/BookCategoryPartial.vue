<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits(['chosen']);
const activeCategory = ref()
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
})
const categoryChosen = () => {
    emits('chosen', props.category);
    if(activeCategory.value){
        activeCategory.value = ''
    }
    else{
        activeCategory.value = props.category    
    }
}
</script>
<template>
    <div @click="categoryChosen" :class="{'activeCategory' : activeCategory == props.category}" class="flex cursor-pointer hover w-15rem align-items-center text-center justify-content-center py-4 px-5 relative" style="border: 1px solid #827362; border-radius: 8px;">
        <span class="material-symbols-outlined categoryColor absolute text-3xl" style="right: 1.8vh;">
            {{ icon }}
        </span>
        <h3 class="categoryColor mx-2">{{ category }}</h3>
    </div>
</template>
<style>
.hover{
    transition-duration: 0.2s;
}
.hover:hover{
    background-color: #82736250;
}
.activeCategory{
    background-color: #82736250;
}
.categoryColor{
    color: #827362;
}
</style>