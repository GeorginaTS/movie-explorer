<template>
    <div class="flex gap-4">
        <h3> Search movies </h3>
        <searchBar @searchStr="searchValue" />
    </div>
    <hr>
    <ul class=" flex flex-wrap gap-4 justify-center">
        <li v-for="item in content.results">
            <Card :item="item" v-if="item" />
        </li>
    </ul>
    <br>
    <div class="flex justify-between">
        <button @click="previousPage" v-if="page > 1">previous</button>
        <p>Pages: {{ page }} / {{content.total_pages}}</p>
        <button @click="nextPage" v-if="page < content.total_pages"> next</button>
    </div>
    <br>
    <hr>
    <p v-if="content">{{ content }}</p>
</template>
<script>
import Card from "../components/Card.vue"
import searchBar from "../components/searchBar.vue"
export default {
    name: "List",
    components: { Card, searchBar },
    data() {
        return {
            page: 1,
            apiKey: import.meta.env.VITE_APP_APIKEY,
            content: {},
            item: {},
            str: ""
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
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.page}`, options);
            this.content = await response.json()
            console.log('Success');
        } catch {
            console.error('Failed');
        }
    },
    methods: {
        nextPage() {
            return this.page++
        },
        previousPage() {
            return this.page > 1 ? this.page-- : this.page = 1

        },
        async searchValue(str) {
            this.str = str
            this.page = 1
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${this.apiKey}`
                    }
                };
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${this.str}&include_adult=false&language=en-US&page=${this.page}`, options);
                this.content = await response.json()
                console.log('Success');
            } catch {
                console.error('Failed');
            }
        },
    },
    watch: {
        async page(value) {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${this.apiKey}`
                    }
                };
                if (str != "") {
                    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${this.str}&include_adult=false&language=en-US&page=${this.page}`, options);
                } else {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.page}`, options);
                }
                this.content = await response.json()
                console.log('Success');
            } catch {
                console.error('Failed');
            }
        }
    }
}
</script>
<style></style>