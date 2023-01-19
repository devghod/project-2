<template>
    <div>
        <header class="shadow bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/" class="font-bold">NUXT</NuxtLink>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li><NuxtLink to="/users">Users</NuxtLink></li>
                <li><NuxtLink to="/about" class="btn">About</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
    useHead({
        title: 'Private Layout',
        meta: [
            { name: 'description', content: 'Private Layout' }
        ],
    })
</script>

<style scoped>
    .router-link-exact-active {
        color: darkseagreen;
    }
</style>