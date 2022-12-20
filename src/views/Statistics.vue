<template>
  <div>
    <Layout>
      <Tabss classPrefix="type" :data-source="typeList" :value.sync="type" />
      <!-- <Tabss
        classPrefix="interval"
        :data-source="intervalList"
        :value.sync="interval"
      /> -->
      <ol v-if="groupList && groupList.length > 0">
        <li v-for="group in groupList" :key="group.title">
          <h3 class="title"><span>{{ beaautify(group.title) }}</span> ￥{{ group.total }}</h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.createdATt">
              <span>{{ tagsString(item.tags) }}</span>
              <span class="remarks">{{ item.remarks }}</span>
              <span>￥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
      <div v-else class="noResult">目前没有相关记录</div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Tabss from "@/components/Tabss.vue";
// import INTERVALLIST from "@/constants/intervalList";
import TYPELIST from "@/constants/typeList";
import dayjs from 'dayjs';
import clone from "@/utils/clone";

@Component({
  components: { Layout, Tabss },
})
export default class Statistics extends Vue {
  tagsString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.map(tag => tag.name).join(',');
  }
  type = "-";
  // interval = "day";
  typeList = TYPELIST;
  // intervalList = INTERVALLIST;
  created() {
    this.$store.commit("fetchRecords");
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get groupList() {
    const { recordList } = this;
    const list = clone<RecordItem[]>(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createdATt).valueOf() - dayjs(a.createdATt).valueOf());
    if(list.length === 0) return;
    const result = [{title: dayjs(list[0].createdATt).format('YYYY-MM-DD'), total: list[0].amount, items: [list[0]]}];
    for(let i=1; i<list.length; i++) {
      let last = result[result.length-1];
      let currentDay = dayjs(list[i].createdATt);
      if(currentDay.isSame(dayjs(last.title), 'day')) {
        last.total = last.total + list[i].amount;
        last.items.push(list[i]);
      } else {
        result.push({title: currentDay.format('YYYY-MM-DD'), total: list[i].amount, items:[list[i]]});
      }
    }
    return result;
  }
  beaautify(date: string) {
    const day = dayjs(date);
    const today = dayjs();
    if(day.isSame(today, 'day')) {
      return '今天';
    } else if(day.isSame(today.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if(day.isSame(today.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if(day.isSame(today, 'year')) {
      return day.format('MM月DD日')
    } else {
      return day.format('YYYY年MM月DD日');
    }
  }
}
</script>

<style lang="scss" scoped>
.noResult {
  text-align: center;
  padding: 16px;
}
::v-deep {
  .type-tabs-item {
    background: #c4c4c4;
    &.selected {
      background: #fff;
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


