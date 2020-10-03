<template>
    <div id="app">
        <div>{{ JSON.stringify(articles) }}</div>
        <a-menu v-model="currentMenu" mode="horizontal">
            <a-menu-item key="Home"
                ><router-link to="/">Home</router-link></a-menu-item
            >
            <a-menu-item key="About"
                ><router-link to="/about">About</router-link></a-menu-item
            >
            <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">
                    <a-icon type="book" />Articles
                </span>
                <a-menu-item v-for="article in articles" v-bind:key="article.id"
                    ><router-link :to="'/article/' + article.id">{{
                        article.title
                    }}</router-link></a-menu-item
                >
            </a-sub-menu>
        </a-menu>
        <div style="padding: 3px" />
        <router-view />
    </div>
</template>
<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Menu, Icon } from "ant-design-vue";
import config from "@/config";
import axios from "axios";
export default
@Component({
    components: {
        AMenu: Menu,
        AMenuItem: Menu.Item,
        ASubMenu: Menu.SubMenu,
        AIcon: Icon
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
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #00000086;
}

#nav a.router-link-exact-active {
    color: #4486e9;
}
</style>
