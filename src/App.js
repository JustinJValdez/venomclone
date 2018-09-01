import React, { Component } from 'react';
import './App.css';
import Background from './components/Background';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="Header">
          <Header />
        </header>
        <Background className="Background" />
        <body className="Body">
          <Dashboard />
        </body>
        <br/>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
