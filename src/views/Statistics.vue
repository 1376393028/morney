<template>
  <div>
    <Layout>
      <Tabss classPrefix="type" :data-source="typeList" :value.sync="type" />
      <Tabss
        classPrefix="interval"
        :data-source="intervalList"
        :value.sync="interval"
      />
      <ol>
        <li v-for="(group, index) in result" :key="index">
          <h3 class="title">{{ group.title }}</h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.createdATt">
              <span>{{ tagsString(item.tags) }}</span>
              <span class="remarks">{{ item.remarks }}</span>
              <span>￥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Tabss from "@/components/Tabss.vue";
import INTERVALLIST from "@/constants/intervalList";
import TYPELIST from "@/constants/typeList";

@Component({
  components: { Layout, Tabss },
})
export default class Statistics extends Vue {
  tagsString(tags: string[]) {
    return tags.join(',') ? tags.join(',') : '无';
  }
  type = "-";
  interval = "day";
  typeList = TYPELIST;
  intervalList = INTERVALLIST;
  created() {
    this.$store.commit("fetchRecords");
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;
    const hashTable: { [key: string]: { title: string; items: RecordItem[] } } =
      {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdATt!.split("T");
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: #fff;
    &.selected {
      background: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    min-height: 48px;
  }
}

%item {
  padding: 0 16px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background: #fff;
  > .remarks {
    margin-right:auto;
    margin-left: 8px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>


