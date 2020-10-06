// miao.js


Page({
	data:{
		miao: null
	},
	onLoad: function(){
		this.setData({
			miao:{'name':'Jack', 'age':12666}
		})
	},
	goXiao: function( event ){
		console.log('event', event)
		wx.navigateTo({
		  url: '../xiao/xiao'
		})
	},
	goLogs: function(){
		wx.reLaunch({
			url: '../logs/logs'
		})
	},
	onReachBottom: function(){
		console.log('到底啦')
	},
	onShareAppMessage: function(){
		console.log('分享这一页')
		this.myFunc()
		return {
		      title: '这是分享内容标题',
		      path: '/page/user?id=123'
		    }
	},
	myFunc: function(){
		console.log('自定义函数')
	}
})