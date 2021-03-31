import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import StreamList from "./StreamList";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { deleteStream, stream } = this.props;
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => deleteStream(stream.id)}
        >
          Delete
        </button>
        <Link className="ui button " to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title '${this.props.stream.title}'`;
  }

  render() {
    return (
      <div>
        <StreamList />
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
