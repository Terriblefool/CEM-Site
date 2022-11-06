import { jsx, jsxFrag, Helpers, Variable } from "@betarost/cemjs";

import svg from "@assets/svg/index.js";
import { showVotersAndchangeStatistic } from "@src/functions.js";

const Likes = function ({ item, typeGet, typeSet, mainId, commentId, callBack }) {


  return (
    <div style={"display: flex"}>
      <div class="c-actioncomment__btn c-actioncomment__btn--dislike">
        <img
          src={svg["dislike"]}
          data-name="minus"
          onTouchStart={(e) =>
            showVotersAndchangeStatistic(
              e,
              item._id,
              typeGet,
              typeSet,
              mainId,
              commentId,
              callBack
            )
          }
          onTouchEnd={(e) =>
            showVotersAndchangeStatistic(
              e,
              item._id,
              typeGet,
              typeSet,
              mainId,
              commentId,
              callBack
            )
          }
          onmousedown={(e) =>
            showVotersAndchangeStatistic(
              e,
              item._id,
              typeGet,
              typeSet,
              mainId,
              commentId,
              callBack
            )
          }
          onmouseup={(e) =>
            showVotersAndchangeStatistic(
              e,
              item._id,
              typeGet,
              typeSet,
              mainId,
              commentId,
              callBack
            )
          }
          class={[!Variable.auth ? "comment_inactive" : null]}
        />
      </div>
      <div class="c-actioncomment__counter">{item.statistic.rating ? item.statistic.rating : "0"}</div>
      <div class="c-actioncomment__btn c-actioncomment__btn--like">
        <img
          src={svg["like"]}
          data-name="plus"
          onTouchStart={(e) =>
            showVotersAndchangeStatistic(
              e,
              item._id,
              typeGet,
              typeSet,
              mainId,
              commentId,
              callBack
            )
          }
          onTouchEnd={(e) =>
            showVotersAndchangeStatistic(
              e,
              item._id,
              typeGet,
              typeSet,
              mainId,
              commentId,
              callBack
            )
          }
          onmousedown={(e) =>
            showVotersAndchangeStatistic(
              e,
              item._id,
              typeGet,
              typeSet,
              mainId,
              commentId,
              callBack
            )
          }
          onmouseup={(e) =>
            showVotersAndchangeStatistic(
              e,
              item._id,
              typeGet,
              typeSet,
              mainId,
              commentId,
              callBack
            )
          }
          class={[!Variable.auth ? "comment_inactive" : null]}
        />
      </div>
    </div>
  );
};

export { Likes };