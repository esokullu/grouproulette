import * as React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import colors from "../config/colors";


class AuthTextInput extends React.Component {

    // Create a React ref that will be used to store the
  // TextInput reference
  textInputRef = React.createRef();

  // Expose a `focus` method that will allow us to focus
  // the TextInput
  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  }
  render() {
    // We define our own custom style for the TextInput, but
    // we still want to allow the developer to supply its
    // own additional style if needed.
    // To do so, we extract the "style" prop from all the
    // other props to prevent it to override our own custom
    // style.
    const { error, style, ...otherProps } = this.props;

    return (
        <View style={[styles.container, style]}>
        <TextInput
          ref={this.textInputRef}
          selectionColor={colors.DODGER_BLUE}
          style={styles.textInput}
          {...otherProps}
        />
        <Text style={styles.errorText}>{error || ""}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  textInput: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  errorText: {
    // Setting a fixed text height prevents the label
    // "jump" when we show/hide it
    height: 20,
    color: colors.TORCH_RED
  }
});

export default AuthTextInput;