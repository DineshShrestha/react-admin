import { useState, useEffect } from "react";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
const Widget = ({ type }) => {
  // eslint-disable-next-line
  const [data, setData] = useState(null);
  const amount = 100;
  const diff = 20;
  useEffect(() => {
    switch (type) {
      case "user": {
        let d1 = {
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: (
            <PersonOutlineOutlinedIcon
              className="icon"
              style={{ color: "crimson", backgroundColor: "rgba(255, 0,0,0.2" }}
            />
          ),
        };
        return setData(d1);
        break;
      }
      case "order": {
        let d2 = {
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(128, 165,32,0.2",
              }}
            />
          ),
        };
        return setData(d2);
        break;
      }
      case "earning": {
        let d3 = {
          title: "EARNINGS",
          isMoney: true,
          link: "Net earnings",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{ color: "green", backgroundColor: "rgba(0, 128,0,0.2" }}
            />
          ),
        };
        return setData(d3);
        break;
      }
      case "balance": {
        let d4 = {
          title: "BALANCE",
          isMoney: true,
          link: "Total Balance",
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                color: "purple",
                backgroundColor: "rgba(128, 0,128,0.2",
              }}
            />
          ),
        };
        return setData(d4);
        break;
      }
      default:
        break;
    }
  }, [type]);

  return (
    <div className="widget">
      <div className="left">
        {data && <span className="title">{data.title}</span>}
        <span className="counter">
          {data && data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data && data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon className="icon" />
          {diff} %
        </div>
        {data && data.icon}
      </div>
    </div>
  );
};

export default Widget;
