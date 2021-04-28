import React from "react";
import { View, Text } from "react-native";
import { Provider as ReduxProvider } from 'react-redux';
import Home from "./Home";
import { store } from "./store";

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ReduxProvider store={store}>
				<Home />
			</ReduxProvider>
		);
	}
}