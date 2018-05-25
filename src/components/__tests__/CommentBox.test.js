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

describe('Comment box', () => {
  it('should have a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
  });
});

describe('Text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  });

  it('should have allow user input', () => {
    // Assert the textarea value has changed
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('should clear when the user submits the form', () => {
    // Find form; simulate submit event
    wrapped.find('form').simulate('submit');
    wrapped.update();

    // Assert the textarea has been cleared
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
