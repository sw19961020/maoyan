<template>
    <div>
        <ul>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/all">全部</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/singing">演唱会</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/opera">话剧歌剧</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/exhibition">休闲展览</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/art">戏曲艺术</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/music">音乐节</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/parenting">亲子演出</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/concert">音乐会</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/dance">舞蹈芭蕾</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/sports">体育赛事</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/showperiphery">演出周边</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/showbroadcast">演出直播</router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/showinfo/other">其他</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<style scoped lang="scss">
    div{
        width: 100%;
        ul{
            background-color: #eee;
            display: flex;
            height: 40px;
            line-height: 40px;
            width: 1000px;
            justify-content: space-around;
            overflow-x: scroll;
            li{
                text-align: center;
                &.nowChoose{
                    color: red;
                }
            }
        }
    }
</style>
