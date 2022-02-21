import React from "react";
import claimApi from "../../api/claim";
import BaseList from "../List/BaseList";
import ClaimReviewCard from "./ClaimReviewCard";
import { useTranslation } from "next-i18next";

const ClaimReviewList = ({ claimId, sentenceHash }) => {
    const { i18n } = useTranslation()
    return (
        <BaseList
            style={{
                width: "100%"
            }}
            apiCall={claimApi.getClaimSentenceReviews}
            filter={{
                claimId,
                sentenceHash,
                i18n
            }}
            renderItem={claimReview => {
                return claimReview && (
                    <ClaimReviewCard
                        key={claimReview._id}
                        userName={claimReview?.user?.name}
                        classification={claimReview.classification}
                        sources={claimReview.sources}
                        report={claimReview.report}
                    />
                )
            }}
        />
    );
}
export default ClaimReviewList;
