import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { useMedia } from './Hooks'
import Karl from './App'

const App = () => {
    const viewModel = useMedia(
        ['(min-width: 1440px)', '(min-width: 992px)', '(min-width: 768px)', '(min-width: 1px)'],
        ['wide', 'desktop', 'tablet', 'mobile'],
        'desktop'
      );
    

    return (
        <Karl viewModel={viewModel} />
    )
    
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
