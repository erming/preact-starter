import store from "../store";

export const setText = (text) => {
  store.setState({
    text: text
  });
}
