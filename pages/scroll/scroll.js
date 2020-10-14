

Page({

    data: {
        xiao: null,
        myarr: ['巴萨', '皇马', '曼联', '切尔西', '马竞'],
        ballindex: 0,
        mytime: "13:06",
        mydate: "2017-5-5"
    },
    onLoad: function(){
        
    },
    getFootball: function(e){
        this.setData({
            ballindex: e.detail.value
        })
    },
    getTime: function(e){
        this.setData({
            mytime: e.detail.value
        })
    },
    getDate: function(e){
        this.setData({
            mydate: e.detail.value
        })
    }




})