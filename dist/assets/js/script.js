'use strict';

const main = () => {

    const theme = 'theme'
    const dark = 'dark';
    const light = 'light';
    const body = document.body;
    const jsCardLinkEl = document.querySelector('.js-card__link');
    const themeStore = localStorage.getItem('theme');

    const init = () => {
        if (!themeStore) {
            body.classList.remove(dark);
        } else {
            if (themeStore == dark) {
                body.classList.add(dark);
            } else {
                body.classList.remove(dark);
            }
        }
    }

    const action = () => {
        jsCardLinkEl.addEventListener('click', e => {
            e.preventDefault();
    
            localStorage.getItem(theme) == dark 
                ? localStorage.setItem(theme, light)
                : localStorage.setItem(theme, dark); 
    
            jsCardLinkEl.title == 'noite'
                ? jsCardLinkEl.title = 'dia'
                : jsCardLinkEl.title = 'noite';
            
            body.classList.toggle(dark);
        });
    }

    const build = () => {
        init();
        action();
    }
    build();

}
main();