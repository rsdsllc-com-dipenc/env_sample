import { Controller } from "@hotwired/stimulus";
import { WELCOME_MSG } from "env";

export default class extends Controller {
  static targets = ["msg"];
  connect() {
    console.log(`Welcome Msg: ${WELCOME_MSG}`);
    this.msgTarget.textContent = WELCOME_MSG;
  }
}
