Page({
  data:{
    searchValue:"塑料垃圾桶",
    trashType:"请搜索"
  },
  btnclick: function(){
    var localData = require("../../data/searchInfo.js")
    console.log(localData)
  //  wx.request({
  //    url: '../testJson/searchInfo.json',
  //    success:function(res){
       
  //      console.log(localData)
  //      this.data.trashType = localData.value;
  //    }
  //  })
  }
})