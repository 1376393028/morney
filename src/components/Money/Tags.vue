<template>
  <div class="tags">
    <ul class="current">
      <li
        v-for="tag in tags"
        :key="tag.id"
        @click="toggle(tag)"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
      >
        {{ tag.name }}
      </li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component({
  computed: {
    tags() {
      return [];
    }
  }
})
export default class Tags extends Vue {
  selectedTags: Tag[] = [];
  toggle(tag: Tag) {
    let index = -1;
    this.selectedTags.forEach((item, ind) => {
      if (item.id === tag.id) {
        index = ind;
      }
    });
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
  create() {
    let name = prompt("请输入标签名");
    if (name) {
      // store.createTag(name);
    } else {
      alert("标签名不能为空");
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
  background: #fff;
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