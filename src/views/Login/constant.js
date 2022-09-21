import PassWord from '@/views/Login/components/PassWord'
import ShortMessage from '@/views/Login/components/ShortMessage'

export const LOGIN_TYPE_MAP = [
  {
    key: '1',
    tab: '密码登录',
    component: PassWord
  },
  {
    key: '2',
    tab: '短信登录',
    component: ShortMessage
  }
  // {
  //   key: '3',
  //   tab: '二维码登录',
  //   component: ShortMessage
  // }
]
