import './styles/global.scss';
import Header from './component/header';
import PotatoesContainer from './containers/potatoes';
import { Provider } from 'react-redux';
import React from 'react';
import store from './configureStore';

const app = () =>
  <Provider store={store}>
    <div>
      <Header />
      <PotatoesContainer />
    </div>
  </Provider>;

export default app;
