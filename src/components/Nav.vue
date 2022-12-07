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
@import '~@/assets/style/color.scss';
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
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
      color: $grey;
    }
  }
  > .item.selected {
    color: $yellow;
    > .icon {
      color: $yellow;
    }
  }
}
</style>