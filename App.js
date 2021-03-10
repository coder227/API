import './App.css';
import {getanime} from './api';
import{useState,useEffect} from "react" ;
import Animecard from './anime';

function App() {
  const[anime,setAnime]=useState({});
  useEffect(()=>{
    getanime().then((res) => {
      setAnime(res.data.results);
    });
    },[]);
  return (
    <div class any ="App">
      {
        anime.length&& anime.map((a)=>{
          return <Animecard name ={a.title} image ={a.url}/>
        })}
    </div>
    );
}

export default App;
