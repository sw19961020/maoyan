<template>

    <div id="allwyx">

    <van-list
             v-model="loading"
             :finished="finished"
             finished-text="没有更多了"
             @load="onLoad"
             :immediate-check='false'
             class="ul"
    >
    <div v-html="classicList" id="body">
    {{classicList}}
    </div>
    </van-list>
     </div>

</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { List, Cell } from 'vant'

Vue.use(List).use(Cell)
Vue.filter('imgFilter', function (path) {
  return path.replace('w.h', '')
})
export default {
  data () {
    return {
      classicList: null,
      list: null,
      loading: false,
      finished: false,
      offset: 10
    }
  },
  mounted () {
    axios.get('/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=20&optimus_uuid=836FEBC00A0011EB8D4303BFEF63A30F89399AC08A3A4DDB9AEE9AF4D9BA15ED&optimus_risk_level=71&optimus_code=10').then(res => {
      this.classicList = res.data
      console.log(this.classicList)
    })
  },
  methods: {
    onLoad () {
      console.log('到底了e')
      //   this.current++
      this.offset += 10
      axios.get(`/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=${this.offset}&optimus_uuid=836FEBC00A0011EB8D4303BFEF63A30F89399AC08A3A4DDB9AEE9AF4D9BA15ED&optimus_risk_level=71&optimus_code=10`).then(res => {
        this.list = [...this.classicList, ...res.data]
        this.classicList = this.list.join('')
        console.log(this.classicList)
        this.loading = false
      })
    }
  }
}

</script>
<style lang="scss">
#allwyx{

    margin-top:10px;
    margin-bottom:50px;
    margin-top:40px;
    .classic-movie{
       width:295px;
       height:94px;
       font-size:14px;
       margin:0px 0px 20px 20px;
       position:relative;
       img{
           width:66px;
           height:94px;
           margin-right:10px;
           float:left;
       }
       .title{
           width:135px;
           height:24px;
           font-size:17px;
           color:#333333;
           margin:0px 0px 4px;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
           float:left;
       }
       .english-title{
           display:none;
       }
       .actors{
           width:147px;
           height:18px;
           color:#666666;
           font-size:13px;
           margin:0px 0px 4px;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
           float:left;
       }
       .show-info{
           width:147px;
           height:18px;
           color:#666666;
           font-size:13px;
           margin:0px 0px 4px;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
           float:left;
       }
       .score{
           width:60px;
           height:18px;
           color:#999999;
           font-size:12px;
           position: absolute;
           right:0px;
           top:0px;

           .grade{
           color:#FAAF00;
           font-size:15px;
           }
       }

    }
}
</style>
