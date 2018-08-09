// pages/index/children/takeNumber/takeNumber.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickList: null,
    pickIndex: 0,
    main_height: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let list = [];
    for (let i = 1; i <= 50; i++) {
      list.push(i.toString());
    }
    this.setData({
      pickList: list
    });

    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 计算主体部分高度,单位为px
        that.setData({
          main_height: res.windowHeight
        })
      }
    })
  },

  // 就餐人数选择框
  bindPickerChange: function(e) {
    this.setData({
      pickIndex: e.detail.value
    })
  },

  // 取号
  toTakeSuccess: function() {
    wx.redirectTo({
      url: './../takeSuccess/takeSuccess',
    })
  },
  // 重定向返回
  redirectBack: function() {
    wx.redirectTo({
      url: './../diningRoom/diningRoom',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})