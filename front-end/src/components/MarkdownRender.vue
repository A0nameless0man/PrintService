<template>
    <a-card v-bind:loading="loading" v-bind:title="title">
        <div class="markdown" v-html="compiledMarkdown"></div>
    </a-card>
</template>

<script>
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import { Card } from "ant-design-vue";
import marked from "marked";

export default
@Component({ components: { ACard: Card } })
class MarkdownRender extends Vue {
    @Prop() title;
    @Prop() content;
    @Prop() loading;
    get compiledMarkdown() {
        return marked(this.content);
    }
}

export { MarkdownRender };
</script>

<style scoped>
.markdown {
    text-align: left;
}
</style>
