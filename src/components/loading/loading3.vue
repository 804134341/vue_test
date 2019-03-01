<style lang="less">
    @px: .27*0.02rem;
    .loader {
        .height(90);
        .width(90);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto auto;
        z-index: 100;
        background-color: rgba(0, 0, 0, .3);
        .border-radius(5);
        display: inline-block;
        .flex_center;
        .timerWrap{
            .height(120*.6);
            .width(92*.6);
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>

<template>
    <div class="loader">
        <div class="timerWrap">
            <img src="./gif/loading@3.gif" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading'
};
</script>
