import {
    jsx,
    jsxFrag,
    Helpers,
    Variable,
    sendApi
} from '@betarost/cemjs';

import svg from '@assets/svg/index.js';
import {
    Avatar,
    LentaMedia
} from '@component/element/index.js';

let elem = []
const BlockQuestionsShow = function ({ item }) {
    console.log('=2d92a9=', item)
    elem = []
    elem[0] = []
    return (
        <div class="answer_content">
            <div class="question_author_block">
                <Avatar author={item.author} nickName={item.author.nickname} />
            </div>
            <p class="question_title">{item.title}</p>
            <div class="question_text"> {Helpers.clearText(item.text)}</div>
            <LentaMedia
                items={item.media}
                numIndex={0}
                elem={elem}
                path={"/assets/upload/question/"}
            />
            <div class="answers_block">
                <p>
                    {" "}
                    <img src={svg["question_answers"]} />{" "}
                    <b>{item.statistic.answer}</b>
                </p>
                <p>
                    {" "}
                    <img src={svg["question_views"]} />{" "}
                    <b>{item.statistic.view}</b>
                </p>
                <p>
                    {" "}
                    <img src={svg["question_time"]} />{" "}
                    <b>{Helpers.getDateFormat(item.showDate, "lenta")}</b>{" "}
                </p>
                {/* {myInfo._id !== item.author._id && (
                  <div
                    data-action="answerModal"
                    class="btn-answer"
                    data-needauth="true"
                  >
                    <a class="btn-gr-answer">
                      <span>{Variable.lang.button.giveAnswer}</span>
                    </a>
                  </div>
                )} */}
                {/* {{#if myInfo._id}}
                            {{#is question.author._id myInfo._id}}
        
                            {{else}}
                                {{#notif question.close}}
                                    <div data-action="answerModal" class="btn-answer" data-needauth="true">
                                        <a class="btn-gr-answer"><span>{{lang.button.giveAnswer}}</span></a>
                                    </div>
                                {{/notif}}
                            {{/is}}
                        {{/if}} */}
            </div>

            <div class="user_news_block">{/* {{>answers}} */}</div>
        </div>
    )
}
//I check
export { BlockQuestionsShow }