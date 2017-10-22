import React, { Component } from 'react';
import './app.css';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { TopImage } from '../components/top-image/top-image';

import { Switch, Route } from 'react-router-dom';

export class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <TopImage />
                <Switch>
                    <Route exact path="/" component={TodoComponent} />
                    <Route path="/masaze" component={TodoComponent} />
                    <Route path="/kadernictvi" component={TodoComponent} />
                    <Route path="/kosmetika" component={TodoComponent} />
                    <Route
                        path="/cambridge-weight-plan"
                        component={TodoComponent}
                    />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;

const TodoComponent = () => <div>Under construction</div>;
