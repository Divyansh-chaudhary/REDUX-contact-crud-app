import React from 'react'
import './css/App.css'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Contacts from './components/contact/Contacts'
import CreateContact from './components/contact/CreateContact'
import EditContact from './components/contact/EditContact'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Navbar />
          <section className="container mt-3">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={CreateContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />
            </Switch>
          </section>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App
