import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../App';
import * as countsAction from "../actions/countsAction";
import {StyleSheet, View, Button, Text} from 'react-native';
import counts from "../reducers/countsReducer";
import CountsView from "../components/counter/CountsView";

class NaaguScaffoldApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }

  render() {
    const {actions, countsData} = this.props;
    return (
      <View>
        <CountsView countsData={countsData} actions={actions}/>
      </View>
    );
  }
};

NaaguScaffoldApp.propTypes = {
  actions: PropTypes.object.isRequired,
  countsData: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    countsData : state.counts,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      countsAction: bindActionCreators(countsAction, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NaaguScaffoldApp);
