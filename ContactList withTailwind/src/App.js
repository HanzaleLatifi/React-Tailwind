import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import MyFavourites from "./components/MyFavourites";
import EditContact from "./components/EditContact";
import ContactDetail from "./components/ContactDetail";
import NotFound from "./components/NotFound";


function App() {

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/user/:id" component={ContactDetail} />
          <Route path="/edit/:id" component={EditContact} />
          <Route path="/add" component={AddContact} />
          <Route path="/contactlist" component={ContactList} />
          <Route path="/myfavourites" component={MyFavourites} />
          <Route path="/" exact={true} component={Home} />
          <Route path=""  component={NotFound} />

        </Switch>
      </Layout>
    </>
  )
}


export default App;
