import {Collapse, Row, Typography} from "antd";
import colors from "../../styles/colors";
import {Trans, useTranslation} from "next-i18next";

const { Title } = Typography;

const PrivacyPolicy = () =>{
    const { t } = useTranslation();
    return (
        <Row
            style={{
                color: colors.bluePrimary,
                justifyContent: "center",
                width: "100%",
                fontSize: "1rem",
                letterSpacing: "1px",
                fontWeight: 500,
                padding: "20px"
            }}
        >
            <Title>{t("privacyPolicy:title")}</Title>
            {t("privacyPolicy:leadParagraph")}
            <ul>
                <li key={1}>{t("privacyPolicy:tableOfContentsItem1")}</li>
                <li key={2}>{t("privacyPolicy:tableOfContentsItem2")}</li>
                <li key={3}>{t("privacyPolicy:tableOfContentsItem3")}</li>
                <li key={4}>{t("privacyPolicy:tableOfContentsItem4")}</li>
                <li key={5}>{t("privacyPolicy:tableOfContentsItem5")}</li>
                <li key={6}>{t("privacyPolicy:tableOfContentsItem6")}</li>
                <li key={7}>{t("privacyPolicy:tableOfContentsItem7")}</li>
                <li key={8}>{t("privacyPolicy:tableOfContentsItem8")}</li>
                <li key={9}>{t("privacyPolicy:tableOfContentsItem9")}</li>
                <li key={0}>{t("privacyPolicy:tableOfContentsItem10")}</li>
            </ul>
            <Title level={3}>{t("privacyPolicy:subTitleItem1")}</Title>
            {t("privacyPolicy:item1")}
            <Title level={3}>{t("privacyPolicy:subTitleItem2")}</Title>
            {t("privacyPolicy:item2")}
            <Title level={3}>{t("privacyPolicy:subTitleItem3")}</Title>
            {t("privacyPolicy:item3")}
            <Title level={3}>{t("privacyPolicy:subTitleItem4")}</Title>
            {t("privacyPolicy:item4")}
            <Title level={3}>{t("privacyPolicy:subTitleItem5")}</Title>
            {t("privacyPolicy:item5")}
            <Collapse
                style={{
                    width: "100%",
                    margin: "15px 0px"
                }}
            >
                <Collapse.Panel header={t("privacyPolicy:trackingToolsPanelRecaptchaHeader")} key={1}>
                    <Trans
                        i18nKey={"privacyPolicy:trackingToolsPanelReCaptchaContent"}
                        components={[
                            <a style={{whiteSpace: "pre-wrap"}} href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noreferrer"></a>,
                            <a style={{whiteSpace: "pre-wrap"}} href="https://policies.google.com/terms?hl=en" target="_blank" rel="noreferrer"></a>
                        ]}
                    />
                </Collapse.Panel>
                <Collapse.Panel header={t("privacyPolicy:trackingToolsPanelSessionCookiesHeader")} key={2}>
                    {t("privacyPolicy:trackingToolsPanelSessionCookiesContent")}
                </Collapse.Panel>
                <Collapse.Panel header={t("privacyPolicy:trackingToolsPanelUmamiHeader")} key={3}>
                    <Trans
                        i18nKey={"privacyPolicy:trackingToolsPanelUmamiContent"}
                        components={[
                            <a style={{whiteSpace: "pre-wrap"}} href="https://umami.is/" target="_blank" rel="noreferrer"></a>,
                            <h3 style={{ marginTop: "10px" }}></h3>,
                            <h3 style={{ marginTop: "10px" }}></h3>,
                        ]}
                    />
                </Collapse.Panel>
            </Collapse>
            <Title level={3}>{t("privacyPolicy:subTitleItem6")}</Title>
            {t("privacyPolicy:item6")}
            <Title level={3}>{t("privacyPolicy:subTitleItem7")}</Title>
            {t("privacyPolicy:item7")}
            <Title level={3}>{t("privacyPolicy:subTitleItem8")}</Title>
            {t("privacyPolicy:item8")}
            <Title level={3}>{t("privacyPolicy:subTitleItem9")}</Title>
            {t("privacyPolicy:item9")}
            <Title level={3}>{t("privacyPolicy:subTitleItem10")}</Title>
            {t("privacyPolicy:item10")}
            <Title level={3}>{t("privacyPolicy:subTitleContact")}</Title>
            <Trans
                i18nKey={"privacyPolicy:contact"}
                values={{ email: t("common:contactEmail")}}
                components={[
                    <a style={{whiteSpace: "pre-wrap"}} href={`mailto:${t("common:contactEmail")}`} target="_blank" rel="noreferrer"></a>,
                ]}
            />
        </Row>
    )
}

export default PrivacyPolicy;
