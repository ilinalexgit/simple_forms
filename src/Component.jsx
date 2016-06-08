import React, { PropTypes } from 'react';
import RichTextEditor from 'react-rte';

class FFAForm extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  onChange(value) {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    console.log(e);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>FFA Travel Justification</h2>
        <div className='form-group row'>
          <label htmlFor='inputOfficer' className='col-sm-2 form-control-label'>FFA Officer:</label>
          <div className='col-sm-4'>
            <input type='text' className='form-control' id='inputEmail3' placeholder='Email'/>
          </div>
          <label htmlFor='inputEmail3' className='col-sm-2 form-control-label'>Division:</label>
          <div className='col-sm-4'>
            <input type='text' className='form-control' id='inputEmail3' placeholder='Email'/>
          </div>
        </div>
        <input className='btn btn-primary' type='submit' value='Submit' />
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default FFAForm;
