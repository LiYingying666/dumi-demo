import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'ubiquant-component',
    nav: [
      { title: '首页', link: '/guide' },
      { title: '中后台业务组件', link: '/admin' },
      { title: 'AI业务组件', link: '/ai' },
      { title: '通用组件', link: '/components' },
    ],
  },
  resolve: {
    // 配置入口文件路径，分别对应三个业务线
    atomDirs: [
      { type: 'admin', dir: 'src/admin' },
      { type: 'ai', dir: 'src/ai' },
      { type: 'component', dir: 'src/components' },
    ],
    // 添加 docs 目录到文档解析范围
    docDirs: ['docs'],
  },
});
