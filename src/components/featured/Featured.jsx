import  MoreVertIcon  from "@mui/icons-material/MoreVert";
import "./featured.scss";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Featured = () => {
    const props = {
        // is require
        colorCircle: "#c2c2c2",
        fontColor: "#01A1FF",
        fontSize: "1.3rem",
        fontWeight: 300,
        size: 130,
        stroke: 5,
        strokeBottom: 5,
        speed: 60,
        cut: 0,
        rotation: -90,
        opacity: 10,
        unit: "%",
        textPosition: "0.35em",
        animationOff: false,
        inverse: false,
        round: true,
        number: true,
    
       
      };
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressBar {...props} percent={70} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
                Previous transactions processing. Last payments may not be included.
            </p>
            <div className="summary">

                 <div className="item">
                     <div className="itemTitle ">Target</div>
                     <div className="itemResult positive">
                         <KeyboardArrowUpIcon fontSize="small" />
                         <div className="resultAmount">$12.4k</div>
                     </div>
                 </div>

                 <div className="item">
                     <div className="itemTitle">Last Week</div>
                     <div className="itemResult positive">
                         <KeyboardArrowUpIcon fontSize="small" />
                         <div className="resultAmount">$12.4k</div>
                     </div>
                 </div>

                 <div className="item">
                     <div className="itemTitle">Last  Month</div>
                     <div className="itemResult negative">
                         <KeyboardArrowDownIcon fontSize="small" />
                         <div className="resultAmount">$12.4k</div>
                     </div>
                 </div>

            </div>

        </div>
    </div>
  )
}
