import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';

//const AddComment = ({ asin }) => {
//  const [comment, setComment] = useState({
//    comment: '',
//    rate: 1,
//    elementId: asin,
//  });
//
//  useEffect(() => {
//    if (asin !== comment.elementId) {
//      setComment((prevComment) => ({
//        ...prevComment,
//        elementId: asin,
//      }));
//    }
//  }, [asin]);
//
//  const sendComment = async (e) => {
//    e.preventDefault();
//    try {
//      const response = await fetch(
//        'https://striveschool-api.herokuapp.com/api/comments',
//        {
//          method: 'POST',
//          body: JSON.stringify(comment),
//          headers: {
//            'Content-type': 'application/json',
//            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmQ2MjdjMjM5YzAwMTUyZjRiNTciLCJpYXQiOjE3MTk5MzM1MDQsImV4cCI6MTcyMTE0MzEwNH0.nIVMCbzuvJWlZFU79L2ZiUv18nQauOaoOQpDmUqA5C8',
//          },
//        }
//      );
//
//      if (response.ok) {
//        alert('Recensione inviata!');
//        setComment({
//          comment: '',
//          rate: 1,
//          elementId: asin,
//        });
//      } else {
//        throw new Error('Qualcosa è andato storto');
//      }
//    } catch (error) {
//      alert(error.message);
//    }
//  };
//
//  return (
//    <div className="my-3">
//      <form onSubmit={sendComment}>
//        <div className="mb-2">
//          <label>Recensione</label>
//          <input
//            type="text"
//            placeholder="Inserisci qui il testo"
//            value={comment.comment}
//            onChange={(e) =>
//              setComment((prevComment) => ({
//                ...prevComment,
//                comment: e.target.value,
//              }))
//            }
//          />
//        </div>
//        <div className="mb-2">
//          <label>Valutazione</label>
//          <select
//            value={comment.rate}
//            onChange={(e) =>
//              setComment((prevComment) => ({
//                ...prevComment,
//                rate: parseInt(e.target.value),
//              }))
//            }
//          >
//            <option>1</option>
//            <option>2</option>
//            <option>3</option>
//            <option>4</option>
//            <option>5</option>
//          </select>
//        </div>
//        <button type="submit">Invia recensione</button>
//      </form>
//    </div>
//  );
//};



//const AddComment = ({ asin }) => {
//  const [comment, setComment] = useState({
//    comment: '',
//    rate: 1,
//    elementId: asin,
//  });
//
//  useEffect(() => {
//    if (asin !== comment.elementId) {
//      setComment((prevComment) => ({
//        ...prevComment,
//        elementId: asin,
//      }));
//    }
//  }, [asin]);
//
//  const sendComment = async (e) => {
//    e.preventDefault();
//    try {
//      const response = await fetch(
//        'https://striveschool-api.herokuapp.com/api/comments',
//        {
//          method: 'POST',
//          body: JSON.stringify(comment),
//          headers: {
//            'Content-type': 'application/json',
//            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmQ2MjdjMjM5YzAwMTUyZjRiNTciLCJpYXQiOjE3MTk5MDM4MjMsImV4cCI6MTcyMTExMzQyM30.P2fh8yuXY-sZpFx6k6xJSzeTPEMQ3ZzwUZfAibNd9Ew'
//          },
//        }
//      );
//
//      if (response.ok) {
//        alert('Recensione inviata!');
//        setComment({
//          comment: '',
//          rate: 1,
//          elementId: asin,
//        });
//      } else {
//        throw new Error('Qualcosa è andato storto');
//      }
//    } catch (error) {
//      alert(error.message);
//    }
//  };
//
//  return (
//    <div className="my-3">
//      <Form onSubmit={sendComment}>
//        <Form.Group className="mb-2">
//          <Form.Label>Recensione</Form.Label>
//          <Form.Control
//            type="text"
//            placeholder="Inserisci qui il testo"
//            value={comment.comment}
//            onChange={(e) =>
//              setComment((prevComment) => ({
//                ...prevComment,
//                comment: e.target.value,
//              }))
//            }
//          />
//        </Form.Group>
//        <Form.Group className="mb-2">
//          <Form.Label>Valutazione</Form.Label>
//          <Form.Control
//              as="select"
//            value={comment.rate}
//            onChange={(e) =>
//              setComment((prevComment) => ({
//                ...prevComment,
//                rate: parseInt(e.target.value),
//              }))
//            }
//          >
//            <option>1</option>
//            <option>2</option>
//            <option>3</option>
//            <option>4</option>
//            <option>5</option>
//          </Form.Control>
//        </Form.Group>
//        <Button type="submit">Invia recensione</Button>
//      </Form>
//
//    </div>
//  );
//};


class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.asin,
    },
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      })
    }
  }

  sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(this.state.comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmQ2MjdjMjM5YzAwMTUyZjRiNTciLCJpYXQiOjE3MTk5MDM4MjMsImV4cCI6MTcyMTExMzQyM30.P2fh8yuXY-sZpFx6k6xJSzeTPEMQ3ZzwUZfAibNd9Ew',
          },
        }
      )
      if (response.ok) {
        alert('Recensione inviata!')
        this.setState({
          comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
          },
        })
      } else {
        throw new Error('Qualcosa è andato storto')
      }
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <div className="my-3">
        <Form onSubmit={this.sendComment}>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il testo"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    )
  }
}


export default AddComment;