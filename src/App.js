import React, { useState, Fragment } from "react";
import RecommendedFriends from "./components/RecommendedFriends";
import PropTypes from "prop-types";

import './App.css';

export default function App() {
  const [userList, setUserList] = useState([
    {
      name: "Trần Đốt",
      commonFriend: 10,
      avatarUrl: "https://loremflickr.com/36/36/face",
    },
    {
      name: "Tống Phong",
      commonFriend: 20,
      avatarUrl: "https://loremflickr.com/36/36/face",
    },
    {
      name: "Ngọa Long",
      commonFriend: 30,
      avatarUrl: "https://loremflickr.com/36/36/face",
    },
  ]);

  return (
    <Fragment>
      <RecommendedFriends userList={userList} />
    </Fragment>
  );
}

App.propTypes = {
  name: PropTypes.string,
  commonFriend: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string,
};