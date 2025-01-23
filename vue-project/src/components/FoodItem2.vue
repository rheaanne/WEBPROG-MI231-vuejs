<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'FoodItem2', // Optional: Name your component for easier debugging
    data() {
        return {
            name: 'Mangoes',
            message: 'I like Mangoes',
        };
    },
};
</script>

<style scoped>
div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightblue;
}
</style>
