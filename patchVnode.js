/*
 * @Author: hackftz
 * @Date: 2021-03-12 18:04:14
 * @LastEditTime: 2021-03-12 18:04:26
 * @LastEditors: hackftz
 * @Description:
 * @FilePath: /html-test/patchVnode.js
 */

function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
  if (oldVnode === vnode) return;
  const elm = (vnode.elm = oldVnode.elm);

  const oldCh = oldVnode.children;
  const ch = vnode.children;

  //新节点无文本
  if (isUndef(vnode.text)) {
    if (isDef(oldCh) && isDef(ch)) {
      // 新老节点都有子节点，对子节点进行diff
      if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
    } else if (isDef(ch)) {
      /*如果老节点没有子节点而新节点存在子节点，先清空elm的文本内容，然后为当前节点加入子节点*/
      if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '');
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue); //createEle
    } else if (isDef(oldCh)) {
      /*当新节点没有子节点而老节点有子节点的时候，则移除所有ele的子节点*/
      removeVnodes(oldCh, 0, oldCh.length - 1);
    } else if (isDef(oldVnode.text)) {
      //新老节点都是文本节点，老节点有文本，因为新节点无文本，所以直接去除ele的文本
      nodeOps.setTextContent(elm, '');
    }
  } else if (oldVnode.text !== vnode.text) {
    nodeOps.setTextContent(elm, vnode.text);
  }
}
