import { hexToRgb, blackColor } from "assets/jss/material-dashboard-react.js";

const cardAvatarStyle = {
  cardAvatar: {
    "&$cardAvatarProfile img": {
      width: "200px",
      height: "200px"
    }
  },
  cardAvatarProfile: {
    maxWidth: "200px",
    maxHeight: "200px",
    margin: "auto",
    borderRadius: "0%",
    overflow: "hidden",
    padding: "0",
    
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarPlain: {}
};

export default cardAvatarStyle;
