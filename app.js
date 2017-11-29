App({
  util: require('we7/resource/js/util.js'),
  globalData: {
    userInfo: null,
    code: '',
  },

  onLaunch: function () {
    var that = this
    wx.login({
      success: function (res) {
        that.util.request({
          url: 'entry/wxapp/TabBar',
          data: {
            m: 'yyf_company'
          },
          cachetime: 0,
          success: function (res) {
              wx.setStorageSync('barlist', res.data.data)
          }
        });
      }
    });
  },

  tabBar: {
    "color": "#123",
    "selectedColor": "#1ba9ba",
    "borderStyle": "#1ba9ba",
    "backgroundColor": "#fff",
    "list": [
      {
        "pagePath": "/we7/pages/index/index",
        "iconPath": "/we7/resource/icon/home.png",
        "selectedIconPath": "/we7/resource/icon/homeselect.png",
        "text": "首页"
      },
      {
        "pagePath": "/we7/pages/user/index/index",
        "iconPath": "/we7/resource/icon/user.png",
        "selectedIconPath": "/we7/resource/icon/userselect.png",
        "text": "微擎我的"
      }
    ]
  },
  globalData: {
    userInfo: null,
  },
  siteInfo: {
    'title': 'cmstest',
    'uniacid': '7',
    'acid': '7',
    'multiid': '0',
    'version': '2.0',
    'siteroot': 'https://xcx.sdweihu.com/app/index.php',
    'design_method': '3',
    'redirect_module': '',
    'template': ''
  }
});