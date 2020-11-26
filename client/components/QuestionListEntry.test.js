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
import QuestionListEntry from './QuestionListEntry.jsx';

let component;
let props;

beforeAll(async () => {
  props = {
    question: questions[0]
  }

  component = shallow(<QuestionListEntry {...props}/>);
});

afterAll(async () => {
  await component.unmount();
});

describe('QuestionListEntry Component', () => {
  it('should render QuestionListEntry component correctly', async () => {
      expect(component).toMatchSnapshot();
  });
});