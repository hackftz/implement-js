/*
 * @Author: hackftz
 * @Date: 2021-03-12 14:30:46
 * @LastEditTime: 2021-03-12 14:33:14
 * @LastEditors: hackftz
 * @Description:
 * @FilePath: /html-test/diff.js
 */
if (false) {
} else {
  // 没有找到相同的可以复用的节点，则新建节点处理
  /* 生成一个key与旧VNode的key对应的哈希表（只有第一次进来undefined的时候会生成，也为后面检测重复的key值做铺垫） 比如childre是这样的 [{xx: xx, key: 'key0'}, {xx: xx, key: 'key1'}, {xx: xx, key: 'key2'}] beginIdx = 0 endIdx = 2 结果生成{key0: 0, key1: 1, key2: 2} */
  if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
  /*如果newStartVnode新的VNode节点存在key并且这个key在oldVnode中能找到则返回这个节点的idxInOld（即第几个节点，下标）*/
  idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
  if (isUndef(idxInOld)) {
    // New element
    /*newStartVnode没有key或者是该key没有在老节点中找到则创建一个新的节点*/
    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
  } else {
    /*获取同key的老节点*/
    vnodeToMove = oldCh[idxInOld];
    if (sameVnode(vnodeToMove, newStartVnode)) {
      /*如果新VNode与得到的有相同key的节点是同一个VNode则进行patchVnode*/
      patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
      //因为已经patchVnode进去了，所以将这个老节点赋值undefined
      oldCh[idxInOld] = undefined;
      /*当有标识位canMove实可以直接插入oldStartVnode对应的真实Dom节点前面*/
      canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
    } else {
      // same key but different element. treat as new element
      /*当新的VNode与找到的同样key的VNode不是sameVNode的时候（比如说tag不一样或者是有不一样type的input标签），创建一个新的节点*/
      createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
    }
  }
  newStartVnode = newCh[++newStartIdx];
}
