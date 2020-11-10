import React, { Component } from 'react';
import FollowFriendListItem from './FollowFriendListItem.js';
import './RecommendedFriends.css';

class RecommendedFriends extends Component {
  
  render() {
    return (
      <div className='container'>
        <div className='title'>
          <span>Gợi ý cho bạn</span>
          <a href="https://www.google.com">Xem tất cả</a>
        </div >
        {
          this.props.userList.map((user, index)=>{
            return(
              <FollowFriendListItem user={user} />
            )
          })
        }
      </div>
    )
  }
}

export default RecommendedFriends;