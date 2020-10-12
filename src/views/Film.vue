<template>
    <div id="allfilm">
        <film-tabbar></film-tabbar>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import filmTabbar from '../components/FilmTabbar'
Vue.component('filmTabbar', filmTabbar)
export default {

}
</script>

<style lang="scss" scoped>
    #allfilm{
        height: 100%;
        #content{
            height: 100%;
        }
    }
</style>
