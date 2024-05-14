"use client"
import React, { createContext, useContext, useReducer,useState } from "react";
import { date } from "zod";


interface State {
  data: any;
  files: any;
  porjectnew: string;
  all:any
  GoList:boolean
}

interface Action {
  type: string;
  data?: any;
}

const initialState: State = { 
  data:'data',
  files:'files',
  porjectnew:'null',
  all:{d:'',f:'',p:''},
  GoList:false
};
// let x :=  [{name:52}];
// x.p
// console.log(initialStat.)

const CounterContext = createContext<
{ state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

const reducer = (state: State, action: Action): any => {
  
  switch (action.type) {
    case "SET":
      return { ...state, data: action.data };
    case "File":
      return { ...state, files:  action.data };
    case "new":
      return {...state, porjectnew: action.data}
      
    case "GoList":
      return {...state, GoList: action.data}
      
    default:
      return state;
  }
};

export const CounterProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export default CounterContext;
