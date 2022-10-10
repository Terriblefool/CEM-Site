import {
    jsx,
    jsxFrag,
    initOne,
    setValue,
    Variable,
    getValue,
    initReload,
    sendApi
} from "@betarost/cemjs";
import svg from "@assets/svg/index.js";
import { allValidation } from "@src/functions.js";
import { sendResetMessage, giveNewCodeForReset } from "@src/apiFunctionsE.js";
import { If } from '@component/helpers/All.js';

let time, wayType
let pass = new Array(6).fill("");

const handleKeyUp = (e, index) => {
    let arrElements = e.target.parentElement.children;
    if (e.key === "Backspace" && pass[index] !== "") {
        pass[index] = "";
        arrElements[index].focus();
    } else if (e.key === "Backspace" && pass[index] == "" && index !== 0) {
        pass[index - 1] = "";
        arrElements[index - 1].value = ""
        arrElements[index - 1].focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
        arrElements[index - 1].focus();
    }
    if (e.key === "ArrowRight" && index < arrElements.length - 1) {
        arrElements[index + 1].focus();
    }
};


const change = async (e, index) => {
    let tmp = false;
    let arrEvent = e.target.parentElement.children;
    if (e.inputType === "insertFromPaste" &&
        allValidation(e.target.value, "inputNumberPaste")) {
        let strArr = e.target.value.split("");
        if (pass[index] === "") {
            for (let i = index; i < index + strArr.length; i++) {
                if (pass[i] === "") {
                    (arrEvent[i].value = strArr[i - index]),
                        (pass[i] = strArr[i - index]);
                } else {
                    break;
                }
            }
        } else {
            e.target.value = pass[index];
        }
        for (let i = 0; i < index; i++) {
            if (arrEvent[i].value === "") {
                tmp = false;
                arrEvent[i].focus();
                break;
            }
        }
        for (let i = index; i < arrEvent.length; i++) {
            if (arrEvent[i].value === "") {
                tmp = false;
                arrEvent[i].focus();
                break;
            }
        }
    } else if (e.inputType !== "deleteContentBackward") {
        e.target.value = e.target.value[0];
        let isNumber = allValidation(e.target.value, "inputNumber");
        if (!isNumber) {
            e.target.value = "";
            pass[index] = "";
            e.target.focus();
        } else {
            pass[index] = e.target.value;
            let arr = e.target.parentElement.children;
            for (let i = 0; i < index; i++) {
                if (arr[i].value === "") {
                    tmp = false;
                    arr[i].focus();
                    break;
                }
            }
            for (let i = index; i < arr.length; i++) {
                if (arr[i].value === "") {
                    tmp = false;
                    arr[i].focus();
                    break;
                }
            }

        }
    }
    let strPass = pass.join("").trim()
    if (strPass.length === 6) {
        let data = { value: { code: strPass } }
        data.value[wayType] = true
        const response = await sendApi.create("confirm", data);
        if (!response || response.error) {
            pass = new Array(6).fill("");
            for (let i = 0; i < pass.length; i++) {
                arrEvent[i].value = "";
                pass[i] = "";
            }
            arrEvent[0].focus()
            initReload()
            Variable.SetModals({ name: "ModalAlarm", data: { icon: "alarm_icon", text: Variable.lang.error_div[response.error] } }, true)

        } else {
            Variable.SetModals({ name: "ModalAfterRegisterForm", data: {} })
        }

    }
};
const timerFunc = () => {
    const timer = setInterval(async () => {
        time = time - 1
        initReload()
        if (time <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

const resetTimer = async () => {
    time = 60
    let data = { value: { newCode: true } }
    data.value[wayType] = true
    const response = await sendApi.create("confirm", data);
    timerFunc();
}

const ModalConfirmCode = function ({ way }) {
    wayType = way
    initOne(
        () => {
            time = 60
            timerFunc()
        }
    )
    return (
        <div class="c-modal c-modal--open" id="ModalReset">
            <section class="c-modal__dialog">
                <header class="c-modal__header">
                    <button
                        type="button"
                        class="c-modal__close"
                        onclick={() => {
                            Variable.DelModals("ModalConfirmCode")
                        }}
                    ></button>
                </header>
                <div class="c-modal__body">
                    <div class="reset_password">
                        <div class="reset_password_step2">
                            <p>
                                <If
                                    data={way == "email"}
                                    dataIf={Variable.lang.text.confirmEmail}
                                    dataElse={Variable.lang.text.confirmPhone}
                                />
                            </p>
                            <div class="reset_password_input_block">
                                <form id="resetPassword2" data-button_id="reset_next_step-2">
                                    {pass.map((item, i) => {
                                        return (
                                            <input
                                                class="test12345"
                                                type="text"
                                                onKeyUp={(e) => handleKeyUp(e, i)}
                                                oninput={(e) => change(e, i)}
                                            ></input>
                                        );
                                    })}
                                </form>
                            </div>
                            <If
                                data={time > 0}
                                dataIf={
                                    <div class="reset_timer_block">
                                        {Variable.lang.text.timeCode}
                                        <div class="reset_timer">{time < 10 ? `0:0${time}` : `0:${time}`}</div>
                                    </div>
                                }
                                dataElse={
                                    <a class="reset_timer_success"
                                        onclick={resetTimer}
                                    >
                                        {Variable.lang.a.newCodeConfirm}
                                    </a>
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ModalConfirmCode;