import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('should have a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('should have text area that user can type in', () => {
  // Find element; simulate change event
  wrapped.find('textarea').simulate('change', {
    // Provide mock event object
    target: { value: 'new comment' }
  });

  // Force component to update
  wrapped.update();

  // Assert the textarea value has changed
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('should clear the text area when input is submitted', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
  wrapped.update();

  // Find form; simulate submit event
  wrapped.find('form').simulate('submit');
  wrapped.update();

  // Assert the textarea has been cleared
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
