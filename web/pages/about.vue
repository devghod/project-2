<template>
    <div>
        <h1>About</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error facere adipisci eius temporibus nostrum quas expedita, quasi laboriosam accusamus, natus dolorum architecto officia ea et nam consequatur, impedit sint reiciendis.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>

</style>