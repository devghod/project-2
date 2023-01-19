<template>
    <div>
        <header class="shadow bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">NUXT</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <li><NuxtLink to="/users">Users</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Default Layout',
        meta: [
            { name: 'description', content: 'Default Layout' }
        ],
    })
</script>

<style scoped>
    .router-link-exact-active {
        color: darkseagreen;
    }
</style>