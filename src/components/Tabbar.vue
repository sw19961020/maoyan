<template>
    <div>
        <ul>
            <router-link tag="li" active-class="nowChoose" to="/film">电影/影院</router-link>
            <li>视频</li>
            <li>小视频</li>
            <li>演出</li>
            <router-link tag="li" active-class="nowChoose" to="/center">我的</router-link>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    div{
        width: 100%;
        ul{
            display: flex;
            height: 50px;
            width: 100%;
            line-height: 50px;
            background: #eee;
            li{
                flex: 1;
                text-align: center;
                &.nowChoose{
                    color: red;
                }
            }
        }
    }
</style>
