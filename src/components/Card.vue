<template>
    <div class="w-48 border border-sky-700 p-2 h-full flex flex-col justify-between">
        <div>
            <!-- <img :src="urlImg" :alt="urlImg"> -->
            <img :src="urlBackDrop" :alt="urlBackDrop">
            <h5 class="w-42">{{ item.original_title }} </h5> 
        </div>
        <div class="w-full flex justify-center bg-slate-300"><RouterLink :to="detailLink">+ info</RouterLink></div>
    </div>
</template>
<script>
export default {
    name:"Card",
    props: ["item"],
    data() {
        return{
        }
    },
    computed: {
        detailLink () {
            return `/movie/${this.item.id}`
        },
        urlBackDrop() {
            return `https://image.tmdb.org/t/p/w200${this.item.backdrop_path}`
        }
    }
    
}
</script>
<style>

</style>