import React, { Component } from 'react';
import {
  Text, 
  TouchableWithoutFeedback, 
  View,
  Linking,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import * as actions from '../actions';

class SingleTrick extends Component {

  renderDescription() {
    const { textStyle, imageStyle } = styles;
    const { trick, expanded } = this.props;

    if (expanded) {
      return (
        <View>
            <CardSection>
                <Image
                    source={{ uri: trick.image }}
                    style={imageStyle}
                />
            </CardSection>
            <CardSection>
            <Text style={textStyle}>
                {trick.description}
            </Text>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(trick.video)}>
                    Watch Video
                </Button>
            </CardSection>
        </View>
      );
    }
  }

      render() {
        const { titleStyle } = styles;
        const { id, name } = this.props.trick;
    
    
        return (
          <TouchableWithoutFeedback
            onPress={() => this.props.selectTrick(id)}
          >
            <View>
              <CardSection>
                <Text style={titleStyle}>
                  {name.toUpperCase()}
                </Text>
              </CardSection>
              {this.renderDescription()}
            </View>
          </TouchableWithoutFeedback>
        );
      }
    }

const styles = {
    titleStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingLeft: 15,
      paddingTop: 10,
      paddingBottom: 10
    },
    textStyle: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null        
    }
  };

const mapStateToProps = (state, ownProps) => {
    const expanded = state.current === ownProps.trick.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(SingleTrick);
