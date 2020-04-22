import React , {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import MyForm from './Component/MyForm';
import Footer from './Component/Footer';
import DataPage from './Component/DataPage';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={MyForm} />
        <Route path="/data" exact component={DataPage} />
      </Switch>
      <Footer />
    </Fragment>
  );
}
export default App;