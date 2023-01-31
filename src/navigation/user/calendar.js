import {
    jsx,
    jsxFrag,
    load,
    Helpers,
    initReload,
    Variable
} from "@betarost/cemserver/cem.js";
import { fn } from '@src/functions/index.js';
import svg from '@assets/svg/index.js';

const listColors = [
    "linear-gradient(89.03deg, #2C66B8 0.54%, #8859EC 97.66%)",
    "linear-gradient(107.19deg, #5F479B 1.5%, rgba(40, 28, 71, 0.2) 109.67%)",
    "linear-gradient(272.66deg, #343B4F -1.2%, rgba(51, 58, 78, 0.35) 116.4%)",
    "linear-gradient(56.57deg, #2973FF 0%, #8846D3 51.56%, #FF22AC 105.28%)",
    "linear-gradient(225deg, #284BC5 0%, #11B883 100%)",
    "linear-gradient(125.97deg, #9B51E0 -0.04%, #E051D2 121.46%)"
];

Helpers.moment.updateLocale("en", {week: {dow: 1}});
const month = Helpers.moment().startOf("month");
const startDay = Helpers.moment().startOf("month").startOf("week");
const day = startDay.clone().subtract(1, "day");
const isCurrentDay = (day) => Helpers.moment().isSame(day, "day");

const prevHandler = () => Helpers.moment().subtract(1, "month");
console.log(Helpers.moment().subtract(1, "month"))

const listDate = [...Array(42)].map(() => day.add(1, "day").clone());

// {
    //     _id: 1,
    //     date: 1,
    //     title: '32',
    //     createdDate: new Date().toLocaleDateString(),
    //     completed: '',
    //     notifyDate: new Date().toISOString()
    // },

const listNames = {
    weekDayNames: ['Mon', 'Tue', 'Wed', 'Thu' , 'Fri', 'Sun', 'Sat']
}

const addDataNotes = [];


const addNote = (id) => {
    // если поле для ввода текста пустое, ничего не делаем
    // if (textarea.value === '') return

    // получаем значение этого поля
    // let text = textarea.value

    // объявляем переменную для даты напоминания
    // с помощью тернарного оператора
    // присваиваем этой переменной null или значение соответствующего поля
    let date = new Date().toISOString();
    // dateInput.value === '' ? date = null : date = dateInput.value

    // заметка представляет собой объект
    let note = {
        _id: id,
        date: id,
        description: '',
        // дата создания
        createdDate: new Date().toLocaleDateString(),
        // индикатор выполнения
        completed: '',
        // дата напоминания
        notifyDate: date
    }
    return note
}

function randomColor(colors){
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    
    return randomColor;
}

const addForm = function (Static) {
    if (Static.modal == true) {
        return (
            <div>
                <div class="c-modal c-modal--open">
                    <section class="c-modal__dialog">
                        <header class="c-modal__header">
                            <h2 class="c-modal__title">Название</h2>
                            <button
                            type="button"
                            class="c-modal__close"
                            onclick={() => {
                                Static.modal = false
                                initReload()
                            }}
                            ></button>
                        </header>
                        <div class="c-modal__body">
                            <div class="create_post_container">
                                <div
                                    class="c-chapter create_post_chapter create_post_main_text"
                                    contenteditable="true"
                                    Element={($el) => {
                                        Static.elTitle = $el
                                    }}
                                    oninput={()=> {
                                        Static.active.title = Static.elTitle.textContent
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div class="c-modal__footer">
                            <button
                            class={[
                                "c-button c-button--gradient2",
                                // !Static.isValid ? "c-button--inactive" : "",
                            ]}
                            type="button"
                            // ref={elemButton}
                            onClick={() => {
                                Static.modal = false
                                initReload()
                            }}
                            >
                                <span class="c-button__text">{Variable.lang.button.send}</span>
                            </button>
                        </div>
                    </section>
                </div>
                <div class="c-backdrop c-backdrop--show"></div>
            </div>
        )
    } else {
        null
    }
}



// const endDay = Helpers.moment().endOf('month').endOf('week');
// const calendar = [];

// while (!day.isAfter(endDay)) {
//     calendar.push(day.clone())
//     day.add(1, 'day')
// }

const start = function (data, ID) {

    let [Static] = fn.GetParams({ data, ID })

    load({
        ID,
        fnLoad: async () => {
            Static.tmpTest = listDate
            Static.notes = addDataNotes
            Static.active = null
            Static.modal = false
            Static.elTitle = null
        },
        fn: () => {
            return (
                <div class="blog_page_container c-main__body">
                    <div class="calendar">
                        <div class="calendar-title">
                            <h2>{month.format("MMMM")}
                                <span> {month.format("YYYY")}</span>
                            </h2>
                            <div class="calendar-subtitle">
                                <button
                                    onClick={() => {
                                        prevHandler()
                                        initReload()
                                    }}
                                >
                                    <img src={svg["calendar-arrow"]}/>
                                </button>
                                    <h3>{month.format("MMMM YYYY")}</h3>
                                <button
                                    onClick={() => {
                                        console.log("next")
                                    }}
                                >
                                    <img class="calendar-subtitle-arrow" src={svg["calendar-arrow"]}/>
                                </button>
                            </div>
                        </div>
                        <div class="calendar-day-name">
                            {listNames.weekDayNames.map(function (name) {
                                return (
                                    <span>{name}</span>    
                                )
                            })}
                        </div>
                        <div class="calendar-container">
                            {Static.tmpTest.map((item, index) => {
                                return (
                                    <div
                                        class="calendar-cell"
                                        // id={index + 1}
                                        onclick={() => {
                                            // Static.tmpTest.splice(index, 1, addNote(index + 1))
                                            Static.active = item
                                            // addNotes()
                                            initReload()
                                        }}
                                        
                                    >
                                        <span 
                                            class={["calendar-day",
                                            isCurrentDay(item) ? "calendar-day_active" : null
                                            ]}
                                            onDblClick={() => {
                                                Static.modal = true
                                                initReload()
                                            }}
                                            // style={[item && item.title != "" ? "color: #ffffff" : null]}
                                        >
                                            {item.format('D')}</span>
                                        <div>
                                            <div class={["calendar-notes", 
                                                item && item.title != "" ? "calendar-notes--show" : null
                                            ]}
                                            // style={[item && item.title != "" ? `background: ${randomColor(listColors)}` : null]}
                                            >
                                                <p>
                                                    {!item
                                                    ?
                                                    null
                                                    :
                                                    item.title
                                                }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div class="modals-test">
                            {addForm(Static)}
                        </div>
                    </div>
                </div>
            )
        }
    })
}

export default start;