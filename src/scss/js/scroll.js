const headerScroll = () => {

    let lastScroll = 0;
    const header = document.querySelector('.site-header__navigation');
    const headerModifyer = 'site-header__scroll';

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // if(window.scrollY > 120) {
        //     header.classList.add(headerModifyer)
        // } else {
        //     header.classList.remove(headerModifyer)
        // }

        if (currentScroll > 80 && currentScroll > lastScroll) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    })
}

headerScroll()
