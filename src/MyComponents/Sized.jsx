import React from 'react';

import {Container} from 'react-bootstrap';

class Sized extends React.Component {
    constructor() {
        super();
        document.addEventListener("adobe_dc_view_sdk.ready", function () {
            var adobeDCView = new window.AdobeDC.View({ clientId: "6d6d3a3d4ae14826bcff31938de9c860", divId: "adobe-dc-view-sized" });
            adobeDCView.previewFile(
                {
                    content: { location: { url: "../MyResources/createPdfFromStaticHtmlOutput.pdf" } },
                    metaData: { fileName: "createPdfFromStaticHtmlOutput.pdf" }
                },{
                    embedMode: "SIZED_CONTAINER"
                }).then(res => console.log(res))
                .catch(err => console.log(err));
        });
    }

    render() {
        return(
            <div>
                <hr style={{ background: "#666" }} />
                <Container>
                    <div style={{width: "18rem"}} className="mx-auto">
                        <h1 style={{ color: "#666"}} className="mx-auto">Sized Container</h1>
                    </div>
                    <hr style={{ background: "#666" }} />
                    <p style={{color: "#555"}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, totam? Fugiat ipsa vero voluptatibus. Unde delectus aut magnam dolor possimus esse vel nostrum repellendus voluptatum perferendis. Odio officiis repudiandae eaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas sint tempora voluptates, exercitationem debitis porro dolorum ipsam pariatur assumenda ipsa tenetur dolore, consectetur ut voluptatem fuga. Quasi, laboriosam nihil?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur mollitia voluptates, perferendis dignissimos illo atque quae officia quaerat suscipit accusantium? Esse neque deserunt accusantium qui, itaque porro quibusdam laudantium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur mollitia voluptates, perferendis dignissimos illo atque quae officia quaerat suscipit accusantium? Esse neque deserunt accusantium qui, itaque porro quibusdam laudantium.
                </p>
                <div id="adobe-dc-view-sized"></div>
                <p style={{ color: "#555" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, totam? Fugiat ipsa vero voluptatibus. Unde delectus aut magnam dolor possimus esse vel nostrum repellendus voluptatum perferendis. Odio officiis repudiandae eaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas sint tempora voluptates, exercitationem debitis porro dolorum ipsam pariatur assumenda ipsa tenetur dolore, consectetur ut voluptatem fuga. Quasi, laboriosam nihil?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur mollitia voluptates, perferendis dignissimos illo atque quae officia quaerat suscipit accusantium? Esse neque deserunt accusantium qui, itaque porro quibusdam laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur mollitia voluptates, perferendis dignissimos illo atque quae officia quaerat suscipit accusantium? Esse neque deserunt accusantium qui, itaque porro quibusdam laudantium.
                </p>
                </Container>
            </div>
        );
    }
}

export default Sized;