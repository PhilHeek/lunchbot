import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {
}

interface State {
}

export default class Inputadress extends React.Component<State, Props> {
  constructor(props: Props) {
    super(props);
  }

  public render () {
    return  <div className='form-adress'>
      <TextField
        label='Adress'
        id='margin-none'
        defaultValue=''
        helperText='Please fill out your current position'
      />
      <Button
        variant='raised'
        className='form-button-item'>
        Submit
      </Button>
    </div>;
  }
}
