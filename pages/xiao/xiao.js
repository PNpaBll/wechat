

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
			miao:{'name':'Xiao', 'age':'Handsome'}
		})
	}
})