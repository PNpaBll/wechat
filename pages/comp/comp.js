

Page({
	data:{
		miao: null,
		imagepath: null,
		locationName: null,
		address: null
	},
	
	onLoad: function(){
		this.setData({
			miao:{'name':'Component', 'age':'Handsome'}
		})
	},
	getImage: function(){
		var self = this
		wx.chooseImage({
		  count: 9, // 最多可以选择的图片张数，默认9
		  sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
		  sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
		  success: function(res){
			// success
			var tempFilePaths = res.tempFilePaths
			self.setData({
				imagepath: tempFilePaths
			})
		  },
		  fail: function(res) {
			// fail
		  },
		  complete: function(res) {
			// complete
		  }
		})
	},
	wxPay: function(){
		wx.requestPayment({
		  timeStamp: 'String1',
		  nonceStr: 'String2',
		  package: 'String3',
		  signType: 'MD5',
		  paySign: 'String4',
		  success: function(res){
			// success
		  },
		  fail: function(res) {
			// fail
		  },
		  complete: function(res) {
			// complete
		  }
		})
	},
	getPosition: function(){
		var self = this
		wx.getLocation({
		  type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
		  success: function(res){
			var latitude = res.latitude
		    var longitude = res.longitude
		    var speed = res.speed
		    var accuracy = res.accuracy

		    self.setData({
				imagepath: latitude
			})
		  },
		  fail: function(res) {
			// fail
		  },
		  complete: function(res) {
			// complete
		  }
		})
	},
	choosePosition: function(){
		var self = this
		wx.chooseLocation({
			success: function(res){
				var name = res.name
				var address = res.address

				self.setData({
					locationName:name,
					address,
				})

			},
			fail: function(res) {
				// fail
			},
			complete: function(res) {
				// complete
			}
		})
	},
	wxPosition: function(){
		wx.openLocation({
			latitude: null, // 纬度，范围为-90~90，负数表示南纬
			longitude: null, // 经度，范围为-180~180，负数表示西经
			scale: 28, // 缩放比例
			// name: 'name', // 位置名
			// address: 'address', // 地址的详细说明
			success: function(res){
				// success
			},
			fail: function(res) {
				// fail
			},
			complete: function(res) {
				// complete
			}
		})
	}
})