<template>
  <div class="NoticeCenter">
    <a-popover
      placement="bottomLeft"
      trigger="click"
      :getPopupContainer="(triggerNode) => triggerNode.parentNode"
    >
      <template slot="content">
        <a-tabs
          default-active-key="1"
          :activeKey="activeKey"
          @change="changeTabsKey"
          class="NoticeCenter-tabs"
        >
          <a-tab-pane key="1" :tab="`通知(4)`">
            <template v-if="NoticeList.length">
              <template v-for="(item, index) in NoticeList">
                <NoticeItem :mode="item" :key="index" />
              </template>
            </template>

            <template v-else>
              <a-empty />
            </template>
          </a-tab-pane>
          <a-tab-pane key="2" :tab="`消息(4)`">
            <template v-if="NoticeList.length">
              <template v-for="(item, index) in NoticeList">
                <NoticeItem :mode="item" :key="index" />
              </template>
            </template>

            <template v-else>
              <a-empty />
            </template>
          </a-tab-pane>
          <a-tab-pane key="3" :tab="`代办(4)`">
            <template v-if="false">
              <template v-for="(item, index) in NoticeList">
                <NoticeItem :mode="item" :key="index" />
              </template>
            </template>

            <template v-else>
              <a-empty />
            </template>
          </a-tab-pane>
        </a-tabs>
        <div class="NoticeCenter-footer">
          <span @click="emptyAll"
            ><a-button type="link"
              >清空 {{ noticeTypeMap[activeKey] }}</a-button
            ></span
          >
          <span @click="lookMore"
            ><a-button type="link">查看更多</a-button></span
          >
        </div>
      </template>

      <a-badge :count="889" class="NoticeCenter-Badge">
        <a-icon type="bell" />
      </a-badge>
    </a-popover>
  </div>
</template>

<script>
import NoticeItem from './components/NoticeItem'
export default {
  name: 'NoticeCenter',
  components: {
    NoticeItem
  },
  data: function () {
    return {
      noticeTypeMap: {
        1: '通知',
        2: '消息',
        3: '代办'
      },
      activeKey: '1',
      NoticeList: [
        {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '啊大大阿达是的实打实大所萨达萨达钉钉打卡极乐空间山卡拉大科技阿斯利康到家了',
          time: '2022年11月04日20:12:18'
        },
        {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: '啊大大阿达是的实打实大所萨达',
          time: '2022年11月04日20:12:18'
        },
        {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '啊大大阿达是的实打实大所萨达',
          time: '2022年11月04日20:12:18'
        },
        {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
          title: '啊大大阿达是的实打实大所萨达',
          time: '2022年11月04日20:12:18'
        },
        {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '啊大大阿达是的实打实大所萨达',
          time: '2022年11月04日20:12:18'
        },
        {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '啊大大阿达是的实打实大所萨达',
          time: '2022年11月04日20:12:18'
        },
        {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '啊大大阿达是的实打实大所萨达',
          time: '2022年11月04日20:12:18'
        }
      ]
    }
  },
  methods: {
    changeTabsKey (activeKey) {
      this.activeKey = activeKey
    },
    emptyAll () {},
    lookMore () {}
  }
}
</script>

<style lang='less' scoped>
.NoticeCenter {
  width: 32px;
  height: 64px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  :deep(.ant-popover-inner-content) {
    padding: 0px;
  }
  &-tabs {
    width: 350px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    :deep(.ant-tabs-bar) {
      margin: 0;
    }
    :deep(.ant-tabs-tabpane) {
      height: 400px;
      padding: 10px 0px;
      overflow-y: auto;
    }
  }
  &-Badge {
    font-size: 24px;
  }
  &-footer {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & > span {
      width: 175px;
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      text-align: center;
    }
    & > span:nth-child(1) {
      border-right: 1px solid #ccc;
    }
  }
}
</style>
