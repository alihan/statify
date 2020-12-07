import React from 'react'
import { hot } from 'react-hot-loader'
import Header from './components/title'
import styles from './app.module'

const App = () => {
  return (
    <>
      <h2 className={styles.red}>This is our React application!</h2>
      <Header></Header>
    </>
  )
}

export default hot(module)(App)
