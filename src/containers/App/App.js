/**
 * Created by liulj on 2017/7/1.
 */
import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

import './App.css';


class App extends React.Component {
    constructor(pros) {
        super(pros);
        this.state = {
            total: null,
            next: null,
            operation: null,
        };
    }

    handleClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
    };

    render() {
        return (
            <div className="component-app">
                <Display
                    value={this.state.next || this.state.total || '0'}
                />
                <ButtonPanel clickHandler={this.handleClick}/>
            </div>
        );
    }
}

export default App;