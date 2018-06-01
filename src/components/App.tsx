import * as React from 'react';
import Inputadress from './Inputadress';
import { connect } from 'react-redux';
import Map from './Map';

import { fetchEstablishmentData } from '../actions/establishmentDataActions';
import { stopFetchingData } from '../actions/fetchingDataActions';

interface AppProps {
}

interface AppState {
}

export default class App extends React.Component<AppState, AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  public render () {
    return <div>
      <Inputadress />
      <div className='map'>
        <Map />
      </div>
    </div>;
  }
}
