module.exports = function isEmpty(value){
    if(value===null || undefined ||
       (typeof value =='object' && Object.keys(value).length===0) ||
       (typeof value =='string' &&  value.trim().length ===0)){
         return true;
    }else{
      return false;
    }
  }