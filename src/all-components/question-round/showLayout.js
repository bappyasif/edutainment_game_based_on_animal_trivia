import QuestionRound from '../../all-layouts/QuestionRound';
import { clearScreen } from '../../all-utils/for-dom-calls';

// showing question round layout on DOM
const showLayout = () => {
    clearScreen();
    document.body.append(QuestionRound());
};

export default showLayout;
