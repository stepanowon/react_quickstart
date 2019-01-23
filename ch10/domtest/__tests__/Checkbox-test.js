import React from 'react';
import Checkbox from '../Checkbox';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


test('Checkbox changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <Checkbox labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
