<template>
    <div>
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
