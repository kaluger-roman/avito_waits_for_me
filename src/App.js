import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import {PAGE_PATHS} from './redux/Reducers/AppReducer'
import {SearchInput} from "./components/componentsformainpage/SearchInput";
import MainPageBlock from "./components/componentsformainpage/MainPageBlock";
import {Paginator} from "./components/componentsformainpage/Paginator";
import {ToHomePageButton} from "./components/RepositoryInfoPage/ToHomePageBtn";
import {RepoCard} from "./components/RepositoryInfoPage/RepoCard";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={PAGE_PATHS.HOME}>
                        <SearchInput/>
                        <MainPageBlock/>
                        <Paginator/>
                    </Route>
                    <Route path={PAGE_PATHS.INFO+':name'}>
                        <ToHomePageButton/>
                        <RepoCard/>
                    </Route>
                    <Route path="*">
                        <Redirect to={PAGE_PATHS.HOME}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
