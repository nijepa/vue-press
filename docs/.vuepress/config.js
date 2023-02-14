import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: 'web-components',
  description: 'Vue3 web-components',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './layouts'),
    }),
  ],
  theme: defaultTheme({
    logo: '/nipa.png',
    navbar: [
      { text: 'Tooltip', link: '../components/Tooltip.md' },
      { text: 'Toast', link: '../components/Toast.md' },
      { text: 'Datepicker', link: '../components/Datepicker.md' },
      { text: 'GitHub', link: 'https://github.com/vicbergquist/codesandbox-vuepress/' },
    ]
  }),
  alias: {
    '@theme/TooltipComponent.vue': path.resolve(__dirname, './layouts/TooltipComponent.vue'),
    '@theme/ToastComponent.vue': path.resolve(__dirname, './layouts/ToastComponent.vue'),
    '@theme/DatepickerComponent.vue': path.resolve(__dirname, './layouts/DatepickerComponent.vue')
  },
})