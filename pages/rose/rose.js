// rose.js


Page({
	data:{
		miao: null,
		inputValue: '',
		phoneModel: '',
		systemVersion: '',
		clientPlatform: '',
		scanInfo: ''
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
  // 扫码接口
	scanCode() {
		wx.scanCode({
			success: res => {
				console.log(res)
				this.setData({
					scanInfo: res.result
				})
			}
		})
	},
  // 登录
  logIn() {
    wx.login({
      success: res => {
        console.log(res)
        this.setData({
          loginCode: res.code
        })
      }
    })
  },
  checkLoginState() {
  	wx.checkSession({
  		success: () => console.log('已登陆'),
  		fail: () => console.log('登录过期，请重新登录')
  	})
  },
  getUserInfo() {
  	const appid = 'wxcb768188954f4f5f'
  	const secret = '4007fe3b6e64072d703219ea8ef42f54'
  	const code = '021bOwLy17xKCe0ZfnKy1qPcLy1bOwLu'
  	const url = 'https://api.weixin.qq.com/sns/jscode2session?appid='+ appid +'&secret='+ secret +'&js_code='+ code +'&grant_type=authorization_code'
  	console.log(url)
  },
  getSettingInfo() {
    wx.getSetting({
      success: res => {
        console.log(res)
      }
    })
  },
  confirmAuth() {
    wx.authorize({
      scope: 'scope.userinfo',
      success: () => console.log('同意授权'),
      fail: () => console.log('拒绝授权')
    })
  },
  getAddress() {
    wx.chooseAddress({
      success: res => console.log(res)
    })
  }
})