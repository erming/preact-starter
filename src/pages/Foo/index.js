import Foo from "./Foo";
import { connect } from "unistore/preact";

const mapState = [
  "foo",
  "bar",
];

export default connect(mapState)(Foo);
