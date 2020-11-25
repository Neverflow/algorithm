/**
 * 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

    示例 1:

    输入: 1->1->2
    输出: 1->2
    
    示例 2:

    输入: 1->1->2->3->3
    输出: 1->2->3
 */

import { ListNode } from "./链表构造函数（Base）";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
	// 设定 cur 指针，初始位置为链表第一个结点
	let cur = head;

	while (cur && cur.next) {
		// 若当前结点和它后面一个结点值相等（重复）
		if ((cur.val = cur.next.val)) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
    }
    
    return head;
};
