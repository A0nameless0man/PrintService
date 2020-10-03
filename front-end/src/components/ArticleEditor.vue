<template>
    <div class="article-editor">
        <a-input
            allow-clear
            v-bind:value="article.title"
            v-on:input="e => updateTitle(e.target.value)"
        />
        <markdown-editor
            v-bind:loading="loading"
            v-bind:title="article.title"
            v-bind:content="article.content"
            v-on:update="updateContent"
        />
    </div>
</template>

<script>
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import { Input } from "ant-design-vue";
import { MarkdownEditor } from "@/components/MarkdownEditor.vue";

export default
@Component({ components: { MarkdownEditor, AInput: Input } })
class ArticleEditor extends Vue {
    @Prop() article;
    @Prop() loading;
    logedArticle = {};

    created() {
        this.logedArticle = this.article;
    }

    update() {
        this.$emit("update", this.logedArticle);
    }
    updateContent(content) {
        this.logedArticle.content = content;
        this.update();
    }
    updateTitle(title) {
        this.logedArticle.title = title;
        this.update();
    }
}

export { ArticleEditor };
</script>
