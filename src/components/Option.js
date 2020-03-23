import React from 'react';
import { MdClose } from 'react-icons/md';

const Option = (props) => (
    <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
      <button className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        <MdClose size={32}/>
      </button>
    </div>
  );

export default Option;
