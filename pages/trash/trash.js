Page({
  data:{
    searchValue:"塑料垃圾桶",
    trashType:"请搜索"
  },
  btnclick: function(){
    var localData = require("../../data/searchInfo.js")
    console.log("请求内容：" + localData.testJsonList)
    console.log("搜索内容：" + searchValue)
    
  }
})