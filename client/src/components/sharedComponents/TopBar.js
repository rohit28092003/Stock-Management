import "./topbar.css";
import { MdNotificationsNone, MdOutlineSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">StockIt</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <MdNotificationsNone size="30px" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdOutlineSettings size="30px" />
          </div> */}
          {/* <div className="topbarIconContainer">
            <CgProfile size="30px" 
            <SignOutButton style={styles.button}>Sign Out</SignOutButton>/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
