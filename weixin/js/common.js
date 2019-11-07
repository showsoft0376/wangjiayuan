mui.ready(function() {
	//侧滑容器父节点
	var offCanvasWrapper = mui('#offCanvasWrapper');
	try {
		document.getElementById('offCanvasShow').addEventListener('tap', function() {
			offCanvasWrapper.offCanvas('show');
		});
	} catch(e) {}
	try {
		document.getElementById('offCanvasShowmenu').addEventListener('tap', function() {
			offCanvasWrapper.offCanvas('show');
		});
	} catch(e) {}
	//主界面和侧滑菜单界面均支持区域滚动；
	try {
		mui('#offCanvasSideScroll').scroll();
	} catch(e) {
	}
	try {
		mui('#offCanvasContentScroll').scroll();
	} catch(e) {
	}
	try {
		mui('#pullrefresh').scroll();
	} catch(e) {
	}

	//实现ios平台原生侧滑关闭页面；
	if(mui.os.plus && mui.os.ios) {
		mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
			plus.webview.currentWebview().setStyle({
				'popGesture': 'none'
			});
		});
	}
	var aniShow = "pop-in";
	if(mui.os.android) {
		var list = document.querySelectorAll('.ios-only');
		if(list) {
			for(var i = 0; i < list.length; i++) {
				list[i].style.display = 'none';
			}
		}
		//Android平台暂时使用slide-in-right动画
		if(parseFloat(mui.os.version) < 4.4) {
			aniShow = "slide-in-right";
		}
	}
	try{
		document.getElementById("rightbars").addEventListener('tap', function(event) {
		offCanvasWrapper.offCanvas('show');
	});
	}catch(e){
	}
	mui('#memberlist').on('tap', 'a', function() {
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
	mui('.menunav').on('tap', 'a', function() {
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
	mui('#show').on('tap', 'a', function() {
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