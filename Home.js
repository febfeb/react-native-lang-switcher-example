import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import ButtonSwitcher from "./ButtonSwitcher";
import Footer from "./Footer";
import Header from "./Header";
import { store } from "./store";
import { registerComponent } from "./store/actions";

class App extends Component {
	constructor(props) {
		super(props);

		this.props.dispatchRegisterComponent(this);
	}

	render() {
		let language = store.getState().appReducer.language;

		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Header />
				<View style={{ backgroundColor: '#fff', flex: 1, padding: 16 }}>
					<Text style={{ fontSize: 20 }}>Current Language: {language}</Text>
				</View>
				<Footer />
				<ButtonSwitcher />
			</SafeAreaView>
		);
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	dispatchRegisterComponent: data => dispatch(registerComponent(data)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
