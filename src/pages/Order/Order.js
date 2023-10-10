import React from "react";
import "../Order/styles/style.css";

const Order = () => {
  return (
    <section className="order" id="order">
      <h3 className="sub-heading"> 馬上點餐 </h3>
      <h1 className="heading"> 快速點餐 </h1>

      <form className="order-form" action="">
        <div className="inputbox">
          <div className="input">
            <span>姓名</span>
            <input type="text" placeholder="輸入你的姓名" />
          </div>
          <div className="input">
            <span>電話號碼</span>
            <input type="number" placeholder="輸入你的電話號碼" />
          </div>
        </div>
        <div className="inputbox">
          <div className="input">
            <span>品項</span>
            <input type="text" placeholder="輸入食物品項" />
          </div>
          <div className="input">
            <span>其他品項</span>
            <input type="text" placeholder="輸入其他品項" />
          </div>
        </div>
        <div className="inputbox">
          <div className="input">
            <span>多少品項</span>
            <input type="number" placeholder="多少品項" />
          </div>
          <div className="input">
            <span>日期和時間</span>
            <input type="datetime-local" />
          </div>
        </div>
        <div className="inputbox">
          <div className="input">
            <span>住址</span>
            <textarea
              name="number"
              placeholder="輸入你的住址"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="input">
            <span>想說的建議</span>
            <textarea
              name="number"
              placeholder="給我們的建議"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn">
          送出訂單
        </button>
      </form>
    </section>
  );
};

export default Order;
