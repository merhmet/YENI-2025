$('document').ready(function () {

    /* smartbanner */
    $.smartbanner({
        daysHidden: 1, // Duration to hide the banner after being closed (0 = always show banner)
        daysReminder: 30, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
        title: 'VAV TV&Radyo', // What the title of the app should be in the banner (defaults to <title>)
        author: 'Yenilenen Vav Radyo&TV', // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
        price: 'içeriklerine', // Price of the app
        inAppStore: 'ücretsiz erişin', // Text of price for iOS
        inGooglePlay: 'ücretsiz erişin', // Text of price for Android
        button: 'AÇ', // Text for the install button
        speedIn: 400, // Show animation speed of the banner
        speedOut: 400, // Close animation speed of the banner
        iOSUniversalApp: !0, // If the iOS App is a universal app for both iPad and iPhone, display Smart Banner to iPad users, too.
        onReady: function () {
            //console.log('ready');
            $('body').addClass('smartBann');
        },
        onInstall: function () {
            //console.log('Click install');
            $('body').removeClass('smartBann');
        },
        onClose: function () {
            //console.log('Click close');
            $('body').removeClass('smartBann');
        }
    });


});