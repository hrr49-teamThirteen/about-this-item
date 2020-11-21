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

// beforeAll(async () => {
//   server = http.createServer(app);
//   await server.listen();
//   request = supertest(server);

// });

// afterAll(() => {
//   db.sequelize.close();
//   server.close();
// });
// mockAxios.mockResponse({ url: '/api/products/1/details' });

describe('Components', () => {
  it('App and children should render correctly', async () => {
    component = await mount(<App />);
    // setImmediate(() =>{
    //   component.update();
    // })
    expect(component).toMatchSnapshot();
    expect(mockAxios).toHaveBeenCalledWith({"method": "GET", "url": "api/products/1/details"});

    // component.unmount();
  });

  xit('Details should render correctly', async () => {
    let parent = await mount(<App />);
    component = mount(<Details />);
    expect(component).toMatchSnapshot();
    // component.unmount();
  });
});