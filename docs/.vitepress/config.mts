import { defineConfig } from 'vitepress'

import { devDependencies } from '../../package.json'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid';

import { usePosts } from './theme/untils/permalink';
const { rewrites } = await usePosts();

export default defineConfig({
  lang: 'zh-CN',
  title: "易山脚本文档",
  description: "脚本文档教程",
  rewrites,

  // #region fav
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  // #endregion fav

  base: '/', //网站部署到github的vitepress这个仓库里

  // cleanUrls:true, //开启纯净链接无html

  //启用深色模式
  appearance: 'dark',

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,

    // toc显示一级标题
    toc: {level: [1,2,3]},

    // 使用 `!!code` 防止转换
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],

    // 开启图片懒加载
    image: {
      lazyLoading: true
    },

    config: (md) => {
      // 组件插入h1标题下
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options)
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`
        return htmlResult
      },

      // 代码组中添加图片
      md.use((md) => {
        const defaultRender = md.render
        md.render = (...args) => {
          const [content, env] = args
          const currentLang = env?.localeIndex || 'root'
          const isHomePage = env?.path === '/' || env?.relativePath === 'index.md'  // 判断是否是首页

          if (isHomePage) {
            return defaultRender.apply(md, args) // 如果是首页，直接渲染内容
          }
          // 调用原始渲染
          let defaultContent = defaultRender.apply(md, args)
          // 替换内容
          if (currentLang === 'root') {
            defaultContent = defaultContent.replace(/NOTE/g, '提醒')
              .replace(/TIP/g, '建议')
              .replace(/IMPORTANT/g, '重要')
              .replace(/WARNING/g, '警告')
              .replace(/CAUTION/g, '注意')
          } else if (currentLang === 'ko') {
            // 韩文替换
            defaultContent = defaultContent.replace(/NOTE/g, '알림')
              .replace(/TIP/g, '팁')
              .replace(/IMPORTANT/g, '중요')
              .replace(/WARNING/g, '경고')
              .replace(/CAUTION/g, '주의')
          }
          // 返回渲染的内容
          return defaultContent
        }

        // 获取原始的 fence 渲染规则
        const defaultFence = md.renderer.rules.fence?.bind(md.renderer.rules) ?? ((...args) => args[0][args[1]].content);

        // 重写 fence 渲染规则
        md.renderer.rules.fence = (tokens, idx, options, env, self) => {
          const token = tokens[idx];
          const info = token.info.trim();

          // 判断是否为 md:img 类型的代码块
          if (info.includes('md:img')) {
            // 只渲染图片，不再渲染为代码块
            return `<div class="rendered-md">${md.render(token.content)}</div>`;
          }

          // 其他代码块按默认规则渲染（如 java, js 等）
          return defaultFence(tokens, idx, options, env, self);
        };
      })
      
      md.use(groupIconMdPlugin) //代码组图标
      md.use(markdownItTaskCheckbox) //todo
      md.use(MermaidMarkdown); 

    }

  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          ts: localIconLoader(import.meta.url, '../public/svg/typescript.svg'), //本地ts图标导入
          md: localIconLoader(import.meta.url, '../public/svg/md.svg'), //markdown图标
          css: localIconLoader(import.meta.url, '../public/svg/css.svg'), //css图标
          js: 'logos:javascript', //js图标
        },
      }),
      [MermaidPlugin()]
    ]as any,
    optimizeDeps: {
      include: ['mermaid'],
    },
    ssr: {
      noExternal: ['mermaid'],
    },
  },

  lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，没有安装git本地报错可以先注释

  //主题配置
  themeConfig: {
    //左上角logo
    logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //编辑本页
    editLink: {
      pattern: 'https://github.com/BertonJustin/Scirpt-Discussion/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },

    //上次更新时间
    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/start' },
      { text: '商店', link: 'https://yishans.tebex.io/', noIcon: true },
      
    ],


    //侧边栏
    sidebar: [
      {
        //分组标题1
        text: 'Welcome',
        collapsed: false,
        items: [
          { text: '前言', link: '/start' },
        ],
      },
      {
        //分组标题2
        text: 'Yishan_lib',
        collapsed: true,
        items: [
          { text: '简介', link: '/document/Yishan_lib/index' },
          { text: '安装方法', link: '/document/Yishan_lib/Install' },
          { text: '配置说明', link: '/document/Yishan_lib/Config' },
        ],
      },
      {
        text: 'Yishan_HotelJob',
        collapsed: true,
        items: [
          { text: '安装方法', link: '/Install_HotelJob' },
          { text: '配置说明', link: '/Config_HotelJob' },
          { text: '常见错误', link: '/Error_HotelJob' },
        ],
      },
      {
        text: '免费脚本',
        collapsed: false,
        items: [
          { text: 'Yishan_ui', link: '/document/Yishan_ui' },
          { text: 'Yishan_Notify', link: '/document/Yishan_Notify/docs' },
          { text: 'Yishan_Textui', link: '/document/Yishan_Textui/docs' },
          { text: 'Yishan_Text3D', link: '/document/Yishan_Text3D/docs' },
          { text: 'Yishan_Progressbar', link: '/document/Yishan_Progressbar/docs' },
        ],
      },
      {
        text: '更多免费脚本',
        collapsed: true,
        items: [
          { text: '获取方法', link: '/getting_started' },
        ],
      },
    ],



    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索脚本文档',
                buttonAriaLabel: '搜索脚本文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  selectKeyAriaLabel: '选择',
                  navigateDownKeyAriaLabel: '向下',
                  navigateUpKeyAriaLabel: '向上',
                  closeKeyAriaLabel: '关闭'
                }
              }
            }
          }
        }
      }
    },



    //社交链接
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.395 15.035a39.548 39.548 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a38.97 38.97 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.527 7.479.527 1.596 0 7.135.051 7.479-.527.078-.132.132-.458-.301-.778-.482-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673zM12.992 3.083c.667.16 1.193.773 1.193 1.514 0 .007 0 .015-.002.022l-.004.021c-.006.018-.01.035-.015.053l-.003.016c-.007.021-.011.043-.019.063l-.003.013c-.007.018-.013.036-.021.054l-.006.015a.76.76 0 0 1-.028.058l-.006.013a.709.709 0 0 1-.035.06l-.006.012c-.011.018-.024.036-.036.054l-.008.012a.736.736 0 0 1-.045.059l-.008.01a.703.703 0 0 1-.053.06l-.008.008c-.019.02-.037.04-.058.059l-.008.007c-.021.02-.042.04-.064.058l-.008.007c-.023.019-.048.037-.072.055l-.007.005c-.026.018-.052.035-.08.051l-.006.004c-.03.018-.061.034-.092.05-.003.002-.005.003-.008.004a.77.77 0 0 1-.106.046c-.003.001-.006.002-.009.004-.04.015-.081.029-.123.04l-.01.003c-.05.013-.101.024-.153.033l-.012.002c-.064.01-.128.017-.192.017-.467 0-.863-.286-1.011-.686l-.005-.014a1.21 1.21 0 0 1-.043-.148l-.003-.012a1.203 1.203 0 0 1-.021-.165v-.036a1.195 1.195 0 0 1 .024-.214l.003-.014a1.207 1.207 0 0 1 .058-.183l.005-.013c.024-.062.052-.121.084-.178l.005-.01a1.214 1.214 0 0 1 .117-.165l.006-.008a1.208 1.208 0 0 1 .152-.16l.007-.006c.059-.053.122-.101.189-.143l.008-.005a1.215 1.215 0 0 1 .224-.105l.009-.003a1.215 1.215 0 0 1 .256-.056l.011-.001A1.216 1.216 0 0 1 12.992 3.083z"/></svg>'
        },
        link: 'https://qm.qq.com/q/sjsTBlNJss',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'QQ'
      },
      { icon: 'github', link: 'https://github.com/BertonJustin' },
      { icon: 'discord', link: 'https://chat.vitejs.dev/' },
 
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    //页脚
    footer: {
      copyright: `Copyright © 2024-${new Date().getFullYear()}`,
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',


    //大纲显示2-3级标题
    outline: {
      level: [0, 1],
      label: '当前文档'
    },


    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

  },



})