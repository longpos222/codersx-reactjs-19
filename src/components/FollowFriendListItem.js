import React, { Component } from "react";

import "./FollowFriendListItem.css";

class FollowFriendListItem extends Component {
  render() {
    return (
      <div className="friend-details">
        <div className="avatar">
          <img src={this.props.user.avatarUrl} alt="" />
        </div>
        <div className="friend-body">
          <p className="name">{this.props.user.name}</p>
          <p className="common-friend">
            {this.props.user.commonFriend} bạn chung
          </p>
        </div>
        <a className="follow" href="https://www.google.com">
          Theo dõi
        </a>
      </div>
    );
  }
}

export default FollowFriendListItem;
