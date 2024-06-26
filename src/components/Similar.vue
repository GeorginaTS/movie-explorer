<template>
    <ul class=" flex flex-wrap gap-4 justify-center" v-if="content">
        <li v-for="item, idx in content.results">
            <Card :item="item"  v-if="idx < 4"/>
        </li>
    </ul>
</template>
<script>
import Card from "./Card.vue"
export default {
    name: "Similar",
    props: ["idMovie"],
    components: { Card},
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
            //console.log(this.idMovie)
            const response = await fetch(`https://api.themoviedb.org/3/movie/${this.idMovie}/similar?language=en-US&page=1`, options);
            this.content = await response.json()
            console.log('Success');
        } catch {
            console.error('Failed');
        }
    }
    
}
</script>
<style>

</style>