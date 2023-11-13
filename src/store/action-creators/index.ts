import * as MonyActionsCreators from "./get__Mony";
import * as SuccessAuthActionsCreators from "./auth__User";
import * as SetLinksActionsCreators from "./set__Links";
import * as SetActiveTheme from "./change__Active-theme";
import * as RegistrationUser from "./reg__User";
import * as RefreshToken from "./check__auth";
import * as LogoutUser from "./logout__User";

const ActionCreators = {
  ...MonyActionsCreators,
  ...SuccessAuthActionsCreators,
  ...SetLinksActionsCreators,
  ...SetActiveTheme,
  ...RegistrationUser,
  ...RefreshToken,
  ...LogoutUser,
};

export default ActionCreators;
