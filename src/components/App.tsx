import * as React from 'react'
import Inputadress from './Inputadress'

interface AppProps {
}

interface AppState {
}

export default class App extends React.Component<AppState, AppProps> {
  constructor(props: AppProps) {
    super(props)
  }

  render () {
    return <div>
      <Inputadress />
    </div>
  }
}