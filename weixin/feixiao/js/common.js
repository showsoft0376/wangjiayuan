mui.ready(function() {
	var aniShow = "pop-in";
	mui('.mui-bar').on('tap', 'a', function() {
		var id = this.getAttribute('href');
		var href = this.href;
		if(id && ~id.indexOf('.html')) {
			if(!mui.os.plus || mui.os.ios) {
				mui.openWindow({
					id: id,
					url: this.href,
					styles: {
						popGesture: 'close'
					},
					show: {
						aniShow: aniShow
					},
					waiting: {
						autoShow: false
					}
				});
			}
		}
	});
});