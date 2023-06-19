<template>
    <input class="custom_input"
           :value="modelValue"
           @input="updateInput"
    />
</template>

<script>
export default {
    name: 'custom-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
};
</script>

<style scoped>
.custom_input {
    padding: 10px;
}
</style>