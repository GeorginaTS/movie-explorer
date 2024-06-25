<template>
    <div >
        Detail  {{ $route.params.id }}
        <div v-for="item, key in content"><span class="font-bold">{{key}}:</span> {{item}}</div>
    </div>
</template>
<script>
export default {
    name: "Detail",
    data() {
        return {
            apiKey: import.meta.env.VITE_APP_APIKEY,
            content:{}
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