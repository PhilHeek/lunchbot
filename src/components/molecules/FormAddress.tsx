import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/';
import { TextField, Button } from '@material-ui/core/';
import EstablishmentActions from '../../actions/';

type Props = {
  addLocation: (location: string) => any;
};
type State = {
  location: string;
};

class FormAddress extends React.Component<Props, State> {
  readonly state: Readonly<State> = { location: '' };

  constructor(props: any) {
    super(props);
  }

  public render () {
    const { location } = this.state;

    return <div className="form">
             <h1>Find a restaurant near me</h1>
             <div className="form-adress">
                <TextField
                  label="Adress"
                  id="margin-none"
                  defaultValue="" value={location}
                  onChange={this.handleLocationChange} helperText='Please fill out your current position'>
                </TextField>               
                <Button    variant="raised" className="form-button-item"
                           onClick={this.handleAdd} disabled={!location}>
                       Submit
               </Button>
             </div>
           </div>;
  }

  private handleLocationChange: React.ReactEventHandler<HTMLInputElement> = ev => {
    this.setState({ location: ev.currentTarget.value });
  }

  private handleAdd = () => {
    this.props.addLocation(this.state.location);
    this.setState({ location: ''});
  }
}

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {
  addLocation: (location: string) => EstablishmentActions.add({ location }),
})(FormAddress);
