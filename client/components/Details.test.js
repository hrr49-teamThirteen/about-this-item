/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import { details, questions, answers }from '../../__mocks__/mockData.js';


// COMPONENTS
import App from '../App.jsx';
import Details from './Details.jsx';

let component;
let mockToggle;

beforeAll(async () => {
  mockToggle = jest.fn();
  Details.prototype.handleToggle = mockToggle;
  component = await shallow(<Details />);

});

afterAll(async () => {
  await component.unmount();
});

describe('Details Component', () => {
  it('should render Details component correctly', async () => {
      expect(component).toMatchSnapshot();
  });

  it('should call handleToggle function on button click', async () => {
    component.find('button').simulate('click');
    expect(mockToggle).toHaveBeenCalled();
  });
});