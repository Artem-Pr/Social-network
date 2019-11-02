import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   debugger;
   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
   let newPostElement = React.createRef();

   let onAddPost = () => {
      debugger;
      props.addPost();
      debugger;
   };

   let onPostChange = () => {
      debugger;
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
      debugger;
   };

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea   placeholder="Write a message..."
                           ref={newPostElement}
                           onChange={onPostChange}
                           value={props.newPostText} />
            </div>
            <div>
               <button onClick={ onAddPost }>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            { postsElements }
         </div>
      </div>
   )
}

export default MyPosts;