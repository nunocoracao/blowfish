function _toogleZenMode(zendModeButton) {
    // Nodes selection
    const body = document.querySelector('body');
    const tocRight = document.querySelector('.toc-right');
    const tocInside = document.querySelector('.toc-inside');
    const articleContent = document.querySelector('.article-content');
    const header = document.querySelector('#single_header');


    // Add semantic class into body tag
    body.classList.toggle('zen-mode-enable');

    // Show/Hide 'toc right' and 'toc inside'
    tocRight.classList.toggle('lg:block');
    tocInside.classList.toggle('lg:hidden');

    // Change width of article content
    articleContent.classList.toggle('max-w-fit');
    articleContent.classList.toggle('max-w-prose');

    // Read i18n title from data-attributes
    const titleI18nDisable = zendModeButton.getAttribute('data-title-i18n-disable');
    const titleI18nEnable = zendModeButton.getAttribute('data-title-i18n-enable');

    if (body.classList.contains('zen-mode-enable')) {
        // Persist configuration
        //localStorage.setItem('blowfish-zen-mode-enabled', 'true');
        
        // Change title to enable
        zendModeButton.setAttribute('title', titleI18nEnable)
        // Auto-scroll to title article
        window.scrollTo(window.scrollX, header.getBoundingClientRect().top - 90);
    } else {
        //localStorage.setItem('blowfish-zen-mode-enabled', 'false');
        zendModeButton.setAttribute('title', titleI18nDisable);
        document.querySelector('body').scrollIntoView();
    }
}

function _registerZendModeButtonClick(zendModeButton) {
    zendModeButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Toggle zen-mode
        _toogleZenMode(zendModeButton);
    });
}

(function init() {
    window.addEventListener("DOMContentLoaded", (event) => {
        // Register click on 'zen-mode-button' node element
        const zendModeButton = document.getElementById('zen-mode-button');
        if(zendModeButton !== null && zendModeButton !== undefined) {
            _registerZendModeButtonClick(zendModeButton);
        }
    });
})();