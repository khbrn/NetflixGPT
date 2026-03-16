import { Auth } from "firebase/auth";

declare module './firebase.js' {
  export const auth: Auth;
}
