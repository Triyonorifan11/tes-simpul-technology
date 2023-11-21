<template>
    <div class="h-10 w-10 bg-primary rounded-full mx-[6px] flex justify-center items-center text-white font-bold">{{ initial }}</div>
</template>

<script>
export default {
    props: {
        initial: String,
    }
}
</script>