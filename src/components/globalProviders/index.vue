<template>
  <a-config-provider :locale="locale">
    <App />
  </a-config-provider>
</template>

<script>
  import enUS from 'ant-design-vue/lib/locale-provider/en_US';
  import App from '@/App.vue'
  export default {
    name: 'GlobalProviders',
    components: {
      App
    },
    data() {
      return {
        locale: enUS,
      };
    },
  };
</script>