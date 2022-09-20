<template>
  <a-layout>
    <LayoutSider />
    <a-layout>
      <LayoutHeader />
      <LayoutContent />
    </a-layout>
  </a-layout>
</template>

<script>
import LayoutHeader from "@/layouts/LayoutHeader";
import LayoutSider from "@/layouts/LayoutSider";
import LayoutContent from "@/layouts/LayoutContent";

export default {
  name: "DefaultLayout",
  components: {
    LayoutHeader,
    LayoutSider,
    LayoutContent,
  },
};
</script>

<style lang="less" scoped>
.ant-layout {
  height: 100%;
}
</style>