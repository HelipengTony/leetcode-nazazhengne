/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
    var arrayCombine = [];
    var i = 0;
    var j = 0;
  
    while (i < m + n && j < n) {
      if (A[i] !== 0 && B[j] !== 0) {
        if (A[i] < B[j]) {
          arrayCombine[arrayCombine.length] = A[i++];
        } else if (A[i] == B[j]) {
          arrayCombine[arrayCombine.length] = B[j++];
          arrayCombine[arrayCombine.length] = A[i++];
        } else {
          arrayCombine[arrayCombine.length] = B[j++];
        }
      } else if (A[i] == 0) {
        i++;
      } else {
        j++;
      }
    }
  
    while (i < m + n && j == n) {
      arrayCombine[arrayCombine.length] = A[i++];
    }
  
    while (j < n && i == m + n) {
      arrayCombine[arrayCombine.length] = B[j++];
    }
  
    return arrayCombine;
  
  };