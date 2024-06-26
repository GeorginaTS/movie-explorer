<template>
    <div class="flex gap-4">
        <div class="w-[50%]">
            <h5>Cast</h5>
            <ul class="" v-if="content">
                <li v-for="item in content.cast" class="flex gap-2">
                    <div class="w-28"><img :src="urlProfile(item.profile_path)" v-if="item.profile_path != null"></div> 
                    <div class="w-full">
                        <h5>{{ item.name }}</h5>
                        <p>{{ item.known_for_department }}</p>
                        <p>Character: {{item.character}}</p>
                        <p>Popularity: {{item.popularity}}</p>
                    </div>
                    
                </li>
            </ul>
        </div>
        <div  class="w-[50%]">
            <h5>Crew</h5>
            <ul class="" v-if="content">
                <li v-for="item, key in content.crew">
                    {{ key }} {{ item }}
                </li>
            </ul>
        </div>

    </div>
    <ul class=" flex flex-wrap gap-4 justify-center" v-if="content">
        <li v-for="item, key in content.crew">
            {{ key }} {{ item }}
        </li>
    </ul>
</template>
<script>
import Card from "./Card.vue"
export default {
    name: "Credits",
    props: ["idMovie"],
    data() {
        return {
            page: 1,
            apiKey: import.meta.env.VITE_APP_APIKEY,
            content: {},
            item: {}
        }
    },
    async mounted() {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${this.apiKey}`
                }
            };
            console.log(this.idMovie)
            const response = await fetch(`https://api.themoviedb.org/3/movie/${this.idMovie}/credits?language=en-US`, options);
            this.content = await response.json()
            console.log('Success');
        } catch {
            console.error('Failed');
        }
    },
    methods: {
        urlProfile(url) {
            if (url != null) {
                return `https://image.tmdb.org/t/p/w45${url}`
            } else {
                return "image.png"
            }
        }
    }

}
</script>
<style></style>