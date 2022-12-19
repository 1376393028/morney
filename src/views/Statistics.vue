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
import INTERVALLIST from '@/constants/intervalList';
import TYPELIST from '@/constants/typeList';

@Component({
  components: { Layout, Tabss },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  typeList = TYPELIST;
  intervalList = INTERVALLIST;
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
::v-deep .interval-tabs-item {
  height: 48px;
}
</style>


