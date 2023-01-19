<template>
    <div>
        <div class="mb-2 font-semibold">Users</div>
        
        <div v-for="u in users">
            <NuxtLink :to="`/users/${u.id}`" class="capitalize">{{ u.name.firstname }} {{ u.name.lastname }}</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'private'
    })

    const { data: users } = await useFetch('https://fakestoreapi.com/users')
    console.log(users)
</script>

<style lang="scss" scoped>

</style>