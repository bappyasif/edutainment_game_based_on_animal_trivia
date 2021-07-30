import QuestionRound from '../../all-layouts/QuestionRound';
import { clearScreen } from '../../all-utils/for-dom-calls';

// showing question round layout on DOM
const showLayout = (mode) => {
    clearScreen();
    document.body.append(QuestionRound(mode));
};

export default showLayout;
