<template src="./template.html"></template>

<style lang="less">
    @import "style";
</style>

<script>
export default {
    name: 'u-select',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        list: {
            type: Array,
            default() {
                return [
                    {label: 'a', value: '1'},
                    {label: 'b', value: '2'},
                    {label: 'c', value: '3'},
                    {label: 'd', value: '4'}
                ];
            }
        },
        success: Function,
        error: Function
    },
    model: { // model选项来指定
        prop: 'visible',
        event: 'close'
    },
    data() {
        return {
            slots: [{
                flex: 1,
                values: this.list.map(item => item.label),
                className: 'province-item',
                textAlign: 'center'
            }],
            subVisible: false,
            value: ''
        };
    },
    watch: {
        /* 检测某一属性值的变化 */
        subVisible(newVal, oldVal) {
            if (newVal === false) {
                setTimeout(() => {
                    this.$emit('close', newVal);
                }, 300);
            }
        },
        visible(newVal, oldVal) {
            if (newVal) {
                this.subVisible = true;
            }
        }
    },
    methods: {
        getKey() {
            let key = '';
            this.list.map(item => {
                if (this.value === item.label) {
                    key = item;
                }
            });
            return key;
        },
        confirm() {
            // 确定事件
            this.subVisible = false;
            this.$emit('success', this.getKey());
        },
        cancel() {
            // 取消事件
            this.subVisible = false;
            this.$emit('error');
        },
        onValuesChange(picker, values) {
            this.value = values[0];
        }
    }
};
</script>
