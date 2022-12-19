<template>
  <div>
    <Layout>
      <Tabss classPrefix="type" :data-source="typeList" :value.sync="type" />
      <Tabss classPrefix="interval" :data-source="intervalList" :value.sync="interval" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Tabss from "@/components/Tabss.vue";

@Component({
  components: { Layout, Tabss },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: #fff;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>


