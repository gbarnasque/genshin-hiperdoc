import React from "react";
import Tab from 'react-bootstrap/Tab';

import './TabContent.css';
import TabPanes from './TabPanes';

class TabContent extends React.Component {

    renderTabs() {
        return TabPanes.map(item => {
            let trailer = item.trailer;
            if(trailer !== undefined) {
                return (
                    <Tab.Pane key={item.id} eventKey={`#${item.eventKey}`} className='text-center'>
                        <video width={item.trailer?.width} controls autoPlay muted loop><source src={item.trailer?.src} type={item.trailer?.type}/></video>
                        <h1>{item.title}</h1>
                        {item.text.map(texto => (
                            <p>{texto}</p> 
                        ))}
                    </Tab.Pane>
                );
            }
            else {
                return (
                    <Tab.Pane key={item.id} eventKey={`#${item.eventKey}`} className='text-center'>
                        <img width={item.image.width} height={item.image.height} src={item.image.src} alt={item.image.alt}/>
                        <h1>{item.title}</h1>
                        {item.text.map(texto => (
                            <p>{texto}</p> 
                        ))}
                    </Tab.Pane>
                );
            }
            
        });
    }

    render() {
        return (
            <Tab.Content>
                {this.renderTabs()}
            </Tab.Content>
        );
    }
}

export default TabContent;