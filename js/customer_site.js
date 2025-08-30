const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
        wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙',
    }    tt: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '天堂',
    }    douban: {
        api: 'https://caiji.dbzy.tv/api.php/provide/vod',
        name: '豆瓣',
    }    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风'
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
