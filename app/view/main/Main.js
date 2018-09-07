
Ext.define('Bitcoin.view.main.Main',{
    extend: 'Ext.container.Viewport',
    requires: [
        
    ],
    controller: 'main',
    viewModel: 'main',
    itemId: 'mainView',
    layout: {
        type: 'vbox',
        //子试图铺满容器
        align: 'stretch'
    },

    items:[
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 64,
            itemId: 'headerBar',
            title:'aa',
            hidden: true,
            bind: {
                hidden: '{isHideMain}'
            },
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="resources/images/logo/company-logo.png">Sencha</div>',
                    //宽度与导航菜单栏宽度相同
                    width: 250
                },{
                    //菜单折叠/展开按钮
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls: 'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },'->', {
                    //帮助按钮
                    iconCls: 'x-fa fa-question',
                    ui: 'header',
                    //触发路由
                    href: '#view.faq',
                    //本页打开
                    hrefTarget: '_self',
                    tooltip: '帮助'
                },{
                    //退出登录按钮
                    iconCls: 'x-fa fa-sign-out',
                    ui: 'header',
                    tooltip: '退出登录',
                    handler: 'onLoginOut'
                },{
                    //相当于一个label
                    xtype: 'tbtext',
                    //动态绑定名称
                    bind: '{userData.fullName}'
                },{
                     //图片
                     xtype: 'image',
                     cls: 'header-right-profile-image',
                     height: 35,
                     width: 35,
                     alt: '当前用户图像',
                     //动态绑定头像
                     bind: {
                         src: '{userData.img}'
                     }
                }
            ]
        }
    ]
})