// rose.js

const months = []
const days = []

for(let i=1; i<=12; i++){
	months.push(i)
}
for(let i=1; i<=31; i++){
	days.push(i)
}

Page({
	data:{
		miao: null,
		inputValue: '',
		phoneModel: '',
		systemVersion: '',
		clientPlatform: '',
		montharr: months,
		days: days,
		values: [1,11],
		mm: 2,
		dd: 12
	},

	onShareAppMessage: function () {
	    return {
	      title: '自定义分享标题',
	      path: '/page/user?id=123',
	      success: function(res) {
	        // 分享成功
	   		console.log('分享成功', res)
	      },
	      fail: function(res) {
	        // 分享失败
	        console.log('分享失败', res)
	      }
	    }
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

	requestApi: function(){
		wx.request({
			url: 'https://api.github.com/',
			data: {},
			method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			// header: {}, // 设置请求的 header
			success: function(res){
				console.log('success', res)
				// success
			},
			fail: function(res) {
				console.log('fail', res)
				// fail
			},
			complete: function(res) {
				console.log('complete', res)
				// complete
			}
		})
	},

	popMsg: function(){
		wx.showToast({
		  title: '成功',
		  icon: 'success',
		  duration: 2000,
		  mask: true
		})
	},

	popScan: function(){
		wx.scanCode({
			success: function(res){
				console.log(res)
			},
			fail: function(res) {
				// fail
			},
			complete: function(res) {
				// complete
			}
		})
	},

	popSetting: function(){
		wx.openSetting({
		  success: (res) => {
		  	console.log(res)
		    /*
		     * res.authSetting = {
		     *   "scope.userInfo": true,
		     *   "scope.userLocation": true
		     * }
		     */
		  }
		})
	},

	getInputValue: function( event ){
		this.setData({
			inputValue: event.detail.value
		})
	},

	getOsInfo: function(){
		var self = this
		wx.getSystemInfo({
			success: function(res) {
				var model = res.model
				var system = res.system
				var platform =  res.platform
				self.setData({
					phoneModel: model,
					systemVersion: system,
					clientPlatform: platform
				})
			}
		})
	},

	getMonth: function(e){

		const val = e.detail.value

		this.setData({
			mm: this.data.montharr[val[0]],
			dd: this.data.days[val[1]]
		})
	}



})