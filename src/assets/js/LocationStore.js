let SetsessionStore = function (storename,storevalue){
    console.log("设置缓存"+storename)
    console.log("设置缓存"+storevalue)
    sessionStorage.setItem(storename,storevalue)
}

let GetSessionStore = function (key){
    console.log("获取缓存"+key)
    return sessionStorage.getItem(key)
}

export {
    SetsessionStore,
    GetSessionStore
}
