import Bar from "./Bar";
import { connect } from "unistore/preact";

const mapState = [
  "foo",
  "bar",
];

export default connect(mapState)(Bar);
