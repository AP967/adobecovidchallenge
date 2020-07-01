import React from 'react';

class Main extends React.Component{
    method(){
        document.addEventListener("adobe_dc_view_sdk.ready", function () {
            var adobeDCView = new window.AdobeDC.View({ clientId: "6d6d3a3d4ae14826bcff31938de9c860", divId: "adobe-dc-view" });
            adobeDCView.previewFile(
                {
                    content: { location: { url: "/MyResources/createPdfFromStaticHtmlOutput.pdf" } },
                    metaData: { fileName: "createPdfFromStaticHtmlOutput.pdf" }
                });
        });
    }
    componentDidMount(){
        this.method();
    }
    render(){
        return(
            <div id="adobe-dc-view"></div>
        );
    }
}

export default Main;