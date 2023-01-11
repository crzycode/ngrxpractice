import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "./counter.action"
import { initial } from "./counter.state"


const _counterreducer = createReducer(initial, on(increment,state =>{
  return{
    ...state,
    counter: state.counter + 1
  }
}), on(decrement, state =>{
  return{
    ...state,
    counter:state.counter -1
  }
}), on(reset, state =>{
  return{
    ...state,
    counter:0
  }
})

)
export function createreducer(state:any,action:any){

  return _counterreducer(state,action)
}
