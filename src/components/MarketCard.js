import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import _ from 'lodash'
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => {

  let style = {
    padding: grid * 2,
    margin: `0 16px 0 0`,
    background: isDragging ? 'lightgreen' : '',
  }

  _.assign(style, draggableStyle)

  return style
};

const MarketCard = ({bucketItem: {ItemTitle, Description, ItemId, Priority, MockUpLink}, index}) => {
  return (
    <Draggable key={ItemId} draggableId={ItemId} index={index}>
      {(provided2, snapshot2) => (
        <div>
            <div
                 ref={provided2.innerRef}
                 {...provided2.draggableProps}
                 {...provided2.dragHandleProps}
                 style={getItemStyle(
                   snapshot2.isDragging,
                   provided2.draggableProps.style
                 )}
                 className="ui card"
            >
              <div className="card-block">
              <h4 className="card-title" style={{fontSize: '11px'}}>{ItemTitle}</h4>
              <p className="card-text" style={{overflow: 'hidden', fontSize: '11px'}}>{Description}</p>
              <p className="card-text" style={{overflow: 'hidden', fontSize: '11px'}}>{Priority}</p>
              <p className="card-text" style={{overflow: 'hidden', fontSize: '11px'}}>{MockUpLink}</p>
              </div>
            </div>
          {provided2.placeholder}
        </div>
      )}
    </Draggable>
  )
}

MarketCard.propTypes = {
  bucketItem: React.PropTypes.shape({
    ItemTitle: React.PropTypes.string,
    Description: React.PropTypes.string,
    ItemId: React.PropTypes.number,
  }),
  index: React.PropTypes.number,
}

MarketCard.defaultProps = {
  bucketItem: {}
}

export default MarketCard
