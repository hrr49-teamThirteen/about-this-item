/**
 * @jest-environment jsdom
 */
import 'babel-polyfill';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import { details, questions, answers }from '../__mocks__/mockData.js';


// COMPONENTS
import App from './App.jsx';
import Details from './components/Details.jsx';

let component;


beforeAll(async () => {
  component = await mount(<App />);

  await mockAxios.mockResponse(
    { method: 'GET' },
    { url: '/api/products/1/details' },
    { data: details });

  await mockAxios.mockResponse(
    { method: 'GET' },
    { url: '/api/products/1/questions' },
    { data: questions });

  await mockAxios.mockResponse(
    { method: 'GET' },
    { url: '/api/products/1/answers' },
    { data: answers });


});

afterAll(async () => {
  await mockAxios.reset();
  await component.unmount();
});

describe('App Component and Children', () => {
  it('should render App correctly', async () => {
    expect(component).toMatchSnapshot();
  });

  it('should make 2 API calls on mount', async () => {
    expect(mockAxios).toHaveBeenCalledTimes(2);
  });

  it('should call for details on mount', async () => {
    expect(mockAxios).toHaveBeenCalledWith({ 'method': 'GET', 'url': '/api/products/1/details' });
  });

  it('should call for questions on mount', async () => {
    expect(mockAxios).toHaveBeenCalledWith({ 'method': 'GET', 'url': '/api/products/1/questions' });
  });

  it('should call for answers on Q&A tab click', async () => {
    await component.find('#qAndA').simulate('click');
    expect(mockAxios).toHaveBeenCalledWith({ 'method': 'GET', 'url': '/api/products/1/answers' });
  });

  it('should should change button text on click', async () => {
    let expandButton = await component.find('#btn-expand');

    expect(expandButton.text()).toEqual('Show more');
    expandButton.simulate('click');
    expect(component.state().showToggle).toBe(true);
    expect(expandButton.text()).toEqual('Show less');
  });

  it('should expand specifications section after button press', async () => {
    let expandButton = await component.find('#btn-expand');
    let specsContainer = await component.find('#specs-container');

    expect(specsContainer.instance().classList).not.toContain('collapsed');
    expandButton.simulate('click');
    expect(specsContainer.instance().classList).toContain('collapsed');
  });

  it('should show more questions on button click', async () => {
    let moreQuestions = await component.find('.btn.question.more');
    let questionsContainer = await component.find('QAndA');

    expect(questionsContainer.state().visibleQuestions).toBe(2);
    moreQuestions.simulate('click');
    expect(questionsContainer.state().visibleQuestions).toBe(5);

  })
});