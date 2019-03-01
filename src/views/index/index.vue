<style lang="less">
    .mhr_form_wrap {
        .index__item {
            .margin-top(20);
            text-align: center;
        }
        .inputLabel{
            .height(40);
            .line-height(40);
            .padding-left(20);
        }
    }
</style>
<template>
    <div class="mhr_form_wrap">
        <div class="mhr__form__container">
            <u-input v-model="input"></u-input>
        </div>
        <span class="inputLabel">测试：{{input}}</span>
        <div class="index__item">
            <u-btn @click.native="loadingAlert" type="primary">loading 弹出</u-btn>
        </div>
        <div class="index__item">
            <u-btn @click.native="selectKey = true" type="info">下拉框 弹出</u-btn>
        </div>
        <u-select :list='selectList' @success='selectSuccess' v-model="selectKey"></u-select>
    </div>
</template>

<script>
import {uInput, Loading, uSelect, uBtn} from '@/components';

export default {
    name: '',
    components: {
        [uInput.name]: uInput,
        [uSelect.name]: uSelect,
        [uBtn.name]: uBtn
    },
    data() {
        return {
            selectList: [
                {label: '星期一', value: '1'},
                {label: '星期二', value: '2'},
                {label: '星期三', value: '3'},
                {label: '星期四', value: '4'},
                {label: '星期五', value: '5'},
                {label: '星期六', value: '6'},
                {label: '星期七', value: '7'}
            ],
            input: '',
            loading: null,
            selectKey: false
        };
    },
    created() {
        this.loading = Loading;
    },
    methods: {
        selectSuccess(value) {
            this.input = value.label;
        },
        loadingAlert() {
            //
            this.loading.open();
            setTimeout(() => {
                this.loading.close();
            }, 2000);
        }
    }
};
</script>
