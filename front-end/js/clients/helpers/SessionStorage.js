

class SessionStorage{
  static storeData(name, data) {
    const Data =  JSON.stringify(data);
    sessionStorage.setItem(name, Data);
  }
  static RemoveData(name){
   sessionStorage.removeItem(name);
  } 
  static getData(name){
   const data = JSON.parse(sessionStorage.getItem(name));
   return data;
  } 
  }
  export default SessionStorage;