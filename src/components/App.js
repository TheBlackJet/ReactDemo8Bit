import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Table } from './Table';

// import actions
// import components


export const App = () => {
  return (
    <div className="container">
      <div className="row wrapper">
        <div className="col media-upload-column">
          <div className="row local-media-upload">
            <form>
              <div className="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" aria-describedby="text" required placeholder="Enter title" />
                <small id="text" class="form-text text-muted">Please enter the title of the media.</small>
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <textarea className="form-control" id="description" required rows="3"></textarea>
              </div>
              <div className="form-group">
                <label for="file">Select media ( accepted : video, image, audio file formats  )</label>
                <input type="file" className="form-control-file" id="file"/>
              </div>
              <div className="preview">
                <img src=""/>
              </div>
              <button type="submit" className="btn btn-primary">Add new media</button>
            </form>
          </div>
        </div>
        <div className="col"><Table /></div>
      </div>
    </div>
  );
}