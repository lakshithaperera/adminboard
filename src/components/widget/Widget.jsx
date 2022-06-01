import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined"
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import MonetizationOnOutlinedIcon  from '@mui/icons-material/MonetizationOnOutlined';

import AccountBalanceWalletOutlinedIcon   from '@mui/icons-material/AccountBalanceWalletOutlined';



export const Widget = ({ type }) => {
    let data;

    const amount = 1000;
    const diff = 80;

    switch(type) {
         case "user":
             data = {
                 title: "USERS",
                 isMoney: false,
                 link: "See all users",
                 icon: <PersonOutlinedIcon className="icon" />
             };
             break;
             case "order":
                data = {
                    title: "ORDERS",
                    isMoney: false,
                    link: "View all orders",
                    icon:<AssignmentReturnedIcon className="icon" />
                };
             break;
             case "earning":
                data = {
                    title: "ERARNING",
                    isMoney: true,
                    link: "View net earnings",
                    icon: <MonetizationOnOutlinedIcon className="icon" />
                };
             break;
              case "balance":
                    data = {
                        title: "BALANCE",
                        isMoney: true,
                        link: "See details",
                        icon: <AccountBalanceWalletOutlinedIcon className="icon" />
                    };
             break;
             default:
             break;
    }



  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}
