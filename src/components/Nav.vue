<template>
  <div class="nav">
    <router-link to="/money">
    <svg>
        <use xlink:href="#labels" />
    </svg>
    Money
    </router-link>
      |
      <router-link to="/labels">Labels</router-link>
      |
      <router-link to="/statistics">Statistics</router-link>
  </div>
</template>

<script lang="ts">
  import x from "@/assets/icons/labels.svg"
  console.log(x)
  export default {
    name: ''
  };
</script>
<style lang="scss" scoped>
.nav {
    border: 1px solid red;
    box-sizing: border-box;
}
</style>