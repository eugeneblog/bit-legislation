//公共类
Ext.define('Bitcoin.config.Config',{
    //别名，为了方便调用，这样通过 config.参数名 就能直接使用
    //如config.ver
    alternateClassName: 'config',
    statics: {
         //版本号
        ver: '1.0',

        //无须登陆检测就可以访问的页面
        //例如登录页的xtype为login，就配置为login:true
        //注意xtype只能小写
        unCheck: {
            userlock: true,
            userreset: true,
            login: true,
            register: true
        },
    }
})