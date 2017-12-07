import React, { Component } from 'react';
import './app.css';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

import { CambridgePage } from '../components/cambridge-page/cambridge-page';
import { LandingPage } from '../components/landing-page/landing-page';
import { ServicePage } from '../components/service-page/service-page';

import { Switch, Route } from 'react-router-dom';

import salonApi from '../api/salon-api';

export class App extends Component {
    render() {
        console.log(salonApi);
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/masaze" component={ServicePage} />
                    <Route path="/kadernictvi" component={ServicePage} />
                    <Route path="/kosmetika" component={ServicePage} />
                    <Route
                        path="/cambridge-weight-plan"
                        component={CambridgePage}
                    />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;

const TodoComponent = () => <div>Under construction</div>;
