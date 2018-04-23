import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Table } from './Table';
import { FireBase, getFileAsDataURL } from '../utility-functions';
import { FIREBASE_CONFIG } from "../app-config-constants";
// import actions
import { addFileToTheList, getInitialData } from "../actions/app";
import { ACCEPTED_MIME_TYPES } from "../app-config-constants";
import _ from "lodash";
// import components


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: '',
      file: '',
      fileType: '',
      base64: '',
    }
  }


  componentDidMount() {

    this.props.getInitialData();

    //super();
    // debugger
    // const fireBase = new FireBase();
    // fireBase.setConfiguration(FIREBASE_CONFIG);
    // fireBase.getFileReference("/media/index.html");
    // fireBase.putFileToServer("nnnnnnnnnnn").then(data => {
    //   console.log("cool");
    // });

  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  uploadFile(evt) {
    evt.preventDefault();
    if (this.state.file) {
      this.props.addFileToTheList(this.state);
    }

  }

  fileOnchange(e) {
    const file = this.fileUpload.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          this.setState({
            base64: reader.result
          })
      };
    }
    if (ACCEPTED_MIME_TYPES.indexOf(file.type) <= -1) {

      alert("Wrong file type! Please select another file");
      this.fileUpload.value = "";
      return;
    }

    this.setState({
      file: file,
      fileType: file.type
    });
  }


  render() {
    return (
      <div className="container">
        <div className="row wrapper">
          <div className="col media-upload-column">
            <div className="row local-media-upload">
              <form onSubmit={this.uploadFile.bind(this)}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" id="title" aria-describedby="text" required placeholder="Enter title" onChange={e => this.handleChange(e)} value={this.state.title} />
                  <small id="text" className="form-text text-muted">Please enter the title of the media.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea className="form-control" id="description" rows="3" onChange={e => this.handleChange(e)} value={this.state.description}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="file">Select media ( accepted : video, image, audio file formats  )</label>
                  <input type="file" required className="form-control-file" id="file" onChange={this.fileOnchange.bind(this)}
                    ref={(ref) => this.fileUpload = ref} />
                </div>
                <div className="preview">
                  <img src="" />
                </div>
                <button type="submit" className="btn btn-primary">Add new media</button>
              </form>
            </div>
          </div>
          <div className="col"><Table list={this.props.appState.contentList} /></div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFileToTheList, getInitialData }, dispatch)
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(App)