import store from "../store";

export const setFoo = (foo) => {
  store.setState({
    foo: foo
  });
}

export const setBar = (bar) => {
  store.setState({
    bar: bar
  });
}
