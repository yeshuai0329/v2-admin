<template>
  <div class="BaseSearchForm">
    <a-form-model v-bind="layout" labelAlign="left" @submit.stop.prevent="handleSubmit">
      <a-row :gutter="24">
        <a-col
          :span='spanNumber'
          v-for="(item, index) in labelList"
          :key="item.value"
          :style="{ display: (index+1) <= count ? 'inline-block' : 'none' }"
        >
          <a-form-model-item :label="item.label" :colon="false">
            <a-input type="password" autocomplete="off" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24" :style="{ textAlign: 'right' }">
          <a-space>
            <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
              重置
            </a-button>
            <a-button type="primary" html-type="submit"> 查询 </a-button>
            <a v-if="labelList.length > (24 / spanNumber)*2" :style="{ marginLeft: '8px', fontSize: '12px' }" @click="toggle">
              {{expand? "收起": "展开"}} <a-icon :type="expand ? 'up' : 'down'" />
            </a>
          </a-space>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'BaseSearchForm',
  props: {
    labelList: {
      type: Array,
      require: true
    },
    searchForm: {
      type: Object,
      require: true
    }
  },
  data: function () {
    return {
      layout: {
        // labelCol: { span: 8 },
        // wrapperCol: { span: 16 }
      },
      expand: false,
      count: 6,
      spanNumber: 8
    }
  },
  mounted () {
    this.onresize()
    window.addEventListener('resize', _.debounce(this.onresize, 300))
  },
  destroyed () {
    window.removeEventListener('resize', this.onresize)
  },
  methods: {
    handleSubmit () {
    },
    handleReset () {},
    toggle () {
      this.expand = !this.expand
      if (this.expand) {
        this.count = this.labelList.length
      } else {
        this.onresize()
      }
    },
    onresize () {
      const bodyWidth = document.documentElement.clientWidth || document.body.clientWidth
      if (bodyWidth <= 1400) {
        this.spanNumber = 8
        this.count = 6
      }
      if (bodyWidth >= 1400 && bodyWidth <= 1920) {
        this.spanNumber = 6
        this.count = 8
      }
      if (bodyWidth >= 1920) {
        this.spanNumber = 4
        this.count = 12
      }
    }
  }
}
</script>

<style lang='less' scoped>
.BaseSearchForm {
  min-width: 1200px;
  :deep(.ant-form-item) {
    display: flex;
  }
  :deep(.ant-form-item-label) {
    flex-shrink: 0;
    margin-right: 8px;
  }
  :deep(.ant-form-item-control-wrapper) {
    flex: 1
  }
}
</style>
