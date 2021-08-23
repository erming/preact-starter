import { Fragment } from "preact";
import { Example } from "@/components";

export default ({ foo }) => {
  return (
    <Fragment>
      <Example>
        <div>{foo}</div>
      </Example>
    </Fragment>
  );
}
