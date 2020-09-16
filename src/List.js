import React from 'react';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) => {
  return (
    <>
      {/* <button onClick={props.onSelect} id={props.ct}>🦀</button> */}
      <li className='list_text'>
        <IconButton
          aria-label='delete'
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <DeleteIcon className='deleteIcon' />
        </IconButton>
        {props.thing}
      </li>
    </>
  );
};

export default List;
