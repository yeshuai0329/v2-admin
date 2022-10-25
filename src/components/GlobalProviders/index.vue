<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<script>
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
import { initDynamicRoutes } from '@/router/router'
import { authRoutesToAuthMenus } from '@/utils/public'
import { getMenusInfoApi } from '@/apis/Auth'
import { mapActions } from 'vuex'
export default {
  name: 'GlobalProviders',
  components: {},

  data () {
    return {
      locale: enUS
    }
  },
  mounted () {
    const token = localStorage.getItem('token')
    if (token) {
      this.getMenusInfo()
    }
  },
  methods: {
    ...mapActions('user', ['authRoutesListAction', 'authMenusListAction']),
    // 获取菜单列表
    async getMenusInfo () {
      const { data } = await getMenusInfoApi()
      if (data.code === 200) {
        this.authRoutesListAction(data.data)
        initDynamicRoutes()
        const authMenusList = authRoutesToAuthMenus(data.data, [], 0)
        this.authMenusListAction(authMenusList)
      }
    }
  }
}
</script>
