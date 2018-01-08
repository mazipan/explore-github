const CACHE_PREFIX = 'GE_'

export const getCache = key => {
  let result = null
  let cache = localStorage.getItem(`${CACHE_PREFIX}${key}`);
  try{
    result = JSON.parse(cache);
    console.log(`get from cache ${key}, created ${result.created} `, result);
    // we will cache per one day
    if (result) {
      let dateNow = new Date().getDate();
      let createdDate = new Date(result.created).getDate();
      if (dateNow !== createdDate) {
        // return null for refresh cache
        result = null
      } else {
        // just return the datas
        result = result.data
      }
    }
  }catch(err){
    // do nothing
  }
	return result;
};

export const saveCache = (key, data) => {
  let obj = {
    created: new Date().getTime(),
    data: data
  }
  let dataString = JSON.stringify(obj)
	localStorage.setItem(`${CACHE_PREFIX}${key}`, dataString);
};
