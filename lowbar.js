const _ = {};

_.identity = function(input) {
  return input;
};

_.first = function(arr, n) {
  if (n === undefined || n === 1) {
    return arr[0];
  }
  return arr.slice(0, n);
};

_.last = function(arr, n) {
  if (n === undefined || n === 1) {
    return arr[arr.length - 1];
  }
  return arr.slice(-n);
};

_.each = function (list, iteratee, context) {
    if (Array.isArray(list) || typeof list === 'string') {
        for (let i = 0; i < list.length; i++) {
            iteratee.call(context || list, list[i], i, list);
        }
    } else if (typeof list === 'object') {
        for (let key in list) {
            iteratee.call(context || list, list[key], key, list);
        }
    }
    return list;
};

_.indexOf = function (arr, val, start) {
  if (!start) return arr.indexOf(val);
  let beginStrLength = arr.slice(0, start).length;
  let resultIndex = arr.slice(start).indexOf(val); 
  return resultIndex + beginStrLength;
};

_.filter = function (list, predicate) {
  if (!list) return [];
  let truthArr = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      let isTrue = predicate(list[i]);
      if (isTrue) truthArr.push(list[i]);
    }
  } else if (typeof list === 'object') {
    for (let key in list) {
      let isTrue = predicate(list[key]);
      if (isTrue) truthArr.push(list[key]);
    }
  }
  return truthArr;
};

_.reject = function (list, predicate) {
  if (!list) return [];
  let falseArr = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      let isTrue = predicate(list[i]);
      if (!isTrue) falseArr.push(list[i]);
    }
  } else if (typeof list === 'object') {
    for (let key in list) {
      let isTrue = predicate(list[key]);
      if (!isTrue) falseArr.push(list[key]);
    }
  }
  return falseArr;
};

_.uniq = function (arr) {
  if (!arr) return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i]);
  }
  return newArr;
};

_.map = function (list, iteratee, context) {
    const result = [];
    _.each(list, function (value, index) {
        result.push(iteratee.call(context, value, index, list));
    });
    return result;
};

_.contains = function (array, target, fromIndex) {
    let slice = array.slice(fromIndex);
    if (slice.indexOf(target) !== -1) {
        return true;
    } else {
        return false;
    }
};

_.pluck = function (list, propName) {
    const newList = list.map(function (elem) {
      return (elem[propName]);
    });
    return newList;
};

_.reduce = function(list, iteratee, memo) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      if (memo === undefined) { memo = i; }
      memo = iteratee(memo, list[i]);
    }
    return memo;
  } else if (typeof list === 'object') {
    for (let key in list) {
      memo = iteratee(memo, list[key]);
    }
    return memo;
    }
};

_.every = function (list, predicate, context) {
    for (let i = 0; i < list.length; i++) {
        if (predicate.call(context || list, list[i]) === false) {
            return false;
        }
    }
    return true;
};

_.some = function (list, predicate, context) {
    for (let i = 0; i < list.length; i++) {
        if (predicate.call(context || list, list[i]) === true) {
            return true;
        }
    }
    return false;
};

_.extend = function (destination, ...sources) {
    _.each(sources, function (source) {
        _.each(source, function (value, key) {
            destination[key] = value;
        });
    });
    return destination;
};

_.defaults = function (object, ...defaults) {
    _.each(defaults, function (defaultObj) {
        _.each(defaultObj, function (value, key) {
            if (object[key] === undefined) {
                object[key] = value;
            }
        });
    });
    return object;
};

_.once = function (func) {
    let invoked = false;
    let result;
    const innerFunc = function () {
        if (invoked === false) {
            result = func();
            invoked = true;
        }
        return result;
    };
    return innerFunc;
};

_.shuffle = function (list) {
    if (Array.isArray(list)) {
        let i = 0,
        j = 0,
        temp = null;
        for (i = list.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }
        return list;
    } else if (typeof list === 'object') {
        const tempList = [];
        let key;
        for (key in list) {
            tempList.push(list[key]);
        }
        return tempList;
    }
};

_.invoke = function (list, method, ...args) {
    return _.map(list, function (elem) {
        if (elem[method]) {
            elem[method].apply(elem, args);
            return elem;
        } else {
            return elem[method];
        }
    });
};

_.delay = function (func, wait, ...args) {
    setTimeout(function () {
        func.apply(this, args);
    }, wait);
};

_.intersection = function (...args) {
    let result = [];
    _.each(args[0], function (arrayElem) {
        let intersects = false;
        for (let i = 1; i < args.length; i++) {
            _.each(args[i], function (check) {
                if (arrayElem === check) {
                    intersects = true;
                }
            });
        }
        if (intersects) {
            result.push(arrayElem);
        }
    });
    return result;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}