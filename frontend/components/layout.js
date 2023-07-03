import React, { Component } from 'react';
import Header from './header';

class layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className='layout'>
                <Header />
                <main className="">
                    {children}
                </main>
            </div>
        );
    }
}

export default layout;