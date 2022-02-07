import { REFS } from "./constants";
import { generateBoxes } from "./utils/generateBoxes";

const clear = () => (REFS.BOXES.innerHTML = "");

const create = () => generateBoxes(Number(REFS.INPUT_VALUE.value));

REFS.CREATE_BUTTON.addEventListener("click", create);
REFS.CLEAR_BUTTON.addEventListener("click", clear);
