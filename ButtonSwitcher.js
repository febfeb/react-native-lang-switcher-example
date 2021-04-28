import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { store } from "./store";
import { registerComponent, setLanguage } from "./store/actions";

class ButtonSwitcher extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatchRegisterComponent(this);
    }

    render() {
        let language = store.getState().appReducer.language;

        return (
            <TouchableOpacity style={styles.btn} onPress={() => {
                if (language == "en") {
                    this.props.dispatchSetLanguage("ar");
                } else {
                    this.props.dispatchSetLanguage("en");
                }

                //refresh all components
                store.getState().appReducer.listComponents.map((item) => {
                    item.forceUpdate();
                })
            }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>Switch to {language == 'en' ? "عربى" : "English"}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    btn: {
        position: "absolute",
        bottom: 70,
        right: 16,
        padding: 10,
        backgroundColor: "#2980b9",
        borderRadius: 10
    }
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    dispatchRegisterComponent: data => dispatch(registerComponent(data)),
    dispatchSetLanguage: data => dispatch(setLanguage(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonSwitcher);
