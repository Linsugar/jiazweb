let SetsessionStore = function (storename,storevalue){
    sessionStorage.setItem(storename,storevalue)
}

let GetSessionStore = function (key){
    return sessionStorage.getItem(key)
}

export {
    SetsessionStore,GetSessionStore
}