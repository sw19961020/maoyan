<template>
    <div>
        <van-index-bar :index-list="indexList">
            <van-index-anchor index="1">标题1</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="2">标题2</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

        </van-index-bar>
    </div>
</template>
<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell } from 'vant'
Vue.use(IndexBar).use(Cell)
Vue.use(IndexAnchor)
export default {
  data () {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>
