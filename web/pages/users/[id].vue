<template>
    <div>
        <div class="mb-2">User details for <span class="capitalize font-semibold">{{ user.name.firstname }}</span></div>
        <div>
            <ul class="text-gray-500 text-sm">
                <li class="capitalize">{{ user.name.firstname }} {{ user.name.lastname }}</li>
                <li>{{ user.username }}</li>
                <li>{{ user.email }}</li>
                <li>{{ user.phone }}</li>
                <li>{{ user.address.city }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const url = 'https://fakestoreapi.com/users/' + id

    const { data: user } = await useFetch(url, { key: id})

    definePageMeta({
        layout: 'private'
    })
</script>

<style lang="scss" scoped>

</style>