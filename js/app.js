$(function() {
 
    //Set up instafeed
    var feed = new Instafeed ({
    	clientId: "64a3d88fb2024cda8ed37471136787db",
    	accessToken: "1819955487.1677ed0.2cfb03b3a82f496fb2d030803cc65c20",
		get: "user",
		userId: 1718088300,
		links: true,
		limit: 8,
		sortBy: 'most-recent',
	    resolution: 'standard_resolution',
	    template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
	});

    feed.run();
});