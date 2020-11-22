/**
 * @jest-environment jsdom
 */

// require('babel-polyfill');
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios';

// COMPONENTS
import App, { getProductDetails } from './App.jsx';
import Details from './components/Details.jsx';


// const db = require('../db/mariadb.js');
// const http = require('http');
// let app = require('../server/server.js');
// app = app.app;
// const supertest = require('supertest');

let component;
// let server;
// let request;

beforeAll(async () => {

  component = await mount(<App />);

});

afterAll(async () => {
  await component.unmount();
});
// mockAxios.mockResponse({ url: '/api/products/1/details' });

describe('App Component', () => {
  it('should render App correctly', async () => {
    // component = await mount(<App />);
    expect(component).toMatchSnapshot();
    // component.unmount();
  });

  it('should make 2 API calls on mount', async () => {
    expect(mockAxios).toHaveBeenCalledTimes(2);

  });

  xit('Details should render correctly', async () => {
    // let parent = await mount(<App />)


      component = shallow(<Details />);
      expect(component).toMatchSnapshot();

  });
});