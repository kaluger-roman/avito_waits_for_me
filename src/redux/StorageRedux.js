import CreateSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./Reducers/rootReducer";
import {sagaWatcher} from "./SAGA/sagas";
import {ThrottleActions} from "./MIDDLEWARES/ThrottleActionsMiddleware";


const  saga=CreateSagaMiddleware();

export const store=createStore(rootReducer, compose(
    applyMiddleware(
        ThrottleActions,
        saga,
    ),
));

saga.run(sagaWatcher);

