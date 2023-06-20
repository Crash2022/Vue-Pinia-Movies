<template>
    <input :value="modelValue"
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
            this.$emit('update:modelValue', event.target.value);
        }
    }
};
</script>

<style scoped>
input {
    padding: 14px;
    font-size: 16px;
    border: 2px solid cornflowerblue;
    border-radius: 5px;
}

input:focus-visible {
    border: 2px solid darkorange;
    outline: none;
}
</style>