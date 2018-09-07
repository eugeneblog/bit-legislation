/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Bitcoin.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Bitcoin',

        isHideMain: false,

        userData: {
            fullName: 'Eugene',
            img: '/resources/images/user/WechatIMG49.png'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
