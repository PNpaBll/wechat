// rose.js


Page({
	data:{
		miao: null
	},
	goIndex: function(){
		wx.navigateTo({
		  url: '../index/index'
		})
	},
	onLoad: function(){
		this.setData({
			miao:{'name':'Rose', 'age':'Beautiful'}
		})
	},

	popMsg: function(){
		wx.showToast({
		  title: '成功',
		  icon: 'success',
		  duration: 2000,
		  mask: true
		})
	}
})