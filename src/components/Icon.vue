<template>
  <svg class="icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
try {
  let icons = require.context("../assets/icons", false, /\.svg$/);
  icons.keys().forEach(icons);
} catch (e) {
  console.log(e);
}
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
