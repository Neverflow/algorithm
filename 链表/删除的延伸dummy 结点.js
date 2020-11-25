/**
 * 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

    示例 1:

    输入: 1->2->3->3->4->4->5
    输出: 1->2->5
    示例 2:
    输入: 1->1->1->2->3
    输出: 2->3
 */

/**
   在链表题中，经常会遇到这样的问题：链表的第一个结点，因为没有前驱结点，导致我们面对它无从下手。这时我们就可以用一个 dummy 结点来解决这个问题。
   所谓 dummy 结点，就是咱们人为制造出来的第一个结点的前驱结点，这样链表中所有的结点都能确保有一个前驱结点，也就都能够用同样的逻辑来处理了。
   dummy 结点能够帮助我们降低链表处理过程的复杂度，处理链表时，不设 dummy 结点思路可能会打不开；设了 dummy 结点的话，就算不一定用得上，也不会出错。
*/

import { ListNode } from "./链表构造函数（Base）";
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
	if (!head || !head.next) {
		return head;
	}

	// 创dummy空节点
	let dummy = new ListNode();
	// dummy 永远指向头结点
	dummy.next = head;
	// cur 从 dummy 开始遍历
	let cur = dummy;
	// 当 cur 的后面有至少两个结点时
	while (cur.next && cur.next.next) {
		if (cur.next.val === cur.next.next.val) {
			// 若值重复，则记下这个值
			let val = cur.next.val;
			// 反复地排查后面的元素是否存在多次重复该值的情况
			while (cur.next && cur.next.val === val) {
				// 若有，则删除
				cur.next = cur.next.next;
			}
		} else {
			cur = cur.next;
		}
	}
	return dummy.next;
};
