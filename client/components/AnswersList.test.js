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
import AnswersList from './AnswersList.jsx';

let component;
let props;

beforeAll(async () => {
  props = {
    answers: answers,
    questionId: 1
  }

  component = mount(<AnswersList {...props}/>);


});

afterAll(async () => {
  await component.unmount();
});

describe('AnswersList Component', () => {
  it('should render AnswersList component correctly', async () => {
      expect(component).toMatchSnapshot();
  });
});