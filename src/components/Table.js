import React from "react";
export class Table extends React.Component {

   remove(id){
        alert(id);
    }

    render() {

        if (!this.props.list) {
            <div> No Record !</div>
        }

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Date created</th>
                                    <th>Preview</th>
                                    <th>Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.list.map(function (item) {
                                    return <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.dateCreated}</td>
                                        <td></td>
                                        <td><button type="button" onClick={this.remove.bind(this,item.id)} className="btn btn-danger">Remove</button></td>
                                    </tr>
                                    }, this)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}