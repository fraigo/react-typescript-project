import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DropDown from './DropDown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DropDown caption="Test"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});