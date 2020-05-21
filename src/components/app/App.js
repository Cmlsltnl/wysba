import React, { Component } from 'react'

import './App.css'
import Age from 'components/age/Age'
import Result from 'components/result/Result'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Əgər bir ferma heyvanı olsaydın hələ də yaşayardın?</h1>
          <h2 className="app-description">Ferma heyvanları hələ həyatlarını tam yaşamamış öldürülürlər. Əgər bir ferma heyvanı olsaydın səncə indi aqibətin necə idi?</h2>
        </header>
        <div className="app-core">
          <Age/>
          <Result/>
        </div>
      </div>
    )
  }
}

export default App
