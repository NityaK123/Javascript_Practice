import {createStore} from 'redux'
import reducers from './reducers'


const store = createStore(reducers) 

console.log("Stroe",store)

export default store

