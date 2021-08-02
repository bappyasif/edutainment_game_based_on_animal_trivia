import showMenu from './all-components/main-menu/showLayout';

showMenu();

window.addEventListener('load', () => {
    const storage = window.localStorage;
    const hasValue = storage.getItem('isFirstTime');

    if (!hasValue) {
        window.localStorage.setItem('isFirstTime', true);
    }
});
