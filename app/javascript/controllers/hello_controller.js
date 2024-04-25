import { Controller } from "@hotwired/stimulus";
// import { WELCOME_MSG } from "env";
import * as env from "env";

export default class extends Controller {
  static targets = ["msg"];
  connect() {
    // console.log(`Welcome Msg: ${WELCOME_MSG}`);
    // this.msgTarget.textContent = WELCOME_MSG;

    console.log(Object.getOwnPropertyNames(env).sort());

    let welcome_msg = "Unable to read from ENV";

    if (env.WELCOME_MSG != undefined) {
      welcome_msg = env.WELCOME_MSG;
    }

    this.msgTarget.textContent = welcome_msg;
  }
}
