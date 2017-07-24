// @flow
import type { UserType } from "user-module";
import type { ApplicationPropsType } from "types.js";

type UserContextType = {
    user: UserType
}
export const application = (props: ApplicationPropsType) => (
    <div>Welcome to {props.name}</div>
);