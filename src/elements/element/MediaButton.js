import {
    jsx,
    jsxFrag,
    Variable,
    initReload,
    CEM
} from '@betarost/cemserver/cem.js';

const { images, svg, fn } = CEM

let inputImg,
    inputVideo,
    inputAudio

const MediaButton = function ({ className, onclickAll, onclickText, onclickPhoto, onclickVideo, onclickAudio, onclickMic, multiple, iconPhoto = false, typeMic = "posts" }) {

    return (
        <div class={["c-mediabtn create_post_control_block", className]}>
            {
                typeof onclickText == "function"
                    ?
                    <div
                        class="c-mediabtn__action create_post_control_item"
                        onclick={onclickText}
                    >
                        <img class="c-mediabtn__icon" src={svg["post_text"]} />
                    </div>
                    :
                    null
            }
            {
                typeof onclickAll == "function"
                    ?
                    <div class="c-mediabtn__action createPostImageCreator create_post_control_item" onclick={() => {
                        inputImg.click();
                    }}>
                        <img class="c-mediabtn__icon" src={svg[`${iconPhoto ? iconPhoto : "post_photo"}`]} />
                        <input
                            style="display: none;"
                            class="c-mediabtn__hidefield createPostImageInput"
                            onchange={onclickAll}
                            type="file"
                            Element={($el) => { inputImg = $el }}
                            multiple={multiple}
                        />
                    </div>
                    :
                    null
            }
            {
                typeof onclickPhoto == "function"
                    ?
                    <div class="c-mediabtn__action createPostImageCreator create_post_control_item" onclick={() => {
                        inputImg.click();
                    }}>
                        <img class="c-mediabtn__icon" src={svg[`${iconPhoto ? iconPhoto : "post_photo"}`]} />
                        <input
                            style="display: none;"
                            class="c-mediabtn__hidefield createPostImageInput"
                            onchange={onclickPhoto}
                            type="file"
                            accept=".jpg,.jpeg,.png,.gif"
                            Element={($el) => { inputImg = $el }}
                            multiple={multiple}
                        />
                    </div>
                    :
                    null
            }
            {
                typeof onclickVideo == "function"
                    ?

                    <div class="c-mediabtn__action createPostVideoCreator create_post_control_item" onclick={() => {
                        inputVideo.click();
                    }}>
                        <img class="c-mediabtn__icon" src={svg["post_video"]} />
                        <input
                            style="display: none;"
                            class="c-mediabtn__hidefield createPostVideoInput"
                            onchange={onclickVideo}
                            type="file"
                            accept=".mp4,.avi,.mov,.mkv,.avi,.flv"
                            Element={($el) => { inputVideo = $el }}
                        />
                    </div>
                    :
                    null
            }
            {
                typeof onclickAudio == "function"
                    ?
                    <div class="c-mediabtn__action createPostAudioCreator create_post_control_item" onclick={() => {
                        inputAudio.click();
                    }}>
                        <img class="c-mediabtn__icon" src={svg["post_audio"]} />
                        <input
                            style="display: none;"
                            class="c-mediabtn__hidefield createPostAudioInput"
                            onchange={onclickAudio}
                            type="file"
                            accept=".mp3,.wav,.aiff,.aac,.ogg,.wma"
                            Element={($el) => { inputAudio = $el }}
                        />
                    </div>
                    :
                    null
            }
            {
                typeof onclickMic == "function"
                    ?
                    <button
                        data-page_type={typeMic}
                        data-type="voiceline"
                        class="c-mediabtn__action createPostAudioCreator create_post_control_item"
                        onclick={(e) => {
                            onclickMic(e)
                        }}
                    ></button>
                    :
                    null
            }
        </div>
    )
}
export { MediaButton }
