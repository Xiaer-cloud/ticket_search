Page({
  data:{
    startCity: '',
    endCity: '',
    time: '',
    listData: '',
    flight: [
      {
        time: "2023/04/05",
        startCity: "上海",
        startTime: "10:30",
        startAirPlane: "上海虹桥机场T2",
        endCity: "北京",
        endTime: "08:30",
        endAirPlane: "首都国际机场T2",
        via: "经停济南",
        flight: "东方航空MU5130",
        airPlane: "波音737（中)"
      },
      {
        time: "2016/04/05",
        startCity: "上海",
        startTime: "10:30",
        startAirPlane: "上海虹桥机场T2",
        endCity: "北京",
        endTime: "08:30",
        endAirPlane: "首都国际机场T2",
        via: "经停济南",
        flight: "东方航空MU5130",
        airPlane: "波音737（中)"
      },{
        time: "2023/04/05",
        startCity: "上海",
        startTime: "10:30",
        startAirPlane: "上海虹桥机场T2",
        endCity: "北京",
        endTime: "08:30",
        endAirPlane: "首都国际机场T2",
        via: "经停济南",
        flight: "东方航空MU5130",
        airPlane: "波音737（中)"
      },{
        time: "2023/04/05",
        startCity: "上海",
        startTime: "10:30",
        startAirPlane: "上海虹桥机场T2",
        endCity: "北京",
        endTime: "08:30",
        endAirPlane: "首都国际机场T2",
        via: "经停济南",
        flight: "东方航空MU5130",
        airPlane: "波音737（中)"
      },{
        time: "2023/04/05",
        startCity: "上海",
        startTime: "10:30",
        startAirPlane: "上海虹桥机场T2",
        endCity: "北京",
        endTime: "08:30",
        endAirPlane: "首都国际机场T2",
        via: "经停济南",
        flight: "东方航空MU5130",
        airPlane: "波音737（中)"
      },{
        time: "2023/04/05",
        startCity: "上海",
        startTime: "10:30",
        startAirPlane: "上海虹桥机场T2",
        endCity: "北京",
        endTime: "08:30",
        endAirPlane: "首都国际机场T2",
        via: "经停济南",
        flight: "东方航空MU5130",
        airPlane: "波音737（中)"
      }
    ]
  },

  onLoad: function(){
    var list = wx.getStorageSync("list")
    var startCity = wx.getStorageSync('startCity')
    var endCity = wx.getStorageSync('endCity')
    var time = wx.getStorageSync('time')
    console.log(list)
    this.setData({
      startCity: startCity,
      endCity: endCity,
      time: time,
      listData : list
    })
  }

})
