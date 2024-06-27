import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import AccountBalanceWalletOutlined from "@mui/icons-material/AccountBalanceWalletOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import "./widget.scss";

export default function Widget({ type }) {
  let data;

  const amount = 100;
  const diff = 20;

  if (type) {
    if (type === "user") {
      data = {
        title: "USERS",
        isMoney: false,
        state: "positive",
        link: "See all users",
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
    } else if (type === "order") {
      data = {
        title: "ORDERS",
        state: "negative",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
    } else if (type === "earning") {
      data = {
        title: "Earning",
        state: "positive",
        isMoney: false,
        link: "View net earnings",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
    } else if (type === "balance") {
      data = {
        title: "Balance",
        state: "negative",
        isMoney: false,
        link: "See details",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
    }
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${data.state}`}>
          {data.state === "positive" ? (
            <KeyboardArrowUp />
          ) : (
            <KeyboardArrowDown />
          )}
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}
