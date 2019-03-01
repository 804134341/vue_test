<template>
    <div class='u-btn-wrap' :class="{'u-btn-hover':isHover}">
        <button @touchstart="touchstart" @touchend="touchend"
                class="u-btn"
                :class="{
                   'mid': size === 'mid',
                   'u-btn__primary': type === 'primary',
                   'u-btn__default': type === 'default',
                   'u-btn__success': type === 'success'
                }"
                :disabled="disabled"
        >
            <i class="iconfont" :class="icon" v-if="icon"></i>
            <slot></slot>
        </button>
    </div>
</template>

<style lang="less">
    .u-btn-wrap {
        position: relative;
        display: inline-block;
        .border-radius(4);
        .u-btn {
            .height(40);
            .line-height(40);
            .border-radius(4);
            .width(164);
            background-color: #fff;
            .flex_center;
            .iconfont {
                .margin-right(3);
            }
            &.mid {
                .width(100);
                .height(33);
                .line-height(33);
                .font-size(13);
            }
            &.u-btn__primary {
                background-color: @btnPrimary;
                color: #fff;
            }
            &.u-btn__default {
                .define(1);
                border: @a solid @btnDefault;
                color: @btnDefaultColor;
                background-color: transparent;
            }
            &.u-btn__success {
                border: 1px solid @btnBorderColor;
                color: @btnSuccessColor;
            }
        }
        &.u-btn-hover {
            &:before {
                background: rgba(0, 0, 0, .2);
                content: '';
                display: inline-block;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                .border-radius(4);
            }
        }
    }
</style>

<script>
export default {
    name: 'u-btn',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isHover: false
        };
    },
    methods: {
        touchstart() {
            if (this.disabled) return;
            this.isHover = true;
        },
        touchend() {
            if (this.disabled) return;
            this.isHover = false;
        }
    }
};
</script>
