/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import details from '../__mocks__/mockData.js';
import questions from '../__mocks__/mockData.js';
import answers from '../__mocks__/mockData.js';

// COMPONENTS
import App, { getAnswers, handleClick } from './App.jsx';
import Details from './components/Details.jsx';

let component;
let mockClickQAndA;
let mockHandleToggle;
let mockHandleShowToggle;


beforeAll(async () => {
  mockClickQAndA = jest.fn();
  // App.prototype.handleShowToggle = mockHandleShowToggle;

  mockHandleToggle = jest.fn();

  App.prototype.handleClick = mockClickQAndA;
  // Details.prototype.handleToggle = mockHandleToggle;
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

describe('App Component', () => {
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

  it('should call handleClick on Q&A tab click', async () => {
    await component.find('#qAndA').simulate('click');
    expect(mockClickQAndA).toHaveBeenCalled();
  });

  it('should call handleClick on Q&A tab click', async () => {
    let expandButton = await component.find('#btn-expand');
    expect(expandButton.text()).toEqual('Show more');
    // component.instance().handleShowToggle();
    expandButton.simulate('click');
    expect(component.state().showToggle).toBe(true);
    // expect(expandButton.text()).toEqual('Show less');

  });

});