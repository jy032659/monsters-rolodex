import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component'

export const CardList=function(props){

return <div className='card-list'>

{ props.monsters.map((monster,index)=><Card key={monster.id} monster={monster}/>) 
}

</div>
}