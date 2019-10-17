<template>
  <label class="abz-file">
    <input type="file" @change="onFileChanged" />
    <span class="abz-file__name">{{ value ? value.name : 'Upload your photo'}}</span>
    <button @click="$emit('onUpload')">Upload!</button>
  </label>
</template>
<script>
export default {
  name: "AbzFileInput",
  data() {
    return {
      selectedFile: null
    };
  },
  props: ["value"],
  methods: {
    onFileChanged() {
      this.$emit('upload')
    },
  }
};
</script>