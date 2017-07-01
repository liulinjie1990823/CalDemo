/**
 * Created by liulj on 2017/7/1.
 */

import React from 'react';
import './Display.css';

class Display extends React.Component {
    render() {
        return (
            <div className="component-display">
                <div>
                    {this.props.value}
                </div>
            </div>
        );
    }
}

Display.propTypes = {
    value: React.PropTypes.string,
};

export default Display;



