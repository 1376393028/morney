<template>
  <div class="nav">
    <router-link to="/money">Money</router-link>
      |
      <router-link to="/labels">Labels</router-link>
      |
      <router-link to="/statistics">Statistics</router-link>
  </div>
</template>

<script lang="ts">
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