
import Card from './card/card.componet';

import './card-list.style.css';


const CardList = ({monsters}) => 
           
    (<div className="card-list"> {
            monsters.map((monster)=>{
                
                return (
                    <Card monster = {monster}/>
                )}

            )
            }
            </div>);

    

export default CardList;