import * as MonyActionsCreators from "./get__Mony";
import * as SuccessAuthActionsCreators from "./auth__User";
import * as SetLinksActionsCreators from "./set__Links";

const ActionCreators = {
  ...MonyActionsCreators,
  ...SuccessAuthActionsCreators,
  ...SetLinksActionsCreators,
};

export default ActionCreators;
