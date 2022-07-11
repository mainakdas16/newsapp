import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<div className='container'>
				<Router>
					<h1 style={{fontFamily: "Book Antiqua", textAlign : "center", fontWeight: "bolder", fontSize: "3rem"}}>THE NEWSLINT JOURNAL.</h1>
					<Navbar />
					<hr style={{marginTop : "0rem"}}/>

					<Switch>
						<Route exact path="/">
							<News key = "general" pageSize = {15} category = "general" country = "in" />
						</Route>
						<Route exact path="/general">
							<News key = "general" pageSize = {15} category = "general" country = "in" />
						</Route>
						<Route exact path="/business">
							<News key = "business" pageSize = {15} category = "business" country = "in" />
						</Route>
						<Route exact path="/entertainment">
							<News key = "entertainment" pageSize = {15} category = "entertainment" country = "in" />
						</Route>
						<Route exact path="/health">
							<News key = "health" pageSize = {15} category = "health" country = "in" />
						</Route>
						<Route exact path="/sports">
							<News key = "sports" pageSize = {15} category = "sports" country = "in" />
						</Route>
						<Route exact path="/science">
							<News key = "science" pageSize = {15} category = "science" country = "in" />
						</Route>
						<Route exact path="/technology">
							<News key = "technology" pageSize = {15} category = "technology" country = "in" />
						</Route>
					</Switch>
				</Router>
			</div>
		)
	}
}