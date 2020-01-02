import React, { Component } from 'react';
import {Config} from '../config';
import fetch from 'isomorphic-unfetch';

export default class PostIndex extends Component {
  static async getInitialProps() { // next-js only - would be get initial props
    const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
    const posts = await postsRes.json();
    return {
      posts
    }
  }
  render() {
    const {posts} = this.props;
    return (
      <div>
        <h1>Post Index</h1>
        <ul>
          {posts.map(post => <li>{post.title.rendered}</li> )}
        </ul>
      </div>
    )
  }
};
