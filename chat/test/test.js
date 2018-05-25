var Post = require('../src/Post.js')
var React = require('react')
var ReactTestUtils = require('react-dom/test-utils');
var assert = require('assert');
var enzyme = require('enzyme')
describe('<Post/> ', function() {
  describe('firstMessage', function() {
    const wrapper = enzyme.shallow(Post)
    it('should be "salut" by "léo at "16:37"', function(){
      assert.equal(wrapper.state().AllMessages[0],"<Message key='1' img='https://i.pinimg.com/736x/e1/c3/71/e1c371ed831a3c6b5699cce1b3c6cf0f--kitten.jpg' name='Léo' message='Salut' date='16:37' />" );
    });
  });
});
