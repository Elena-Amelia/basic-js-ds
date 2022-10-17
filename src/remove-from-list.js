const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  this.removeAt (this.indexOf(k));

   function removeAt(pos) {
    if (pos<0 || pos >= this.length) {
      return;
    }
    let curr = this.head;

    if (pos === 0) {
      this.head = curr.next;
    } else {
      let prev = null;
      let ind = 0;

      while (ind < pos) {
        prev = curr;
        curr = curr.next;
        ind++;
      }
      prev.next = curr.next;
    }
    this.length--;
    return curr.value;
   }
   function indexOf(k) {
    let curr = this.head;
    let ind = 0;

    while(curr) {
      if (curr.value === k) {
        return ind;
      }
      curr = curr.next;
      ind++;
    }
    return;
   }
}

module.exports = {
  removeKFromList
};
