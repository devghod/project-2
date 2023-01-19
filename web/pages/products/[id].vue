<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const url = 'https://fakestoreapi.com/products/' + id

    // fetch data
    const { data: product } = await useFetch(url, { key: id})

    if (!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    }

    definePageMeta({
        layout: 'private'
    })
</script>

<style scoped>
    img {
        max-width: 400px;
    }
</style>