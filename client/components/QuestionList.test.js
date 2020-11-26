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
import QuestionList from './QuestionList.jsx';

let component;
let props;

beforeAll(async () => {
  props = {
    questions: questions,
    answers: answers,
  }

  component = mount(<QuestionList {...props}/>);


});

afterAll(async () => {
  await component.unmount();
});

describe('QuestionList Component', () => {
  it('should render QuestionList component correctly', async () => {
      expect(component).toMatchSnapshot();
  });
});