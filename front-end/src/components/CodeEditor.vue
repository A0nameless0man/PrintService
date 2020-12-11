<template>
    <div class="code-editor">
        <a-input
            allow-clear
            v-bind:value="code.title"
            v-on:input="e => updateTitle(e.target.value)"
        />
        <markdown-editor
            v-bind:loading="loading"
            v-bind:title="code.title"
            v-bind:content="code.content"
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
class CodeEditor extends Vue {
    @Prop() code;
    @Prop() loading;
    logedCode = {};

    created() {
        this.logedCode = this.code;
    }

    update() {
        this.$emit("update", this.logedCode);
    }
    updateContent(content) {
        this.logedCode.content = content;
        this.update();
    }
    updateTitle(title) {
        this.logedCode.title = title;
        this.update();
    }
}

export { CodeEditor };
</script>
