import React,{Component} from 'react';


export default class SearchBar extends Component{
constructor(props){
super(props);
this.state={
term : ''
}
}
searchChange =(evt)=>{
    this.setState({term : evt.target.value})
}
render(){

    return(
    <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2"
    onChange ={this.searchChange}
    type="search" value={this.state.term} placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
)


}}
