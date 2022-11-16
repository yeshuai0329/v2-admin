<template>
  <a-drawer
    width="300"
    title="系统设置"
    placement="right"
    :closable="false"
    :visible="visible"
  >
    <div>
      <h3>整体风格设置</h3>
    </div>
    <a-divider />
    <a-space :size="24" direction="vertical" style="width: 100%">
      <h3>主题色设置</h3>
      <a-space align="center">
        <a-tooltip v-for="item in colors" :key="item.color">
          <template slot="title"> {{item.name}} </template>
          <div
            class="theme-color-div"
            :style="{ backgroundColor: item.color }"
            @click="clickColor(item)"
          >
            <a-icon v-show="item.checkIsShow" type="check" />
            <a-icon v-show="item.loading" type="sync" spin />
          </div>
        </a-tooltip>
      </a-space>
    </a-space>
    <a-divider />
    <a-space :size="24" direction="vertical" style="width: 100%">
      <h3>内容区域</h3>
      <a-row>
        <a-col :span="16">菜单头</a-col>
        <a-col :span="8" style="text-align: right"
          ><a-switch size="small"
        /></a-col>
      </a-row>
      <a-row>
        <a-col :span="16">折叠按钮</a-col>
        <a-col :span="8" style="text-align: right"
          ><a-switch size="small"
        /></a-col>
      </a-row>
      <a-row>
        <a-col :span="16">面包屑</a-col>
        <a-col :span="8" style="text-align: right"
          ><a-switch size="small"
        /></a-col>
      </a-row>
      <a-row>
        <a-col :span="16">tab标签页</a-col>
        <a-col :span="8" style="text-align: right"
          ><a-switch size="small"
        /></a-col>
      </a-row>
    </a-space>
    <a-divider />
    <div>
      <h3>其他设置</h3>
    </div>
    <a-divider />
    <template #handle>
      <div
        id="drageToggleButton"
        class="toggleButton"
        @click="toggleButton"
        @mousedown="mouseDownHandler($event)"
      >
        <a-icon
          v-if="!visible"
          type="setting"
          @mousedown="mouseDownHandler($event)"
        />
        <a-icon v-else type="close" />
      </div>
    </template>
  </a-drawer>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'DrawerConfig',
  data () {
    return {
      visible: false,
      colors: [
        {
          name: '佛晓蓝(默认)',
          color: '#1890FF',
          checkIsShow: false,
          loading: false
        },
        { name: '薄暮', color: '#F5222D', checkIsShow: false, loading: false },
        { name: '火山', color: '#FA541C', checkIsShow: false, loading: false },
        { name: '日暮', color: '#FAAD14', checkIsShow: false, loading: false },
        { name: '明青', color: '#13C2C2', checkIsShow: false, loading: false },
        {
          name: '极光绿',
          color: '#52C41A',
          checkIsShow: false,
          loading: false
        },
        {
          name: '极客蓝',
          color: '#2F54EB',
          checkIsShow: false,
          loading: false
        },
        { name: '酱紫', color: '#722ED1', checkIsShow: false, loading: false }
      ]
    }
  },
  mounted () {
    window.less.modifyVars({
      '@primary-color': this.themeColor.color
    })
    this.colors.forEach((ite) => {
      ite.checkIsShow = false
      ite.loading = false
      if (ite.color === this.themeColor.color) {
        ite.checkIsShow = true
      }
    })
  },
  computed: {
    ...mapState('config', ['themeColor'])
  },
  methods: {
    ...mapActions('config', ['setThemeColorAction']),
    toggleButton () {
      this.visible = !this.visible
    },
    clickColor (item) {
      if (item.checkIsShow || item.loading) return
      item.loading = true
      this.colors.forEach((ite) => {
        ite.checkIsShow = false
      })
      window.less
        .modifyVars({
          '@primary-color': item.color
        })
        .then(() => {
          setTimeout(() => {
            this.$message.success(`成功切换 🎉 ${item.name} 🎉 主题!`)
            this.setThemeColorAction(item)
            item.loading = false
            item.checkIsShow = true
          }, 300)
        })
    },
    mouseDownHandler (event) {
      const dom = document.getElementById('drageToggleButton')
      const diffY = event.clientY - dom.offsetTop
      document.onmousemove = function (event) {
        dom.style.top = event.clientY - diffY + 'px'
        if (event.clientY <= 0) {
          dom.style.top = 0 + 'px'
        }
        if (event.clientY >= window.innerHeight - 48) {
          dom.style.top = window.innerHeight - 48 + 'px'
        }
      }
      document.onmouseup = function () {
        this.onmousemove = null
        this.onmouseup = null
      }
    }
  }
}
</script>

<style lang='less' scoped>
:deep(.ant-drawer-content-wrapper) {
  .toggleButton {
    position: absolute;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    font-size: 20px;
    text-align: center;
    border-radius: 4px 0 0 4px;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
    pointer-events: auto;
    top: 250px;
    left: -48px;
  }
  .theme-color-div {
    width: 16px;
    height: 16px;
    background-color: #ccc;
    border-radius: 2px;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
