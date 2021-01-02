import React, { Component } from 'react';

class TOC extends Component {
    render() {
      console.log('TOC render');
      var lists = [];
      var data = this.props.data
      var i = 0;
      while( i < data.length ){
        lists.push(
          <li key={data[i].id}>
            <a
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                debugger;
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
              >{data[i].title}</a>
              </li>);
        i += 1;
      }
      return(
        <nav>
          <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
          </ul>
        </nav>
      );
    }
  }

export default TOC;