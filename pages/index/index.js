Page({
  data: {
    listData: '',
    time: '2023-06-25',
    startCity:'上海',
    endCity:'北京',
    currentIndex:1,
    hotelCity:'上海',
    adultNum: 1,
    childNum: 1,
    rotate: -180
  },
  onLoad: function(){
    console.log('页面加载成功');
  },
  onReady: function(){
    this.animation = wx.createAnimation({
      timingFunction: "ease",
      duration: 400
    })
  },

  rotate_img: function() {//旋转飞机图片
    this.animation.rotateZ(this.data.rotate).step()
    this.setData({
      rotate: -1*this.data.rotate,
      startCity: this.data.endCity,
      endCity: this.data.startCity,
      animation: this.animation.export()
    })
  },

  isChina: function(s) {
    var re=/[^\u4e00-\u9fa5]/;  
    if(re.test(s)) return false;  
    return true; 
  },

  test() {
    wx.request({
      // 注意，如果小程序开启校验合法域名时必须使用https协议
      //在测试的情况下可以不开启域名校验
      url: 'http://192.3.24.71:80/ticket/getData',
      data: {
      },
      // 请求的方法
      method: 'GET', // 或 ‘POST’
      // 设置请求头，不能设置 Referer
      header: {
    		'content-type': 'application/json' // 默认值
  	  },
  	  // 请求成功时的处理
      success: function (res) {
        // 一般在这一打印下看看是否拿到数据
        if (res.statusCode == 200) {
          wx.setStorageSync("list", res.data.data)
          var list = wx.getStorageSync("list");
          console.log(list)
        }
      },
      // 请求失败时的一些处理
      fail: function () {
      	wx.showToast({
            icon: "none",
            mask: true,
          	title: "接口调用失败，请稍后再试。",
         });
      }
    })
  },

  searchProduct: function(){
    this.test()
    wx.setStorageSync('startCity', this.data.startCity)
    wx.setStorageSync('endCity', this.data.endCity)
    wx.setStorageSync('time', this.data.time)
    console.log(this.isChina(this.data.startCity))
    console.log(this.data.startCity)
    if(this.isChina(this.data.startCity)==false){
      wx.showModal({
        title: '提示',
        content: '请输入正确的出发地',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
    }
    else if(this.isChina(this.data.endCity)==false){
      wx.showModal({
        title: '提示',
        content: '请输入正确的到达地',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
    }
    else{
        wx.navigateTo({
        url:'../productDetail/productDetail'
      })
    }
  },

  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  changeStart(e) {
    console.log(e.detail.value)
    this.setData({
        startCity : e.detail.value
    })
  },
  changeEnd(e) {
    console.log(e.detail.value)
    this.setData({
        endCity : e.detail.value
    })
  }
})
