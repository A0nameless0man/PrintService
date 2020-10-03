<template>
    <div class="home">
        <a-avatar :src="avatarsrc"></a-avatar>
    </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import { Avatar } from "ant-design-vue";
import config from "@/config";

export default
@Component({ components: { AAvatar: Avatar } })
class Home extends Vue {
    avatarsrc = config.assets.avatar.src;
}
</script>
