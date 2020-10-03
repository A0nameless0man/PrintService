<template>
    <div id="app">
        <a-layout>
            <a-layout-header
                class="header"
                :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
            >
                <a-menu theme="dark" v-model="currentMenu" mode="horizontal">
                    <a-menu-item key="Home">
                        <router-link to="/">Home</router-link>
                    </a-menu-item>
                    <a-menu-item key="About">
                        <router-link to="/about">About</router-link>
                    </a-menu-item>
                    <a-sub-menu>
                        <span slot="title" class="submenu-title-wrapper">
                            <a-icon type="book" />Articles
                        </span>
                        <a-menu-item
                            v-for="article in articles"
                            v-bind:key="article.id"
                        >
                            <router-link :to="'/article/' + article.id">
                                {{ article.title }}
                            </router-link>
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-header>
            <a-layout-content :style="{ marginTop: '70px' }">
                <router-view />
            </a-layout-content>
            <a-layout-footer :style="{ textAlign: 'center' }">
                <p>
                    <a
                        href="http://www.beian.miit.gov.cn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        鄂ICP备19010434号-1
                    </a>
                </p>

                <p>
                    <a
                        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011202000257"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        苏公网安备 32011202000257号
                    </a>
                </p>
            </a-layout-footer>
        </a-layout>

        <div style="padding: 3px" />
    </div>
</template>
<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Menu, Icon, Layout } from "ant-design-vue";
import config from "@/config";
import axios from "axios";
export default
@Component({
    components: {
        AMenu: Menu,
        AMenuItem: Menu.Item,
        ASubMenu: Menu.SubMenu,
        AIcon: Icon,
        ALayout: Layout,
        ALayoutHeader: Layout.Header,
        ALayoutContent: Layout.Content,
        ALayoutFooter: Layout.Footer,
        ALayoutSider: Layout.Sider
    }
})
class App extends Vue {
    currentMenu = ["Home"];
    articles = [];
    async created() {
        this.articles = (
            await axios.get("/article/", {
                baseURL: config.host.backend
            })
        ).data;
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    display: flex;
    flex: 1 0 auto;
    text-align: center;
    color: #2c3e50;
}
html,
body {
    height: 100%;
}
</style>
