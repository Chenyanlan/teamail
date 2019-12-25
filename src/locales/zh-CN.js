import component from './zh-CN/component';
import globalHeader from './zh-CN/globalHeader';
import menu from './zh-CN/menu';
import pwa from './zh-CN/pwa';
import settingDrawer from './zh-CN/settingDrawer';
import settings from './zh-CN/settings';
import accountSettings from './zh-CN/accountSettings';

export default {
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.preview.down.block': '下载此页面到本地项目',
  'app.welcome.link.fetch-blocks': '获取全部区块',
  'app.welcome.link.block-list': '基于 block 开发，快速构建标准页面',
  'app.wiki.menuMap.greenTea': '绿茶',
  'app.wiki.menuMap.redTea': '红茶',
  'app.wiki.menuMap.blackTea': '黑茶',
  'app.wiki.menuMap.whiteTea': '白茶',
  'app.wiki.menuMap.wulong': '青茶',
  'app.wiki.menuMap.yellowTea': '黄茶',
  'app.wiki.menuMap.scentedTea': '花茶等其他',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...accountSettings,
};
