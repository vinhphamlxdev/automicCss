let tableBody = document.querySelector(".main-table-body");
let tableRowItem = document.querySelector(".table-row-item");
let arrData = [
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Buy",
    price: "3582.18",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Open",
    cancel: true,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "BTC/USDT",
    side: "Buy",
    price: "4030.40",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Open",
    cancel: true,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Buy",
    price: "3582.18",
    amout: "4030.40",
    value: "4030.40",
    filled: "100%",
    status: "Filled",
    cancel: false,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Buy",
    price: "3582.18",
    amout: "4030.40",
    value: "4030.40",
    filled: "100%",
    status: "Open",
    cancel: true,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "BTC/USDT",
    side: "Buy",
    price: "54332.31",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Canceled",
    cancel: false,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "BTC/USDT",
    side: "Sell",
    price: "54332.31",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Open",
    cancel: true,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "BTC/USDT",
    side: "Sell",
    price: "4030.40",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Canceled",
    cancel: false,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Sell",
    price: "3582.18",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Open",
    cancel: true,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Sell",
    price: "3582.18",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Canceled",
    cancel: false,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Sell",
    price: "3582.18",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Open",
    cancel: true,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Sell",
    price: "3582.18",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Canceled",
    cancel: false,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Sell",
    price: "3582.18",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Open",
    cancel: true,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Sell",
    price: "3582.18",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Canceled",
    cancel: false,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Sell",
    price: "54332.31",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Open",
    cancel: true,
  },
  {
    date: "18-06-2017 12:38:42",
    market: "ETH/USDT",
    side: "Sell",
    price: "54332.31",
    amout: "4030.40",
    value: "4030.40",
    filled: "0%",
    status: "Open",
    cancel: true,
  },
];
let htmlContent = arrData
  .map((item, index) => {
    return `
    <tr class="table-row-item ${index % 2 !== 0 ? "active" : ""}">
    <td class="table-body-item">${item.date}</td>
    <td class="table-body-item">${item.market}</td>
    <td class="table-body-item buy-btn ${
      item.side === "Buy" ? "" : "sell-btn"
    }">${item.side}</td>
    <td class="table-body-item">${item.price}</td>
    <td class="table-body-item">${item.amout}</td>
    <td class="table-body-item">${item.value}</td>
    <td class="table-body-item">${item.filled}</td>
    <td class="table-body-item">
      <button class="table-body-item--content status-btn ${
        item.status === "Open"
          ? ""
          : item.status === "Filled"
          ? "filled-status"
          : item.status === "Canceled"
          ? "canceled-status"
          : ""
      }">
        ${item.status}
      </button>
    </td>
    <td class="table-body-item">
      <button class="table-body-item--content cancel-btn ${
        item.status === "Open" ? "" : "cancel-hidden"
      }">
        <span> Cancel</span>
        <img
          class="cancel-icon"
          src="./assets/close-line.png"
          alt=""
        />
      </button>
    </td>
  </tr>
    
    `;
  })
  .join("");
tableBody.innerHTML = htmlContent;
