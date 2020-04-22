import React, { Component } from 'react';
import axios from 'axios';

class DataPage extends Component {

  constructor(props){
    super(props)
    this.state = {
    data: [],
    loader: true
    }
  }
 
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.setState({
          data:response.data, 
          loader :false
        });
      })
      .catch(error=> console.log(error))
  }

  render() {
    return (
      this.state.loader === false ?
      <div className='datadiv'>
          {this.state.data.map(d => (
              <ul key={d.id} className="data-div">
                <li>User Id - {d.userId}</li> 
                <li>Id - {d.id}</li> 
                <li>Title - {d.title}</li> 
                <li>Body - {d.body}</li>
              </ul>
          )
          )}
      </div>
      : <p>Loading . . .</p>  
    );
  }
}

export default DataPage;