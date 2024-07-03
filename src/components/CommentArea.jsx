import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import React, { useState, useEffect } from 'react';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmQ2MjdjMjM5YzAwMTUyZjRiNTciLCJpYXQiOjE3MTk5MzM1MDQsImV4cCI6MTcyMTE0MzEwNH0.nIVMCbzuvJWlZFU79L2ZiUv18nQauOaoOQpDmUqA5C8',
            },
          }
        );

        if (response.ok) {
          const commentsData = await response.json();
          setComments(commentsData);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchComments();
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching comments.</p>}
      {/* Render your AddComment and CommentList components here */}
      <AddComment asin={asin}/>
      <CommentList commentsToShow={comments} />
    </div>
  );
};
export default CommentArea;

//class CommentArea extends Component {
//  state = {
//    comments: [],
//    isLoading: false,
//    isError: false,
//  }
//  
//  componentDidUpdate = async (prevProps) => {
//    if (prevProps.asin !== this.props.asin) {
//      this.setState({
//        isLoading: true,
//      })
//      try {
//        let response = await fetch(
//          'https://striveschool-api.herokuapp.com/api/comments/' +
//            this.props.asin,
//          {
//            headers: {
//              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmQ2MjdjMjM5YzAwMTUyZjRiNTciLCJpYXQiOjE3MTk5MDM4MjMsImV4cCI6MTcyMTExMzQyM30.P2fh8yuXY-sZpFx6k6xJSzeTPEMQ3ZzwUZfAibNd9Ew',
//            },
//          }
//        )
//        console.log(response)
//        if (response.ok) {
//          let comments = await response.json()
//          this.setState({
//            comments: comments,
//            isLoading: false,
//            isError: false,
//          })
//        } else {
//          this.setState({ isLoading: false, isError: true })
//        }
//      } catch (error) {
//        console.log(error)
//        this.setState({ isLoading: false, isError: true })
//      }
//    }
//  }
//
//  render() {
//    return (
//      <div className="text-center">
//        {this.state.isLoading && <Loading />}
//        {this.state.isError && <Error />}
//        <AddComment asin={this.props.asin} />
//        <CommentList commentsToShow={this.state.comments} />
//      </div>
//    )
//  }
//}


