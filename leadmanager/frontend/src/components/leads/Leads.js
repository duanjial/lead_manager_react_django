import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <div>
        <h1>This is the lead</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leadsReducer.leads
});

export default connect(
  mapStateToProps,
  { getLeads }
)(Leads);
