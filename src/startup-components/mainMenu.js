import { MainMenu } from '../all-layouts/MainMenu';

export const showMenu = () => {
    document.body.innerHTML = '';
    document.body.append(MainMenu());
};
