
$( document ).ready(function() {


	var feed = new Instafeed({

        get: 'user',
        userId: '247339996',
        limit: 6,
        resolution: 'low_resolution',
        accessToken:'247339996.1677ed0.d4c9fd73c11343119eb14a0ec303ffb7',
        sortBy: 'most-recent',
        template: '<div class="col-xxs-12 col-xs-6 col-sm-4 col-md-3 col-lg-2 insta-img-cont"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="whatever text" title="title name"></a></div>',
    });
    feed.run();

});