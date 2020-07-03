import React from 'react';

import { Container } from 'react-bootstrap';

class Full extends React.Component{
    constructor(){
        super();
        document.addEventListener("adobe_dc_view_sdk.ready", function () {
            var adobeDCView = new window.AdobeDC.View({ clientId: "6d6d3a3d4ae14826bcff31938de9c860", divId: "adobe-dc-view-full" });
            adobeDCView.previewFile(
                {
                    content: { location: { url: "/MyResources/createPdfFromStaticHtmlOutput.pdf" } },
                    metaData: { fileName: "createPdfFromStaticHtmlOutput.pdf" }
                },{
                    embedMode: "FULL_WINDOW"
                }).then(res => console.log(res))
                .catch(err => console.log(err));
        });
    }

    render(){
        return(
            <React.Fragment>
                <hr style={{ background: "#666" }} />
                <div className="mx-auto" style={{width: "14rem", color: "#666"}}>
                    <h1 className="mx-auto">Full Window</h1>
                </div>
                <hr style={{ background: "#666" }} />
                <div id="adobe-dc-view-full"></div>
            </React.Fragment>
        );
    }
}

export default Full;