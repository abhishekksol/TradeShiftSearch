import React from 'react'

const LABEL_COMPANY_STATUS = "Company Status";
const LABEL_REGNUMBER = "COMPANY REGISTRATION NUMBER";
const LABEL_VAT = "VAT NUMBER";
const LABEL_ADDRESS = "REGISTERED ADDRESS";
const LABEL_COUNTRY = "COUNTRY";
const LABEL_STATUS = "ADDITIONAL STATUS DETAILS";
const LABEL_COMPANY = "COMPANY DESCRIPTION";
const ResultView = (props: any) => {
    const { user } = props;
    return (
        <div className="result-container container">
            <div className="result-wrapper">
                <div className="result-heading-box">
                    <h3 className="result-heading result-heading-primary">{user.name}</h3>
                    <h5 className="result-heading result-heading-status-title">{LABEL_COMPANY_STATUS}: <span className={"result-heading-status " + (user.status === "active" ? "active" : "inactive")}>{user.status === "active" ? "ACTIVE" : "INACTIVE"}</span></h5>
                </div>
                <ul className="result-list">
                    {
                        user.registrationNumber &&
                        <li className="result-item">
                            <h6 className="result-item-content">
                                <span className="result-item-title">{LABEL_REGNUMBER}</span>
                                <span className="result-item-description">{user.registrationNumber}</span>
                            </h6>
                        </li>
                    }
                    {
                        user.vatNumber &&
                        <li className="result-item">
                            <h6 className="result-item-content">
                                <span className="result-item-title">{LABEL_VAT}</span>
                                <span className="result-item-description">{user.vatNumber}</span>
                            </h6>
                        </li>
                    }
                    {
                        user.address &&
                        <li className="result-item">
                            <h6 className="result-item-content">
                                <span className="result-item-title">{LABEL_ADDRESS}</span>
                                <span className="result-item-description">{user.address}</span>
                            </h6>
                        </li>
                    }
                    {
                        user.country &&
                        <li className="result-item">
                            <h6 className="result-item-content">
                                <span className="result-item-title">{LABEL_COUNTRY}</span>
                                <span className="result-item-description">{user.country}</span>
                            </h6>
                        </li>
                    }
                    {
                        user.additionalStatusDetails && Array.isArray(user.additionalStatusDetails) &&
                        <li className="result-item">
                            <h6 className="result-item-content">
                                <span className="result-item-title">{LABEL_STATUS}</span>
                                <span className="result-item-description" dangerouslySetInnerHTML={{ __html: user.additionalStatusDetails.join("<br/>") }}></span>
                            </h6>
                        </li>
                    }
                    {
                        user.description &&
                        <li className="result-item">
                            <h6 className="result-item-content">
                                <span className="result-item-title">{LABEL_COMPANY}</span>
                                <span className="result-item-description">{user.description}</span>
                            </h6>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default ResultView
