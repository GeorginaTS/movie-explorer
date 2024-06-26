<template>
    <div class="m-4 p-4 border border-slate-500 rounded-lg">
        <div class="relative">
            <div class="w-full flex justify-center h-full items-center absolute font-bold text-7xl bg-white bg-opacity-50">{{content.original_title}}</div>
            <img :src="urlBackDrop" :alt="content.original_title">
        </div>
        <hr class="m-4">
        <div class="flex gap-4">
            <img :src="urlPoster" :alt="content.original_title">
            <div>
                <h5>{{ content.original_title }}</h5>
                <p><a :href="content.homepage" target="_blank">{{content.homepage}}</a></p>
                <p class="flex gap-2"><h5>Original language: </h5> <span> {{content.original_language}}</span></p>
                <p class="flex gap-2"><h5>Origin country: </h5> <span> {{content.origin_country}}</span></p>
                <p class="flex gap-2"><h5>Release date: </h5> <span> {{content.release_date}}</span></p>
                <p class="flex gap-2"><h5>Votes: </h5> <span> {{content.vote_average}} ({{ content.vote_count }})</span></p>
            </div>
        </div>
        <br>
        <div>{{content.overview}}</div>
        <hr class="m-4">
        <div>
            <h5>Credits</h5>
            <Credits :idMovie="content.id" v-if="content.id"/>
        </div>
        <hr class="m-4">
        <div>
            <h5>Similar Movies</h5>
            <Similar :idMovie="content.id" v-if="content.id"/>
        </div>
        <hr class="m-4">
        <div v-for="item, key in content"><span class="font-bold">{{key}}:</span> {{item}}</div>
    </div>
</template>
<script>
import Similar from "../components/Similar.vue"
import Credits from "../components/Credits.vue"
export default {
    name: "Detail",
    components: {Similar, Credits},
    data() {
        return {
            apiKey: import.meta.env.VITE_APP_APIKEY,
            content:{}
        }
    },
    computed: {
        urlBackDrop() {
            if (this.content.backdrop_path != null) {
                return `https://image.tmdb.org/t/p/original${this.content.backdrop_path}`
            } else {
                return "image.png"
            }
        },
        urlPoster() {
            if (this.content.poster_path != null) {
                return `https://image.tmdb.org/t/p/w200${this.content.poster_path}`
            } else {
                return "image.png"
            }
        }
    },
    async created() {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${this.apiKey}`
                    }
            };
            const response = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=en-US`, options);
            this.content = await response.json()
            console.log('Success');
        } catch {
            console.error('Failed');
        }
    },
    
}
</script>
<style>
    
</style>