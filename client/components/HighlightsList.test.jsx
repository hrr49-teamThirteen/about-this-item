/**
 * @jest-environment jsdom
 */
import 'babel-polyfill';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import { details, questions, answers }from '../../__mocks__/mockData.js';

// COMPONENTS
import HighlightsList from './HighlightsList.jsx';

let component;
let props;

beforeAll(async () => {
  props = {
    highlights: details.highlights
  }

  component = mount(<HighlightsList {...props}/>);


});

afterAll(async () => {
  // await component.unmount();
});

describe('HighlightsList Component', () => {
  it('should render HighlightsList component correctly', async () => {
      expect(component).toMatchSnapshot();
  });
});