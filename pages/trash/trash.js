Page({
  data:{
    searchValue:"塑料袋",
    trashType:"请搜索"
  },
  btnclick: function(){
    var localData = require("../../data/searchInfo.js")
    var arr = localData.testJsonList;
    for(let i=0;i<arr.length;i++){
      console.log(this.data.searchValue + ":" + arr[i].key)
      
      if (this.data.searchValue == arr[i].key) {
        console.log(arr[i].value)
        this.setData({
          trashType: arr[i].value
        })
      }
    }

    console.log("请求内容：" + localData.testJsonList);
    console.log("搜索内容：" + this.data.searchValue)
    
  },
  searchInput: function(e) {
    var val = e.detail.value;
    this.setData({
      searchValue:val
    })
  }
})