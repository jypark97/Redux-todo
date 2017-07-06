const createStore = (reducer) => {
  let store;
  let listeners = [];

  const getStore = () => store;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(i => i());
  }

  const subscribe = (fn) => {
    listeners.push(fn);
  }

  return { dispatch, getStore, subscribe }
}



function render() {

}

store.subscribe(render)
render()
