<template>
    <div class="tags">
        <ul class="current">
          <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)" :class="{selected: selectedTags.indexOf(tag) >= 0}">{{tag}}</li>
        </ul>
        <div class="new">
          <button @click="create">新增标签</button>
        </div>
      </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';
  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly dataSource: string[] | undefined;
    selectedTags: string[] = [];
    toggle(tag: string) {
      let index = this.selectedTags.indexOf(tag);
      if(index >= 0) {
        this.selectedTags.splice(index, 1);
      }else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags);
    };
    create() {
      let name = prompt('请输入标签名');
      if(name === '') {
        alert('标签名不能为空');
      } else {
        if(this.dataSource) {
          this.$emit('update:dataSource', [...this.dataSource, name]);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($bg, 50%);
        color: #fff;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid #999;
      padding: 0 4px;
    }
  }
}
</style>