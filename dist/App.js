import React from 'react';
import './App.css';

function App({
  settings
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title m-b-md"
  }, settings.title)));
}

App.defaultProps = {
  settings: {
    title: "Something"
  }
};
export default App;