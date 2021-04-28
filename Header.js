import React from "react";
import { View, Text } from "react-native";
import { connect } from 'react-redux';
import { store } from "./store";
import { registerComponent } from "./store/actions";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatchRegisterComponent(this);
    }

    render() {
        let language = store.getState().appReducer.language;

        return (
            <View style={{ backgroundColor: '#27ae60', padding: 16 }}>
                <Text style={{color:"#fff"}}>{language == 'en' ? "Home" : "منزل"}</Text>
            </View>
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
)(Header);
