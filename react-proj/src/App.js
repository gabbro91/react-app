import React,{Component} from 'react';
import './App.css';
import VideoList from './components/movie_list';
import Navbar from './components/navbar';


const APIKEY = 'a0b236f1';
const APIURL = 'http://www.omdbapi.com';

function fetchMovies(search= ''){
return fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search ).then(res=> res.json())   
}

class App extends Component {

constructor(props){
super(props);
this.state = {
  movies : [],
  totalCount : 0
} 
}


componentDidMount(){ 
fetchMovies().then(res=> {
 this.setState({
   movies: res.Search
 }) 
})
}
  render(){
   return(
     <React.Fragment>
    <Navbar/>
   <div className="container">
     <h1>CINEMA NOW</h1>
     <VideoList movies={this.state.movies}/> 
      
    </div>
    </React.Fragment>
  );
}
}
export default App;
