'use strict';

import React from 'react';
import shell from 'shell';
import $ from 'jquery';
import csv from 'csv';
var parse = csv.parse;
import _ from 'lodash';

export class Main extends React.Component {
  state = {
    message: 'Hello, Electron'
  }
  constructor () {
    super();
    this.openGithub = ::this.openGithub
  }
  openGithub () {
    shell.openExternal('https://github.com/Quramy/electron-jsx-babel-boilerplate');
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron main">
          <h1>{this.state.message}</h1>
          <img src="../assets/images/electron.svg" alt="" width="128px"></img>
          <p>Provided by <a href="#" onClick={this.openGithub}>electron-jsx-babel-boilerplate<span className="glyphicon glyphicon-heart"></span></a></p>
        </div>
      </div>
    );
  }
}

export class Trac extends React.Component {
  state = {
    tickets: [
      {"id": 1, "summary": "test"},
      {"id": 2, "summary": "test2"}
    ]
  }
  
  componentDidMount() {
    $.get(this.props.source, function(result) {
      parse(result, {}, function(err, output) {
        _.map(output, function(e) {
        });
      });
    }.bind(this));
  }
  
  render() {
    return (
      <div>
      <ul>
          {this.state.tickets.map(function(i) { return <li>{i}</li>;})}
      </ul>
      </div>
    );
  }
}