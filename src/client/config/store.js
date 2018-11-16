import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk];

export const store = createStore( 
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export const persistor = persistStore(store);