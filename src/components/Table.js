import React from "react";
export const Table = () => {
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
                                <tr>
                                    <td>Argentina</td>
                                    <td>Spanish (official), English, Italian, German, French</td>
                                    <td>41,803,125</td>
                                    <td>31.3</td>
                                    <td><button type="button" className="btn btn-danger">Remove</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
}