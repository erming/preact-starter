import { Fragment } from "preact";
import { Example } from "@/components";

export default ({ bar }) => {
  return (
    <Fragment>
      <Example>
        <div>{bar}</div>
      </Example>
    </Fragment>
  );
}
