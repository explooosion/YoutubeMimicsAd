'use strict';

if (module.hot) {
  module.hot.accept();
}

import Header from '../components/header/Header';

const a = new Header();

import 'babel-polyfill';
import '../styles/index.scss';