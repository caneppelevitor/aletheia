import { Select } from "antd";
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import colors from "../../styles/colors";
import ClassificationText from "../ClassificationText";
const { Option } = Select;

const SelectInput = styled(Select)`
    background: ${colors.lightGray};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: none;
    height: 40px;

    .ant-select-selector {
        background: none !important;
        border: none !important;
        top: 6px;
        .ant-select-selection-item {
            color: ${colors.black};
        }
    }

    ::placeholder {
        color: ${colors.black};
    }

    :focus {
        border: none;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    }

    :active {
        border: none;
    }

    :hover {
        border: none;
    }
`;

const ClaimReviewSelect = ({ type, onChange, defaultValue }) => {
    const { t } = useTranslation();
    return (
        <SelectInput
            type={type}
            onChange={onChange}
            defaultValue={defaultValue}
        >
            <Option value="" disabled>
                {t("claimReviewForm:placeholder")}
            </Option>
            <Option value="not-fact">
                <ClassificationText classification="not-fact" />
            </Option>
            <Option value="true">
                <ClassificationText classification="true" />
            </Option>
            <Option value="true-but">
                <ClassificationText classification="true-but" />
            </Option>
            <Option value="arguable">
                <ClassificationText classification="arguable" />
            </Option>
            <Option value="misleading">
                <ClassificationText classification="misleading" />
            </Option>
            <Option value="false">
                <ClassificationText classification="false" />
            </Option>
            <Option value="unsustainable">
                <ClassificationText classification="unsustainable" />
            </Option>
            <Option value="exaggerated">
                <ClassificationText classification="exaggerated" />
            </Option>
            <Option value="unverifiable">
                <ClassificationText classification="unverifiable" />
            </Option>
        </SelectInput>
    );
}

export default ClaimReviewSelect;
