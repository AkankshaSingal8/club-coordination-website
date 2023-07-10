import React from 'react';
import ReactDOM from 'react-dom';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const App = () => {
  return <SwaggerUI url="/api_longest_code.json" />;
};

ReactDOM.render(<App />, document.getElementById('root'));
