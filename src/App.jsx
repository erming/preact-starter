import { Router } from "preact-router";
import { Provider } from "unistore/preact";
import store from "./store";
import * as pages from "./pages"
import "./App.css";

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
