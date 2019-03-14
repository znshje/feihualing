const app = getApp()

Page({
  data: {

    array: [],

    show: []

  },
  onLoad(option) {
    var res = wx.getStorageSync('result');
    var show = wx.getStorageSync('show');

    this.setData({
      array: res,
      show: show
    });
  },

  showFullPoem: function(e) {
    var index = e.currentTarget.dataset.index;
    var title = this.data.array[index].title;
    var poet = this.data.array[index].poet;
    var poem = this.data.array[index].poem;
    wx.navigateTo({
      url: '../poem/poem?title=' + title + '&poet=' + poet + '&poem=' + poem,
    })
  }

})
