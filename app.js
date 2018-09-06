/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Bitcoin.Application',

    name: 'Bitcoin',

    requires: [
        // This will automatically load all classes in the Bitcoin namespace
        // so that application classes do not need to require each other.
        'Bitcoin.*'
    ],

    // The name of the initial view to create.
    mainView: 'Bitcoin.view.main.Main'
});
