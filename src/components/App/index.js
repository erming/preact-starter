import App from "./App";
import "./App.css";

import { connect } from "unistore/preact";

const mapState = (state) => ({
  text: state.text
});

export default connect(mapState)(App);
