import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

import Items from './ItemsList';
import './ListItems.css';

class ListItems extends React.Component {

    renderList() {
        return Items.map((item, index) => {
            let children = null;
            if(item.children !== null) {
                children = (
                    <ListGroup.Item>
                        <ListGroup variant='flush'>
                            {item.children.map((child, childIndex) => (
                                <ListGroup.Item  key={childIndex} action href={`#${child.link}`}>
                                    {child.description}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ListGroup.Item>
                );
            }
            if(children !== null) {
                return [(
                    <ListGroup.Item key={index} action href={`#${item.link}`}>
                        {item.description}
                    </ListGroup.Item>
                    ),
                    children];
            }
            else {
                return (
                    <ListGroup.Item key={index} action href={`#${item.link}`}>
                        {item.description}
                    </ListGroup.Item>
                );
            }

        });
    }

    // renderChildren() {
    //     if(this.props.item.children !== null) {
    //         return (
    //             <ListGroup.Item className='children'>
    //                 <ListGroup>
    //                     {this.props.children.map((item, index) => (
    //                         <ListItem index={index} item={item}/>
    //                     ))};
    //                 </ListGroup> 
    //             </ListGroup.Item>
    //         );
    //     }
    // }

    render() {
        return (
            <ListGroup variant='flush'>
                {this.renderList()}
                {/* {this.renderChildren()} */}
                {/* <ListGroup.Item key={this.props.index} action href={`#${this.props.item.link}`}>
                    {this.props.item.description}
                </ListGroup.Item> */}
            </ListGroup>
        );
    }
}

export default ListItems;