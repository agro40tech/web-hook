import React from "react";
import "./feed__posts.css";

// import { useTypeSelector } from "../hooks/useTypeSelector";
// import { useActions } from "../hooks/useAction";

// const state = useTypeSelector((state) => state.mony);
// const { GetMony } = useActions();

export default function FeedPosts() {
  return (
    <div className="feed-posts">
      <h3 className="feed-posts__title">Лента</h3>
      <div className="feed-posts__posts">Волков Владимир пост</div>
    </div>
  );
}
