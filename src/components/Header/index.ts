import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const tabList = [
      { name: '首页', link: '/recommend' },
      { name: '分类', link: '/category' },
      { name: '榜单', link: '/rank' },
      { name: '搜索', link: '/search' },
    ];

    return {
      tabList,
    };
  },
});
