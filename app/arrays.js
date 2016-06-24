exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i=0;i<arr.length;i++)
    {
      if(arr[i] === item)
      return i
    }
    //Element not found
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for(var i=0;i<arr.length;i++)
    {
      sum+=arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    for(var i=0;i<arr.length;i++)
    {
      if(arr[i] == item)
      arr.splice(i,1);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = arr.length - 1; i >= 0; i--)
    {
      if(arr[i] === item)
      {
        arr.splice(i,1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate : function(arr) {
    return arr.slice(0,arr.length-1);
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {
    return arr.slice(1,arr.length);
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);

  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;

  },

  count : function(arr, item) {
    var count = 0;
    for(var i=0;i<arr.length;i++){
      if(arr[i] === item)
      count++;
    }
    return count;
  },

  duplicates : function(arr) {
    arr.sort();
    var result = [];
    for(var i=0;i<arr.length-1;i++)
    {
      if(arr[i] == arr[i+1])
        {
          if(result.indexOf(arr[i]) === -1)
            result.unshift(arr[i]);
        }
    }
    return result;
  },

  square : function(arr) {
    return arr.map(function(num) {
  return num * num;
});

  },

  findAllOccurrences : function(arr, target) {
    var indexes = [], i = -1;
   while ((i = arr.indexOf(target, i+1)) != -1){
       indexes.push(i);
   }   
   return indexes;
  }
};
