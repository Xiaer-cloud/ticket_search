Page({
  data: {
    time: '2023-06-25',
    currentIndex:1,
    startCity:'上海',
    endCity:'北京',
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

  searchProduct: function(){
    wx.navigateTo({
      url:'../productDetail/productDetail'
    })
  },

  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  }
})
