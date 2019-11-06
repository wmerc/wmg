import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import "./GridLayout.css";
import code914logo from '../../../static/assets/graphics/code-914-logo.png';
import travelboard from '../../../static/assets/graphics/travelboard.png';
import nahrightcover from '../../../static/assets/graphics/nahrightcover.jpg';
import djtwitter from '../../../static/assets/graphics/djtwitter.jpg';
import stanipcus from '../../../static/assets/graphics/stanipcus.jpg';
import djapp from '../../../static/assets/graphics/djapp.png';
import djfacebook from '../../../static/assets/graphics/djfacebook.png';
import saulquote from '../../../static/assets/graphics/saulquote.png';
import aliquote from '../../../static/assets/graphics/aliquote.jpg';
import djquote from  '../../../static/assets/graphics/djquote.jpg';

const masonryOptions = {
    transitionDuration: 0,

};

class GridLayout extends Component {
    render() {
        return (
            <Masonry
                className={'grid-class'} // default ''
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
            <div className="grid-item"><img src={code914logo}/></div>
            <div className="grid-item"><img src={travelboard}/></div>
            <div className="grid-item"><img src={nahrightcover}/></div>
            <div className="grid-item"><img src={djtwitter}/></div>
            <div className="grid-item"><img src={stanipcus}/></div>
            <div className="grid-item"><img src={djfacebook}/></div>
            <div className="grid-item"><img src={djapp}/></div>
            <div className="grid-item"><img src={saulquote}/></div>
            <div className="grid-item"><img src={aliquote}/></div>
            <div className="grid-item"><img src={djquote}/></div>
            </Masonry>
        )
    }
}

export default GridLayout;