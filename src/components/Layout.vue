<template>
  <div class="layout-wrapper" :style="{height}" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
  export default class Layout extends Vue {
    @Prop(String) classPrefix?: string;
    height = `${window.innerHeight}px`;
  };
</script>

<style lang="scss" scoped>
.layout-wrapper {
  // height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  overflow: auto;
  flex-grow: 1;
}
</style>


