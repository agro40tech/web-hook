import * as MonyActionsCreators from "./get__Mony";
import * as SuccessAuthActionsCreators from "./auth__User";

const ActionCreators = {
  ...MonyActionsCreators,
  ...SuccessAuthActionsCreators,
};

export default ActionCreators;
