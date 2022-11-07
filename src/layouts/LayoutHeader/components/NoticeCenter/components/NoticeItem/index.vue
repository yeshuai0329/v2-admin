<template>
  <div class='NoticeItem' >
    <div class='NoticeItem-left'>
      <img :src="mode.img">
    </div>
    <div class='NoticeItem-right'>
      <h3 class='one-ellipsis'>{{mode.title}}</h3>
      <p>x{{mode.time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeItem',
  props: ['mode']
}
</script>

<style lang='less' scoped>
.NoticeItem {
  width:100%;
  height: 72px;
  display: flex;
  padding: 4px 0px;
  &-left {
    height: 64px;
    width: 64px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
  }
  &-right {
    height: 64px;
    padding: 8px;
    flex: 1;
    h3 {
      width: 250px;
      text-align: start;
    }
    p {
      width: 250px;
      text-align: start;
    }
  }
  &:hover {
    background: #e6f7ff;
  }
}
</style>
