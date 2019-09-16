import React from 'react';
import './card-list.styles.css';
import { Card} from '../card/card.component'

// Export out the functional card component responsible for rendering the cards
export const CardList = props => (
    <div className="card-list">
          {props.monsters.map(monster => (
            <Card key={monster.id} monster = {monster}/>
          ))}
    </div>
)