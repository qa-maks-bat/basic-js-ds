// const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

// function convertArrayToList(arr) {
//     return arr.reverse().reduce((acc, cur) => {
//         if (acc) {
//             const node = new ListNode(cur);
//             node.next = acc;
//             return node;
//         }

//         return new ListNode(cur);
//     }, null);
// }

// const initial = convertArrayToList([3, 3, 2, 3, 4, 3, 3, 3, 3, 3, 3, 8, 3, 3]);

// function removeKFromList(l, k) {
//     let head = l;

//     let previous = null;
//     let current = head;
//     let next = current.next;

//     console.log('START head =', head);
//     console.log('START previous =', previous);
//     console.log('START current =', current);
//     console.log('START next =', next);

//     while (current.next) {
//         if (current.value !== k) {
//             console.log('current.value !== k');
//             if (next.value !== k) {
//                 console.log('next.value !== k');
//                 current = current.next;
//                 console.log('---current =', current);
//             } else {
//                 console.log('next.value === k');
//                 previous = current;
//                 current = current.next;

//                 previous.next = current.next;
//                 current = previous.next;
//                 console.log('---current =', current);
//             }
//         } else {
//             console.log('current.value === k');
//             head = current.next;
//             current = head;
//             console.log('---NEW HEAD =', head);
//             console.log('---NEW CURRENT =', current);
//         }

//         next = current.next;
//         console.log('---next =', next, 'then NEW STEP');
//     }

//     console.log('FINISH head =', head);
//     return head;
// }

function removeKFromList(l, k) {
    let head = l;

    let previous = null;
    let current = head;
    let next = current.next;

    const checkFirstNode = (current) => {
        if (current.value === k && !current.next) {
            // console.log('checkFirstNode null');
            return (head = null);
        }
    };

    checkFirstNode(current);

    const jumpOverPlentyOfK = (next) => {
        if (!next) {
            current = previous;
            current.next = null;
        } else {
            if (next.value !== k) {
                previous.next = current.next;
                current = previous.next;
                return current;
            } else {
                current = next;
                next = current.next;
                jumpOverPlentyOfK(next);
            }
        }
    };

    while (current.next) {
        if (current.value !== k) {
            if (next.value !== k) {
                current = current.next;
            } else {
                previous = current;
                current = current.next;
                next = current.next;

                jumpOverPlentyOfK(next);
            }
        } else {
            head = current.next;
            current = head;
        }

        next = current.next;
    }

    checkFirstNode(current);

    // console.log('head =', head);

    return head;
}

module.exports = {
    removeKFromList,
};

// removeKFromList(initial, 3);
