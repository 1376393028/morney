<template>
    <div>
      <ul class="tabs">
        <li @click="selected(item)" :class="getClass(item)" v-for="item in dataSource" :key="item.value">{{ item.text }}</li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import { Component, Prop } from "vue-property-decorator";
  type DataSourceItem = {
    text: string
    value: string
  }
  @Component
  export default class Tabs extends Vue {
    @Prop(String) readonly value!: string;
    @Prop(String) readonly classPrefix?: string;
    @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
    getClass(item: DataSourceItem) {
      return {
        'selected': this.value === item.value,
        [this.classPrefix+'-tabs-item']: this.classPrefix
      }
    }
    selected(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .tabs {
    background: #c4c4c4;
    display: flex;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected {
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #333;
        }
      }
    }
  }
  </style>