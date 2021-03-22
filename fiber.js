/*
 * @Author: hackftz
 * @Date: 2021-03-19 01:02:41
 * @LastEditTime: 2021-03-19 01:02:52
 * @LastEditors: hackftz
 * @FilePath: /html-test/fiber.js
 */
let workInProgressHook;
let isMount = true;

const fiber = {
  memoizedState: null,
  stateNode: App,
};

function schedule() {
  workInProgressHook = fiber.memoizedState;
  const app = fiber.stateNode();
  isMount = false;
  return app;
}

function dispatchAction(queue, action) {
  console.log('🚀 ~ file: test.js ~ line 17 ~ dispatchAction ~ queue', queue);
  console.log('🚀 ~ file: test.js ~ line 17 ~ dispatchAction ~ action', action);
  const update = {
    action,
    next: null,
  };
  if (queue.pending === null) {
    update.next = update;
  } else {
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;

  schedule();
}

function useState(initialState) {
  let hook;

  if (isMount) {
    hook = {
      queue: {
        pending: null,
      },
      memoizedState: initialState,
      next: null,
    };
    if (!fiber.memoizedState) {
      // console.log('🚀 ~ file: test.js ~ line 46 ~ useState ~ fiber.memoizedState', fiber.memoizedState);
      fiber.memoizedState = hook;
    } else {
      // console.log('🚀 ~ file: test.js ~ line 48 ~ useState ~ fiber.memoizedState', fiber.memoizedState);
      workInProgressHook.next = hook;
    }
    workInProgressHook = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }
  console.log('🚀 ~ file: test.js ~ line 55 ~ useState ~ hook', hook);

  let baseState = hook.memoizedState;
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;

    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending);

    hook.queue.pending = null;
  }
  hook.memoizedState = baseState;

  return [baseState, dispatchAction.bind(null, hook.queue)];
}

function App() {
  const [num, updateNum] = useState(0);
  // console.log('🚀 ~ file: test.js ~ line 76 ~ App ~ updateNum', updateNum);
  // console.log(`${isMount ? 'mount' : 'update'} num: `, num);

  const [num1, updateNum1] = useState(100);
  // console.log(`${isMount ? 'mount' : 'update'} num1: `, num1);

  return {
    click() {
      updateNum(num => num + 1);
    },
    focus() {
      updateNum1(num => num + 3);
    },
  };
}

window.app = schedule();
