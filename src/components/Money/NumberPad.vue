<template>
  <div class="numberPad">
    <div class="output">{{ output || 0 }}</div>
    <div class="buttons" @click="enterKey">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">ok</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  output = this.value.toString();
  enterKey(e: MouseEvent) {
    let target = e.target as HTMLButtonElement;
    let key = target.textContent as string;
    if(key === 'ok') { 
      this.ok();
      return;
    }
    if (key === "清空") {
      this.output = "";
      return;
    }
    let len = this.output.length;
    if (key === "删除") {
      if(this.output === "") { return; }
      this.output = this.output.slice(0, len - 1);
      return;
    }
    if (len >= 16) { return; } //最长16位
    if('0123456789'.indexOf(key) !== -1) {
      if(this.output === '' || this.output === '0') { // output为空或0时直接赋值
        this.output = key;
        return
      }
      //小数点后两位时直接返回
      if(this.output.indexOf('.') > 0 && this.output.split('.')[1].length === 2) { return; }
    }
    //如果存在'.'直接返回
    if(key === '.' && this.output.indexOf('.') > 0) { return; }
    if(key === '.' && this.output === '') { //output为空，'.'前加零
      this.output = '0' + key;
      return;
    }
    
    this.output += key;
    
  }
  ok() {
    if(this.output === '' || this.output == '0') {
      this.$message({
          message: '请输入金额',
          type: 'error',
          duration: 1500
        });
      return;  
    }
    this.$emit('update:value', parseFloat(this.output));
    this.$emit('submit');
    this.output = '0';
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  > .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    @extend %innerShadow;
  }
  > .buttons {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 64px);
    > button {
      background: transparent;
      border: none;
      &.ok {
        grid-row: span 2;
      }
      &.zero {
        grid-column: span 2;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4 * 2%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 4 * 3%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4 * 4%);
      }
      &:nth-child(14) {
        background: darken($bg, 4 * 5%);
      }
      &:nth-child(12) {
        background: darken($bg, 4 * 6%);
      }
    }
  }
}
</style>