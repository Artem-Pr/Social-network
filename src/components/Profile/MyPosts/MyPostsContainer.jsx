import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
   debugger;
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         debugger;
         dispatch(updateNewPostActionCreator(text));
       },
       addPost: () => {
          debugger;
         dispatch(addPostActionCreator());
       }
   }
}

const  MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;