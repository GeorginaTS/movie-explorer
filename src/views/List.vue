<template>
    <h3>   List movies   </h3>
    <ul class=" flex flex-wrap gap-4 justify-center">
        <li v-for="item in content.results"><Card :item="item" v-if="item"/></li>
    </ul>
    <p v-if="content">{{ content.results }}</p>
</template>
<script>
import Card from "../components/Card.vue"
export default {
    name: "List",
    components: {Card},
    data() {
        return {
            content: {},
            item:{},
        }
    },
    async mounted() {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjMwOTRkMDM4MGE1NDIyMzRhNWI5OTFkMDA1NGUzNyIsIm5iZiI6MTcxOTMyNzczNy4yNDQ4NjEsInN1YiI6IjY2N2FiZDJkNjhmYmI2ZmQ4MTkwNmZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6T1zsd4POABN_B10UAiD-wotE4mv3W0ttVGL6cfwwA'
                }
            };
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options);
            this.content = await response.json()
            console.log('Success');
        } catch {
            console.error('Failed');
        }
    }
}
</script>
<style></style>