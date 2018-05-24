import React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

export default () => {
  return (
    <div>
      <h2>App Component</h2>
      <CommentBox />
      <CommentList />
    </div>
  );
};
