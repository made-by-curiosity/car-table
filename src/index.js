import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import './index.css';
import 'modern-normalize';

const theme = {
  colors: {
    primary: 'black',
    secondary: 'white',
    accent: 'orangered',
    addBtnBgColor: 'rgb(0, 128, 128)',
    deleteBtnBgColor: 'rgb(220, 0, 10)',
    deleteBtnHoverBgColor: 'rgb(190, 0, 20)',
    actionsDeleteBtnBgColor: 'rgb(220, 20, 60)',
    actionsEditBtnBgColor: 'rgb(255, 215, 0)',
    errorMsgColor: 'rgb(225, 0, 40)',
    tableSecondaryColor: 'rgb(240, 248, 255)',
    tableHead: 'rgb(176, 196, 222)',
    backdrop: 'rgba(0, 0, 0, 0.1)',
    closeModal: 'silver',
    disabledPageBtn: 'silver',
  },
  shadows: {
    boxShadowMain: '0px 1px 5px -2px rgba(0, 0, 0, 0.75)',
    boxShadowMainHover: '0px 1px 5px 0px rgba(0, 0, 0, 0.75)',
    boxShadowPopup: '0px 3px 8px 0px rgba(0, 0, 0, 0.75)',
    boxShadowBtnActive: '0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset',
  },
  borders: {
    primary: '1px solid dimgray',
    tableRow: '1px solid #dddddd',
    borderRadiusMain: '5px',
    borderRadiusAccent: '12px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
