import { Movie } from '../Movie/Movie'; 
import './Movies.css';

export function Movies({movie, wdth}){ 
    let wth ='30%';
    if(wdth==='74rem'){
        wth='21%'
    }
    return(
      
        <div className='Movies' style={{width: wdth}}>
            
            { movie !== undefined && !!movie.length && movie.map((item) => {
          return (
            
          <Movie props={item} wth={wth} key={item.imdbID}/>
          
          )
        })}
        </div>
    );
}