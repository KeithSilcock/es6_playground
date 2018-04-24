import { addToDom} from "./helpers";
import add from './add';
import SuperHuman from './person'

addToDom('<h1>Yo fam, this meal is lit!</h1>');

addToDom(`42 + 27 = ${add(42,27)}`);
addToDom('<hr>');

const cat = new SuperHuman('Not a Cat');
const dog = new SuperHuman('Man\'s best friend');

// addToDom(`${cat.speak('I AM A HOOMAN HUR DUR DUR')}`);
// addToDom(`${dog.speak(`Then I love you, ${cat.name}`)}`);

const boy = new SuperHuman('Not Christopher Robin');
addToDom(`${boy.speak('stuff')}`);

