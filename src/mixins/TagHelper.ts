import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TagHelper extends Vue {
    createTag() {
        let name = prompt("请输入标签名");
        if (name) {
          this.$store.commit('createTag', name);
        } else {
          alert("标签名不能为空");
        }
      }
}