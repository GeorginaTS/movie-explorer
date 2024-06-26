<template>
    <div>
       <input type="text" v-model="searchStr">
    </div>
</template>
<script>
export default {
    name: "searchBar",
    data() {
        return {
            searchStr: "",
        }
    },
    watch: {
        searchStr(value) {
            this.$emit('searchStr', value);
        }
    }
}
</script>
<style>
    
</style>