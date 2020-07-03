import React from 'react';
import "./bootstrap-4.4.1-dist/css/bootstrap.css";
import {Tab, Tabs} from 'react-bootstrap';

import Full from './Full';
import Sized from './Sized';
import InLine from './InLine';

import "../Main.css";


class Main extends React.Component{

    render(){
        return(
            <div id="parent-div" className="mt-2 mx-2">
                <Tabs variant="pills" defaultActiveKey="Full" id="uncontrolled-tab-example">
                    <Tab eventKey="Full" title="Full Window">
                        <Full />
                    </Tab>
                    <Tab eventKey="Sized" title="Sized Container">
                        <Sized />
                    </Tab>
                    <Tab eventKey="InLine" title="In-Line">
                        <InLine />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default Main;
