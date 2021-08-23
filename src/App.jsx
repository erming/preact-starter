import { Router } from "preact-router";
import { Provider } from "unistore/preact";
import { setFoo, setBar } from "./actions";
import store from "./store";
import * as pages from "./pages"
import "./App.css";
import "./assets/css";

setFoo("Foo");
setBar("Bar");

export default () => {
  return (
    <div class="app">
      <Provider store={store}>
        <div class="page">
          <nav>
            <a href="/">Foo</a>
            <a href="/bar">Bar</a>
          </nav>
          <Router>
            <pages.Foo path="/"/>
            <pages.Bar path="/bar"/>
          </Router>
        </div>
      </Provider>
    </div>
  );
}
