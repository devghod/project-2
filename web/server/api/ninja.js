export default defineEventHandler(async (event) => {

    // // handle query params
    // const { name } = getQuery(event)

    // // handle post body
    // const { age } = await readBody(event)

    // api call with private key 
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=zioQLnYcbvNqLFZdGn62lqYE2BboBVISg88fA8u0')

    return data
})