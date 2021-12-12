import {SocialIcon} from "react-social-icons";
import colors from "../styles/colors";
import {Row} from "antd";
import React from "react";

const AletheiaSocialMediaFooter = () => {
    return <Row
        style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "35px 10% 20px 10%",
        }}
    >
        <SocialIcon url="https://www.facebook.com/AletheiaFactorg-107521791638412" bgColor={colors.white} />
        <SocialIcon url="https://www.instagram.com/aletheiafact" bgColor={colors.white} />
        <SocialIcon url="https://www.linkedin.com/in/aletheiafact-org" bgColor={colors.white} />
        <SocialIcon url="https://www.github.com/in/aletheiafact" bgColor={colors.white} />
    </Row>
}

export default AletheiaSocialMediaFooter;
