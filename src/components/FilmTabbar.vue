<template>
    <div>
        <ul>
            <li>城市</li>
            <router-link to="nowplaying" tag="li" active-class="nowShow">热映</router-link>
            <router-link to="cinema" tag="li" active-class="nowShow">影院</router-link>
            <router-link to="comingsoon" tag="li" active-class="nowShow">待映</router-link>
            <router-link to="classicmovies" tag="li" active-class="nowShow">经典电影</router-link>
            <li>放大镜</li>
        </ul>
    </div>
</template>
<script>
export default {
//   data () {

//   },
//   methods: {
//     handleCity () {
//       this.$router.push('/city')
//     }
//   }
}
</script>
<style scoped lang="scss">
    div{
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
                height: 40px;
                line-height: 40px;
                &.nowShow{
                    color: red;
                }
            }
        }
    }
</style>
