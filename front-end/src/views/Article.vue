<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <a-button type="primary">{{ $route.params.id }}</a-button>
    </div>
</template>

<script>
import { Prop } from "vue-property-decorator";
import Vue from "vue";
import Component from "vue-class-component";
import { Button } from "ant-design-vue";

@Component({ components: { AButton: Button } })
export default class Article extends Vue {
    article = {};
    
}
</script>
