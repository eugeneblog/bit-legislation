/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
//核心控制器
Ext.define('Bitcoin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires:['Bitcoin.view.user.Login'],

    alias: 'controller.main',
    routes: {
        //监听路由实现视图切换
        //这样写是为了方便扩展其他路由
        //类似view.hone的路由会触发onRouteChange方法
        'view.:node': {
            before: 'onLoginCheck',
            action: 'onRouteChange'
        },
        //登录成功后触发
        'user.:node': {
            before: 'onLogonCheck',
            action: 'loginSuccess'
        }
    },

    onMainViewRender: function(o,eOpts){
        //o === 视图对象  
        var _this = this,
        hash = window.location.hash.replace('#', '');//获取路由
        _this.onAjaxInit();

        //不能是登陆页
        if(hash == 'view.login'){
            hash = ''
        }

        //记录默认路由
        _this.defHash = hash;
        //检查是否登陆
        
        if (!config.userData) {
            //跳转到登陆页面
            _this.redirectTo('view.login', true);
        }

    },

    onAjaxInit: function(){

    },

    //登陆检测 默认参数，id == 路由标示 action是管理路由处理程序执行的类
    onLoginCheck: function(id,action){
         //console.log('登录检测，userData', config.userData);
        //登录成功或者要跳转的页面在全局配置中已经配置才能继续
        if (config.userData || id in config.unCheck) {
            action.resume();
        }
    },

    onRouteChange: function(id){
        //切换视图 参数一：要切换的视图。参数二：route id
        this.setCurrentView('mainCardPanel', id);
    },

    //切换视图
    setCurrentView: function(card,hashTag){
        if (!hashTag) {
            return;
        }
        
        //大写字母转换为小写
        hashTag = hashTag.toLowerCase();
        var _this = this;
        //获取当前已经存在的window窗口
        var window = Ext.WindowManager.getActive();
        var newView;
        //获取所有引用对象
        refs = _this.getReferences(),
        //获取容器视图
        mainCard = refs[card],
        //获取容器布局
        mainLayout = mainCard.getLayout(),
        //获取左侧菜单
        navigationList = refs.navigationTreeList,
        //获取左侧菜单数据仓库
        navigationStore = navigationList.getStore(),
        //获取视图白名单
        store = _this.getStore('views'),
        //检查节点是否在导航菜单中，如果不在则在白名单中查找
        node = store.getAt(store.find('viewType', hashTag)) || navigationStore.findNode('viewType', hashTag);
        //获取目标视图名称，如果找不到则返回404页面
        view = (node && node.get('viewType')) || 'page404',
         //获取上一视图
        lastView = _this.lastView,
        //检查目标视图是否已经存在
        existingItem = mainCard.child('component[routeId=' + hashTag + ']');
        console.log(_this.getReferences());
        console.log(window)
        //如果上一个视图存在则触发这个视图的自定义事件viewHide
        //扩展监听，有些时候可能会用到
        if (lastView) {
            lastView.fireEvent('viewHide', lastView);
        }

         //如果上个视图存在，并且是Window视图
        if (lastView && lastView.isWindow) {
            //销毁它
            lastView.destroy();
        } else {
            //上个视图不是Window视图窗口,当前页面有则关闭它
            if (window && window.isWindow && !window.isToast) {
                //console.log('关闭Window视图', window.title);
                window.close();
            }
        }

        //将当前视图保存到lastView中
        lastView = mainLayout.getActiveItem();
        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                // 用户视图切换时搜索查找
                routeId: hashTag,
                hideMode: 'offsets'
            });
        }
    }
});
