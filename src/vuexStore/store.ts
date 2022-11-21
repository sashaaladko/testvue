
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'

export interface State {
    name: string,
    address: string,
    count: number,
    gln: number,
    changeField:(key:any, value:any)=> void
}

const store: StoreOptions<State> = {
    state: {
        name: '',
        address: '',
        count: 0,
        gln: 0,  
        changeField (key: any, value:any){
            //@ts-ignore 
                    store.state[key] = value
                }
    },

   
}

export default new Store<State>(store)


// const state: State = {
//     name: '',
//     address: '',
//     count: 0,
//     gln: 0,     
// }

// export const store = createStore<State>({
//     state,
//     mutations: {

//     }
// })
