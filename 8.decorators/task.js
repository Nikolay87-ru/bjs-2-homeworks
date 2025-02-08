//Задача № 1
const md5 = require("./js-md5.js");

function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    let hashInCash = cache.find((item) => item.hash === hash);  
      
    if (hashInCash) {
      console.log("Из кеша: " + hashInCash.value);
      return "Из кеша: " + hashInCash.value;
    }
    let result = func(...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > maxCacheValuesCount) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}


const hasingText = "какой-нибудь текст";
console.log(md5(hasingText)); // 8d1d3ecc455a4220590e6d27e6c1a267
console.log(md5([10, 20, 30]));

module.exports = {
  cachingDecoratorNew,
};

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount += 1;

    if (wrapper.count === 0) {
      func(...args);
      wrapper.count += 1;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count += 1;
    }, delay);
  }

  return wrapper;
}

module.exports = {
  debounceDecoratorNew,
};

function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }
    let result = func(...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > maxCacheValuesCount) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

module.exports = {
  cachingDecoratorNew
}
