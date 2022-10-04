import {
    jsx,
    jsxFrag,
    Variable,
    initGo,
    initReload,
    initOne,
} from '@betarost/cemjs';
import svg from "@assets/svg/index.js";
import images from '@assets/images/index.js';



let activeBanner, userLang,banner

let banners = {
    en: [
      {
        url: images["affiliate_banners/200x100"],
        type: "200x100",
      },
      {
        url: images["affiliate_banners/200x200"],
        type: "200x200",
      },
      {
        url: images["affiliate_banners/120x600"],
        type: "120x600",
      },
      {
        url: images["affiliate_banners/300x600"],
        type: "300x600",
      },
    ],
    ru: [
      {
        url: images["affiliate_banners/120x600ru"],
        type: "120x600",
      },
      {
        url: images["affiliate_banners/140x600ru"],
        type: "140x600",
      },
      {
        url: images["affiliate_banners/160x600ru"],
        type: "160x600",
      },
      {
        url: images["affiliate_banners/200x200ru"],
        type: "200x200",
      },
      {
        url: images["affiliate_banners/200x250ru"],
        type: "200x250",
      },
      {
        url: images["affiliate_banners/240x400ru"],
        type: "240x400",
      },
      {
        url: images["affiliate_banners/240x600ru"],
        type: "240x600",
      },
      {
        url: images["affiliate_banners/300x600ru"],
        type: "300x600",
      },
      {
        url: images["affiliate_banners/120x800ru"],
        type: "120x800",
      },
      {
        url: images["affiliate_banners/250x250ru"],
        type: "250x250",
      },
      {
        url: images["affiliate_banners/100x100ru"],
        type: "100x100",
      },
    ],
  };

  let successImg = Variable.setRef()
  let successCode = Variable.setRef()

  const copyLink = (e, code) => {
    navigator.clipboard.writeText(code);
    let element = e.target;


    // successImg().style.visibility= "visible"
    // successImg().style.opacity= "1"

    // successCode().style.visibility= "visible"
    // successCode().style.opacity= "1"
    if (element.className !== "affiliate_banner_copy") {
      element = element.parentElement
    }
    element.childNodes[3].style.visibility = "visible";
    element.childNodes[3].style.opacity = "1";
    setTimeout(() => {
      element.childNodes[3].style.visibility = "hidden";
      element.childNodes[3].style.opacity = "0";
    }, 1000)

  };



const BlockAffiliateBanners = function () {
    // console.log("BlockModal");
    initOne(
        () => {
            userLang = Variable.lang.code === "ru" ? "ru" : "en";
      activeBanner = banners[userLang][0].type;
        }
    )
    banner = banners[userLang].filter((item) => item.type === activeBanner);
    let bannerCode = `<a href="https://crypto-emergency.com"><img src=${banner[0].url}></a>`;
    return (
        <div class="affiliate_banners">
              <div class="affiliate_banners_size">
                <div>
                  <h4>{Variable.lang.h.bannerSize}</h4>
                  <div>
                    <div
                      onclick={() => {
                        userLang = "en";
                        activeBanner = banners[userLang][0].type;
                        initReload()
                      }}
                      class={`tag_button ${userLang == "en" && "tag_button_active"
                        }`}
                    >
                      <span>English</span>
                    </div>
                    <div
                      onclick={() => {
                        userLang = "ru";
                        activeBanner = banners[userLang][0].type;
                        initReload()
                      }}
                      class={`tag_button ${userLang == "ru" && "tag_button_active"
                        }`}
                    >
                      <span>Русский</span>
                    </div>
                  </div>
                  <div class="affiliate_banners_size_list">
                    {banners[userLang].map((item) => {
                      return (
                        <div
                          onclick={() => {
                            console.log("change bannders", item.type);
                            activeBanner = item.type;
                            initReload()
                          }}
                          data-action="changeAffiliateBanner"
                          class={`affiliate_banners_size_item ${activeBanner == item.type &&
                            "affiliate_banners_size_item_active"
                            }`}
                        >
                          <div class="affiliate_banners_size_item_inner">
                            {item.type}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="affiliate_banner">
                <div style="display: block;">
                  <h4>{Variable.lang.h.addMaterials}</h4>
                  <div class="affiliate_banner_link">
                    <div class="affiliate_banner_link_block">
                      {banner[0].url}
                    </div>
                    <div
                      data-action="affiliateBannerCopy"
                      class="affiliate_banner_copy"
                      onclick={(e) => copyLink(e, banner[0].url)}
                    >
                      <img src={svg["icon/copy"]} />{" "}
                      <span>{Variable.lang.p.copy}</span>
                      <div
                        class="success_copy"
                        ref={successImg}
                      >
                        {Variable.lang.text.coppied}
                      </div>
                    </div>
                  </div>
                </div>
                <div style="display: block;">
                  <h4>{Variable.lang.h.codeToPlace}</h4>
                  <div class="affiliate_banner_code">
                    <div class="affiliate_banner_code_block">{bannerCode}</div>
                    <div
                      data-action="affiliateBannerCopy"
                      class="affiliate_banner_copy"
                      onclick={(e) => copyLink(e, bannerCode)}
                    >
                      <img src={svg["icon/copy"]} />{" "}
                      <span>{Variable.lang.p.copy}</span>
                      <div
                        class="success_copy"
                        ref={successCode}
                      >
                        {Variable.lang.text.coppied}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="affiliate_banner_preview">
                  <img src={banner[0].url} />
                </div>
              </div>
            </div>
    )
};


export { BlockAffiliateBanners }