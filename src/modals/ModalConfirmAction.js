import {
  jsx,
  jsxFrag,
  Variable,
  init,
  load,
  CEM
} from "@betarost/cemserver/cem.js";
import { Avatar } from "@elements/element/Avatar.js";
// import { fn } from '@src/functions/index.js';

const fn = CEM.fn

const ModalConfirmAction = function ({ action, text, button }, ID) {
  // console.log('=e3075d ModalConfirmAction =', action, text, button, ID)
  let close = true
  load({
    ID,
    fn: () => {
      return (
        <div class="c-modal c-modal--open" id="ModalWhoLike" onclick={function (e) {
          if (close) {

            fn.modals.close(ID)
          }
        }}>
          <section class="c-modal__dialog" onmouseover={function () {

            close = false

          }}
            onmouseleave={function () {

              close = true

            }}>
            <header class="c-modal__header">
              <button
                type="button"
                class="c-modal__close"
                onclick={() => { Variable.DelModals(ID) }}
              ></button>
            </header>
            <div class="c-modal__body">
              <div class="modal_doRole">
                <h5>{text}</h5>
                <div
                  onclick={action}
                >
                  <button class="c-button c-button--gradient2">
                    <span class="c-button__text">{button}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  })
};
export default ModalConfirmAction;
// OK