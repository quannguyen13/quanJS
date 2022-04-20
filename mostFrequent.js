function mostFrequent(arr){
    var mf = 1; //most frequent occurrence count (count)
    var m = 0; // current count
    var item;
    for (var i = 0; i < arr.length; i++) {
      for (var j = i; j < arr.length; j++) {
        if (arr[i] == arr[j]){
          m++;
        }
        if (mf < m){
          mf = m;
        }
      item = arr[i];
      }
      m = 0;
    }
     console.log(`item ${item} show ${mf} times`);
}
  
arr = [2, 'b', 1, 'a', 2, 6, 'a', 3, 'b', 2, 9, 3, 2];
mostFrequent(arr)