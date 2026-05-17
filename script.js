let currentLang = 'en';

const langSwitch = document.getElementById('lang-switch');
const langLabel = document.getElementById('lang-label');
const tooltip = document.getElementById('tooltip');

function toggleLang() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';

    document.querySelectorAll('.lang-en, .lang-ru').forEach(el => {
        el.classList.add('hidden');
    });
    document.querySelectorAll('.lang-' + currentLang).forEach(el => {
        el.classList.remove('hidden');
    });

    langLabel.textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;
}

langSwitch.addEventListener('click', toggleLang);

function copyDiscord() {
    const text = 'spoqeer';

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showTooltip).catch(fallbackCopy);
    } else {
        fallbackCopy();
    }

    function fallbackCopy() {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showTooltip();
    }

    function showTooltip() {
        tooltip.textContent = currentLang === 'ru' ? 'Скопировано!' : 'Copied to clipboard!';
        tooltip.classList.add('show');
        setTimeout(() => tooltip.classList.remove('show'), 2000);
    }
}
