Page({
  data: {
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

  seatchProduct: function(){
    wx.navigateTo({
      url:'../productDetail/productDetail'
    })
  },



  selectCity:function(){//选择城市
    console.log('跳转城市选择页面');
    wx.navigateTo({
      url: '../selectcity/selectcity'
    })
  }

})
