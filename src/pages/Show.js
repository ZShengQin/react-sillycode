import React, { Component } from 'react';
import { Table } from 'antd';

const PATH_BASE = 'https://www.sillycode.cn';
const PATH_SEARCH = '/competition/strategy/0';

class Show extends Component{

  constructor(props){
    super(props)
    this.state = {
      columns: [
        { 
          title: 'Name',
          dataIndex: 'title', 
          sorter: (a, b) => a.title.length - b.title.length,
        }, { 
          title: 'Age', 
          dataIndex: 'url', 
          defaultSortOrder: 'descend', 
          sorter: (a, b) => a.age - b.age, 
        }, {
          title: 'Address', 
          dataIndex: 'address',
          sorter: (a, b) => a.address.length - b.address.length,
        }
      ],
  
      result: null
    }
  }

  onChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }
  
  setSearchTopStories(result) {
    this.setState({ result });
  }

  fetchSearchTopStories(searchTerm){
    console.log(`${PATH_BASE}${PATH_SEARCH}`)
    fetch(`${PATH_BASE}${PATH_SEARCH}`, {
      mode: 'no-cors'
    })
      .then(response => response.json())
      .then(result => this.setState({result: result.hits}))
      .catch(e => e);
    console.log(this.state.result)
  }

  componentDidMount(){
    
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }


  render(){
    console.log(this.props.match.params);
    const { result } = this.state;
    if(!result) { return null; }
    return(
      <Table columns={this.state.columns} dataSource={result} onChange={this.onChange} />
    );
  }
}

export default Show;