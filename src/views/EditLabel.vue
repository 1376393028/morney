<template>
    <Layout></Layout>
</template>
<script lang="ts">
    import Vue from "vue";
    import { Component } from "vue-property-decorator";
    import Layout from "@/components/Layout.vue";
    import tagListModule from "@/modules/tagListModule";
    @Component({
        components: {
            Layout
        }
    })
    export default class EditLabel extends Vue {
      created() {
        const id = this.$route.params.id;
        tagListModule.fetch();
        const tags = tagListModule.data;
        const tag = tags.filter(t => t.id === id)[0];
        if(tag) {

        }else {
            this.$router.replace('/404');
        }
      }
    }
</script>
<style lang="scss" scoped>
</style>