<template>
    <div class="new-code">
        <code-editor
            v-bind:code="code"
            :loading="false"
            v-on:update="update"
        />
        <a-button
            type="primary"
            block
            :disabled="!CanSubmit"
            :loading="Submiting"
            v-on:click="submit"
        >
            {{ ButtonTip }}
        </a-button>
    </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Button } from "ant-design-vue";
import { CodeEditor } from "@/components/CodeEditor.vue";
import config from "@/config";
import axios from "axios";
@Component({ components: { CodeEditor, AButton: Button } })
class Newcode extends Vue {
    code = { title: "New code", content: "# Start" };
    CanSubmit = true;
    Submiting = false;
    ButtonTip = "Submit";
    update(code) {
        this.code = code;
    }
    async submit() {
        this.CanSubmit = false;
        this.Submiting = true;
        try {
            await axios.post("/code", this.code, {
                baseURL: config.host.backend
            });
            this.ButtonTip = "Submited";
        } catch (err) {
            console.log(err);
            this.CanSubmit = true;
        } finally {
            this.Submiting = false;
        }
    }
}
export default Newcode;
</script>
