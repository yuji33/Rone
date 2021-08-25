import * as React from "react";
import { ButtonGroup } from "react-native-elements";

 const Menu=() => {
  const [
    selectedIndex,
    setSelectedIndex
  ] = React.useState(1);
  const [
    selectedIndexes,
    setSelectedIndexes
  ] = React.useState([]);
  return (
    <ButtonGroup
      buttonStyle={{ width: 50 }}
      buttonContainerStyle={{}}
      buttons={[
        "Hello",
        "World",
        "React",
        "Native",
        "Elements"
      ]}
      containerStyle={{}}
      disabled={[3, 4]}
      disabledStyle={{}}
      disabledTextStyle={{}}
      disabledSelectedStyle={{}}
      disabledSelectedTextStyle={{}}
      innerBorderStyle={{}}
      onPress={selectedIdx =>
        setSelectedIndex(selectedIdx)
      }
      selectedButtonStyle={{}}
      selectedIndex={selectedIndex}
      selectedIndexes={selectedIndexes}
      selectedTextStyle={{}}
      textStyle={{}}
    />
  );
}

export default Menu;