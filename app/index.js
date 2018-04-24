import { addToDom} from "./helpers";
import add from './add';

addToDom('<h1>Yo fam, this meal is lit!</h1>');

addToDom(`42 + 27 = ${add(42,27)}`);