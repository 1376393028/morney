<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"></Icon>
      Money
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"></Icon>
      Labels
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"></Icon>
      Statistics
    </router-link> 
  </nav>
</template>

<script lang="ts">

export default {
  name: "",
};
</script>
<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
nav {
  display: flex;
  @extend %outerShadow;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 32px;
      height: 32px;
      color: #8a8a8a;
    }
  }
  > .item.selected {
    color: $color-heightlight;
    > .icon {
      color: $color-heightlight;
    }
  }
}
</style>