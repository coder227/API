const Animecard = ({name,image}) =>{
    return(
         <div className="anime">
             <div className="anime_image">
                 <img src={image} alt={name}/>
             </div>
             <div className="anime=info">
                 <h2>name</h2>
             </div>
               </div>
    
    );     
};
 export default Animecard;