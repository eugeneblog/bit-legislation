//通用弹窗
Ext.define('Bitcoin.view.widget.LockingWindow', {
    extend: 'Ext.window.Window',
    xtype: 'lockingwindow',
    //样式
    cls: 'auth-locked-window',
    //标题居中
    titleAlign: 'center',
    //最大化
    maximized: true,
    //滚动条
    scrollable: true,
    //自动显示
    autoShow: true,
    //竖向居中布局
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }
});
