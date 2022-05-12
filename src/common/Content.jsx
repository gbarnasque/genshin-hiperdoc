import React from 'react';
import {Tab, Row, Col }from 'react-bootstrap';

import ListItems from '../ListItems/ListItems';
import TabContent from '../TabContent/TabContent';

import './Content.css';

class Content extends React.Component {

    render() {
        return (
            <Tab.Container id="list-group-tabs" defaultActiveKey="#o-que-e-genshin-impact">
                <Row className='list-group-row'>
                    <Col sm={2} className='list-items'>
                        <ListItems />
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={8} className='content'>
                        <TabContent />
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Tab.Container>
        );
    }
}


export default Content;