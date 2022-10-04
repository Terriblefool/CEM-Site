import {
    jsx,
    jsxFrag,
    setAction,
    setValue,
    Variable,
    getValue,
    initReload,
    sendApi,
    initGo
} from '@betarost/cemjs';
import svg from "@assets/svg/index.js";
import { If } from '@component/helpers/All.js';
import { siteLink } from '@src/functions.js'
import youtube from '@assets/svg/youtube_icon.svg'
// const showAllLangMedia = function (e, target) {
//     e.preventDefault()
//     if (target.parentNode.children[0].style == "display: none;") {
//         target.parentNode.children[0].style = "";
//     } else {
//         target.parentNode.children[0].style = "display: none;";
//     }
// }
let elem = {}

const ModalMobileMainSettings = function ({ }, reload) {
    let socialIcon

    const showSocial = function (e) {
        socialIcon[e.currentTarget.dataset.type] = !socialIcon[e.currentTarget.dataset.type];
        // initGo("mainFooter", true);
    }

    if (!reload) {

        elem.telegram = Variable.setRef()
        elem.tiktok = Variable.setRef()
        elem.youtube = Variable.setRef()

        socialIcon = {
            telegram: false,
            youtube: false,
            tiktok: false
        }
    }

    return (
        <div class="c-modal c-modal--open c-modal--fullscreen" id="ModalMobileMainSettings">
            <section class="c-modal__dialog">
                <header class="c-modal__header">
                    {/* <h2 class="c-modal__title">{Variable.lang.h.modal_login}</h2> */}
                    <div class="language language_visible" data-action="siteLanguageChangeModal">
                        <div class="selectlink">
                            <div class="selectlink-control">
                                <img class="language_change_world" src={svg.language_change_world} /> {Variable.lang.lang_orig}
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="c-modal__close"
                        onclick={() => { Variable.Modals = [] }}
                    ></button>
                </header>
                <div class="c-modal__body">
                    <div class="user_mobile_menu_part">
                        <div class="user_mobile_menu_content">
                            {Variable.lang.text.menu}
                        </div>
                    </div>
                    <If
                        data={Variable.auth}
                        dataIf={<div>
                            <div class="user_mobile_menu_content user_mobile_menu_main_content">
                                <a onclick={siteLink} class="user_icon_mobile_visible user_icon" href={`/user/${Variable.myInfo.nickname}`}>
                                    <img src={svg["profile_icon-1"]} />
                                    <span class="mobile_user_menu_link">{Variable.lang.a.profile}</span>
                                </a>
                                {/* <a onclick={siteLink} class="user_icon_mobile_visible user_icon" href="/user/chats/">
                                    <img src={svg["profile_icon-2"]} />
                                    <span class="mobile_user_menu_link">{Variable.lang.a.chats}</span>
                                </a> */}
                                <a onclick={siteLink} class="user_icon_mobile_visible user_icon" href="/user/posts/">
                                    <img src={svg["profile_icon-5"]} />
                                    <span class="mobile_user_menu_link">{Variable.lang.h.createPost}</span>
                                </a>
                                <a onclick={siteLink} class="user_icon_mobile_visible user_icon" href="/user/awards/">
                                    <img src={svg["profile_icon-4"]} />
                                    <span class="mobile_user_menu_link">{Variable.lang.a.awards}</span>
                                </a>
                                {/* <a data-updating="true" onclick={siteLink} class="user_icon_mobile_visible user_icon" href="/user/quests/">
                                    <img src={svg["profile_icon-10"]} />
                                    <span class="mobile_user_menu_link">{Variable.lang.a.tasks}</span>
                                </a> */}
                                <a onclick={siteLink} class="user_icon_mobile_visible user_icon" href="/user/wallet/">
                                    <img src={svg.absolutely_new_wallet} />
                                    <span class="mobile_user_menu_link">{Variable.lang.a.wallet}</span>
                                </a>
                                <a onclick={siteLink} class="user_icon_mobile_visible user_icon" href="/user/affiliate/">
                                    <img src={svg["profile_icon-3"]} />
                                    <span class="mobile_user_menu_link">{Variable.lang.a.affiliate}</span>
                                </a>
                            </div>
                            <div class="user_mobile_menu_part">
                                <div class="user_mobile_menu_content">
                                    {Variable.lang.text.sections}
                                </div>
                            </div>
                        </div>}
                    />
                    <div class="user_mobile_menu_content user_mobile_menu_main_content">
                        <a
                            onclick={siteLink}
                            class={`user_icon_mobile_visible user_icon ${Variable.dataUrl.adress == "lenta-users" ? "user_icon_active" : ""}`}
                            href="/lenta-users/"
                        >
                            <img src={svg.user_news_page} />
                            <span class="mobile_user_menu_link">{Variable.lang.span.userNews}</span>
                        </a>
                        <a
                            onclick={siteLink}
                            class={`user_icon_mobile_visible user_icon ${Variable.dataUrl.adress == "experts" ? "user_icon_active" : ""}`}
                            href="/experts/"
                        >
                            <img src={svg.expert_menu_icon} />
                            <span class="mobile_user_menu_link">{Variable.lang.a.experts}</span>
                        </a>
                        <a
                            onclick={siteLink}
                            class={`user_icon_mobile_visible user_icon ${Variable.dataUrl.adress == "question" ? "user_icon_active" : ""}`}
                            href="/question/"
                        >
                            <img src={svg.user_mobile_answers_and_questions} />
                            <span class="mobile_user_menu_link">{Variable.lang.a.questionsAnswers}</span>
                        </a>
                        {/* <a
                            data-updating="true"
                            onclick={siteLink}
                            class="user_icon_mobile_visible user_icon"
                            href={`${Variable.lang.url}chats/`}
                        >
                            <img src={svg.community_chat_menu_icon} />
                            <span class="mobile_user_menu_link">{Variable.lang.a.chatsPublic}</span>
                        </a> */}
                        <a
                            onclick={siteLink}
                            class="user_icon_mobile_visible user_icon"
                            href={`${Variable.lang.url}news/`}
                        >
                            <img src={svg.news_menu_icon1} />
                            <span class="mobile_user_menu_link">{Variable.lang.a.news}</span>
                        </a>
                        <a
                            onclick={siteLink}
                            class="user_icon_mobile_visible user_icon"
                            href={`${Variable.lang.url}blog/`}
                        >
                            <img src={svg.blog_menu_icon1} />
                            <span class="mobile_user_menu_link">{Variable.lang.a.blog}</span>
                        </a>
                        {/* <a
                            data-updating="true"
                            onclick={siteLink}
                            class="user_icon_mobile_visible user_icon"
                            href={`${Variable.lang.url}startups/`}
                        >
                            <img src={svg.startup_menu_icon} />
                            <span class="mobile_user_menu_link">{Variable.lang.a.starups}</span>
                        </a> */}
                        <a
                            onclick={siteLink}
                            class="user_icon_mobile_visible user_icon"
                            href={`${Variable.lang.url}list-trade/`}
                        >
                            <img src={svg.exchange_menu_icon} />
                            <span class="mobile_user_menu_link">{Variable.lang.a.trade}</span>
                        </a>
                        <a
                            onclick={siteLink}
                            class="user_icon_mobile_visible user_icon"
                            href={`${Variable.lang.url}list-exchange/`}
                        >
                            <img src={svg.exchanger_menu_icon} />
                            <span class="mobile_user_menu_link">{Variable.lang.a.exchange}</span>
                        </a>
                        {/* <a
                            data-updating="true"
                            onclick={siteLink}
                            class="user_icon_mobile_visible user_icon"
                            href={`${Variable.lang.url}ico-rating/`}
                        >
                            <img src={svg.ico_rating} />
                            <span class="mobile_user_menu_link">{Variable.lang.a.icoRating}</span>
                        </a> */}
                        <div class="mobile_header_socials desktop_dn">
                            <div class="social-icons">
                                <div class="footer-icon-block">
                                    <div ref={elem.telegram} hidden={true} class="footer-media-full">
                                        <div>
                                            <a
                                                target="_blank"
                                                href="https://t.me/cryptoemergencychat"
                                                rel="nofollow noopener"
                                                data-type="social"
                                                data-count="telegramRu"
                                            >
                                                <img src={svg["telegram-icon"]} /> Русский
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                target="_blank"
                                                href="https://t.me/emergencycrypto"
                                                rel="nofollow noopener"
                                                data-type="social"
                                                data-count="telegramEn"
                                            >
                                                <img src={svg["telegram-icon"]} /> English
                                            </a>
                                        </div>
                                    </div>
                                    <a id="header_telegram_icon" onclick={(e) => {
                                        if (elem.telegram().hidden === true) {
                                            elem.telegram().hidden = false
                                            Variable.OutHideWindows.push([elem.telegram, elem.telegram])
                                        } else {
                                            elem.telegram().hidden = true
                                        }
                                        elem.tiktok().hidden = true
                                        elem.youtube().hidden = true
                                        e.stopPropagation();
                                    }} class="icon" data-type="telegram">
                                        <img src={svg["telegram-icon"]} />
                                    </a>
                                </div>
                                {/* <!--
                                <div class="footer-icon-block">
                                    <div style="display:none;" class="footer-media-full">
                                        <div><a target="_blank" href="https://www.instagram.com/cryptoemergency/"><img src="/assets/icon/instagram-icon.svg"/> Русский </a></div>
                                        <div><a target="_blank" href="https://www.instagram.com/cryptoemergencyrussia/"><img src="/assets/icon/instagram-icon.svg"/> English </a></div>
                                    </div>
                                    <a id="header_instagram_icon" class="icon"><img src="/assets/icon/instagram-icon.svg" /></a>
                                </div>
                                --> */}




                                <div class="footer-icon-block">
                                    <div
                                        // style={socialIcon.youtube ? '' : 'display:none;'}
                                        hidden={true}
                                        class="c-socialicon__tooltip"
                                        ref={elem.youtube}
                                    >
                                        <div>
                                            <a
                                                target="_blank"
                                                href="https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/"
                                            >
                                                <img src={youtube} /> Русский
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                target="_blank"
                                                href="https://www.youtube.com/channel/UCdDWOveIuvqkyusDK1gv4ig/"
                                            >
                                                <img src={youtube} /> English
                                            </a>
                                        </div>
                                    </div>
                                    <a class="icon" onclick={(e) => {
                                        if (elem.youtube().hidden === true) {
                                            elem.youtube().hidden = false
                                            Variable.OutHideWindows.push([elem.youtube, elem.youtube])
                                        } else {
                                            elem.youtube().hidden = true
                                        }
                                        elem.tiktok().hidden = true
                                        elem.telegram().hidden = true
                                        e.stopPropagation();
                                    }} data-type="social" data-count="youtube">
                                        <img src={svg["youtube-icon"]} />
                                    </a>
                                </div>
                                {/* <!--
                                <div class="footer-icon-block">
                                    <a href="https://www.facebook.com/groups/cryptoemergency/" class="icon"><img src="/assets/icon/facebook-icon.svg" /></a>
                                </div>
                                --> */}
                                <div class="footer-icon-block">
                                    <a href="https://twitter.com/cryptoemergency" target="_blank" class="icon" rel="nofollow noopener" data-type="social" data-count="twitter">
                                        <img src={svg["twitter-icon"]} />
                                    </a>
                                </div>
                                <div class="footer-icon-block">
                                    <a href="https://discord.com/invite/Qdm7W8DjYc" target="_blank" class="icon" rel="nofollow noopener" data-type="social" data-count="discord">
                                        <img src={svg["discord-icon"]} />
                                    </a>
                                </div>
                                <div class="footer-icon-block">
                                    <a href="https://github.com/CryptoEmergency" target="_blank" class="icon" rel="nofollow noopener" data-type="social" data-count="discord">
                                        <img src={svg["github-icon2"]} />
                                    </a>
                                </div>
                                <div class="footer-icon-block">
                                    <div ref={elem.tiktok} hidden={true} class="footer-media-full footer-media-full-right">
                                        <div>
                                            <a target="_blank" href="https://vm.tiktok.com/ZSefEMs2c/" rel="nofollow noopener" data-type="social" data-count="tiktokRu">
                                                <img src={svg["tiktok-icon"]} /> Русский
                                            </a>
                                        </div>
                                        <div>
                                            <a target="_blank" href="https://vm.tiktok.com/ZSefExJrr/" rel="nofollow noopener" data-type="social" data-count="tiktokEn">
                                                <img src={svg["tiktok-icon"]} /> English
                                            </a>
                                        </div>
                                    </div>
                                    <a id="header_tiktok_icon" onclick={(e) => {
                                        if (elem.tiktok().hidden === true) {
                                            elem.tiktok().hidden = false
                                            Variable.OutHideWindows.push([elem.tiktok, elem.tiktok])
                                        } else {
                                            elem.tiktok().hidden = true
                                        }
                                        elem.youtube().hidden = true
                                        elem.telegram().hidden = true
                                        e.stopPropagation();
                                    }} class="icon">
                                        <img src={svg["tiktok-icon"]} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <If
                        data={Variable.auth}
                        dataIf={<div>
                            <div class="user_mobile_menu_part">
                                <div class="user_mobile_menu_content">
                                    {Variable.lang.text.control}
                                </div>
                            </div>
                            <div class="user_mobile_menu_bottom">
                                <div class="user_mobile_menu_content">
                                    <a class="user_icon_mobile_visible user_icon" href="/logout/" onclick={siteLink}>
                                        <img src={svg["exit-icon"]} /> <span class="mobile_user_menu_link">{Variable.lang.a.exit}</span>
                                    </a>
                                </div>
                            </div>
                        </div>}
                    />
                </div>
            </section>
        </div>
    )
};


export default ModalMobileMainSettings;