import React from 'react';

const Article = (props) => {
  return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.contents}</h1>
            <h1>{props.isPublished}</h1>
            <label htmlFor="check">公開する？</label>
            <input id="check" type="checkbox" checked={props.isPublished} onClick={() => props.toggle()} />
        </div>
  );
};

export default Article;
