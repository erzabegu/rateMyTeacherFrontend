import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Routing from './routes';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';


const Main = () => {
    return <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
                    <BrowserRouter>
                        <Routing/>
                    </BrowserRouter>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </>
}

export default Main;




