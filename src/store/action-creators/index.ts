import * as MonyActionsCreators from "./get__Mony";
import * as SuccessAuthActionsCreators from "./auth__User";
import * as SetLinksActionsCreators from "./set__Links";
import * as SetActiveTheme from "./change__Active-theme";

const ActionCreators = {
  ...MonyActionsCreators,
  ...SuccessAuthActionsCreators,
  ...SetLinksActionsCreators,
  ...SetActiveTheme,
};

export default ActionCreators;
