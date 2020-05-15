import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
declare const module: any

// css imports
import './css/index.css'
import './css/colors.css'
import './css/formElements.css'
import './css/Loader.css'
import './css/flex.css'

const rootNode = document.getElementById('root') as HTMLElement
ReactDOM.render(<App />, rootNode)

if (module.hot) {
    module.hot.accept();
}