<template>
  <div class="tags">
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        @click="toggle(tag)"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
      >
        {{ tag.name }}
      </li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import TagHelper from "@/mixins/TagHelper";
import Component, { mixins } from "vue-class-component";
@Component({
  mixins: [ TagHelper ]
})
export default class Tags extends mixins(TagHelper) {
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
    let tags = this.selectedTags.map(tag => tag.name);
    this.$emit("update:value", tags);
  }
  created() {
    this.$store.commit('fetchTags');
  }
  get tagList() {
    return this.$store.state.tagList;
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