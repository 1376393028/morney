<template>
  <div>
    <label class="remarks">
      <span class="name">{{fieldName}}</span>
      <input v-model="value" type="text" :placeholder="placeholder" />
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component, Watch, Prop } from "vue-property-decorator";
  @Component
  export default class Remarks extends Vue {
    value = '';
    @Prop({required: true}) readonly fieldName!: string;
    @Prop() readonly placeholder?: string;
    @Watch('value')
    onValueChanged(value: string) {
      this.$emit('update:value', value);
    }
  }
</script>

<style lang="scss" scoped>
.remarks {
  display: block;
  background: #f5f5f5;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>