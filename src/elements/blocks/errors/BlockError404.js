import {
    jsx,
    jsxFrag,
    Variable,
    Data,
    CEM
} from '@betarost/cemserver/cem.js';

const { images, svg, fn } = CEM
const BlockError404 = function () {
    return (
        <div class="c-error">
            <h1 class="c-error__title">{Variable.lang.h.notFound}</h1>
            <img class="c-error__bg" src={svg["icon/error_404"]} />
            <p class="c-error__text">{Variable.lang.p.returnToMainPage}</p>
            <a href="/" class="c-button c-button--outline" onclick={fn.siteLink}>
                <span class="c-button__wrapper">{Variable.lang.button.main_page}</span>
            </a>
        </div>
    )
}
export { BlockError404 }
// OK