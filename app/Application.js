/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Bitcoin.Application', {
    extend: 'Ext.app.Application',

    name: 'Bitcoin',

    quickTips: false,   //关闭快速提示
    platformConfig: {    
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {   //application 更新事件
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
