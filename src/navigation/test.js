import {
    jsx,
    jsxFrag,
    load
} from "@betarost/cemserver/cem.js";

import Elements from '@src/elements/export.js';
import { fn } from '@src/functions/index.js';
import { BlockTextEditor } from '@component/blocks/index.js';

const start = function (data, ID) {
    let [Static] = fn.GetParams({ data, ID })
    load({
        ID,
        fnLoad: async () => {

        },
        fn: () => {
            return (
                <Elements.page.MainContainer>
                    <Elements.page.Container class="c-container pt--70">
                        <BlockTextEditor Static={Static} />
                    </Elements.page.Container>
                </Elements.page.MainContainer>
            )
        }
    })
    return
}

export default start;