import React, { Component } from "react";
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  UIManager,//para que soporte android la animacion
  LayoutAnimation
 } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../action";

class ListItem extends Component {

  componentWillUpdate(){
    UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setLayoutAnimationEnabledExperimental(true);//para que soporte android la animacion
     LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 10,
    paddingLeft: 15
  }
};
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;//ownProps por defecto usa los props q recibe el componente
  return { expanded };
};
export default connect(
  mapStateToProps,
  actions
)(ListItem);
