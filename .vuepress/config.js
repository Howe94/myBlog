module.exports = {
  "title": "HoweBlog",
  "description": "Blog of HZC",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "前端基础",
        "icon": "reco-message",
        "items": [
          {
            "text": "HTML",
            "link": "/docs/html/"
          },
          {
            "text": "JavaScript",
            "link": "/docs/java-script/"
          }
        ]
      },
      {
        "text": "关于我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Howe94",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/html/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      // "category": {
      //   "location": 2,
      //   "text": "Category"
      // },
      // "tag": {
      //   "location": 3,
      //   "text": "Tag"
      // }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/avatar.jpg",//logo图标
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "howe916",
    "authorAvatar": "/avatar.jpg",//个人头像
    "record": "@广东金融学院",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
};