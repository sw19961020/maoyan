<template>
    <div>
        index
        <router-link tag="div" to="/show/showinfo" style="height: 50px;background:blue;">详细</router-link>
        <router-link tag="div" to="/show/showcity" style="height: 50px;background:red;">城市</router-link>
        <router-link tag="div" to="/show/more" style="height: 50px;background:green;">更多</router-link>
        <ul class="bom">
            <router-link tag="li" active-class="nowChoose" to="/show/index">
                <i class="iconfont icon-favorite"></i>
                <span>首页</span>
            </router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/buy">
                <i class="iconfont icon-form"></i>
                <span>订单</span>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .bom{
        background-color: #eee;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        display: flex;
        width: 100%;
        li{
            display: flex;
            flex-direction: column;
            height: 50px;
            text-align: center;
            flex: 1;
            &.nowChoose{
                color: red;
            }
            i{
                line-height: 28px;
                flex: 1;
                font-size: 18px;
            }
            span{
                line-height: 15px;
                flex: 1;
                font-size: 13px;
            }
        }
    }
</style>
