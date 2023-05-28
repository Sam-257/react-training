import React, { useEffect, useState } from "react";
import axios from "axios";

type IComments = {
  body: string,
  email: string,
  id: number,
  name: string,
  postId: number,
};

const url = "http://localhost:8080";

const Comments = () => {
  const [commentsData, setCommentsData] = useState<IComments[]>([]);
  const [viewAddForm, setViewAddForm] = useState<boolean>(false);
  const [viewEditForm, setViewEditForm] = useState<boolean>(false);
  const [editFormInputs, setEditFormInputs] = useState<IComments>({
    postId: 0,
    id: 0,
    name: '',
    email: '',
    body: ''
  });



  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    axios
    .get(`${url}/comments`)
    .then((res) => {
      setCommentsData(res.data);
    })
    .catch((err) => console.log(`Axios get call error: ${err}`));
  }

  const handleEdit = (index: number, comment: IComments) => {
    setViewEditForm(true);
    setEditFormInputs(comment);
  };

  const editInputFields = (e: any) => {
    setEditFormInputs({...editFormInputs, [e.target.id]: e.target.value })
  };

  const editComments = (e: any) => {
    axios.put(`${url}/comments/${editFormInputs.id}`, editFormInputs)
    .then(() => {
      getComments();
      setViewEditForm(false);
    })
    .catch((err) => console.error(err));
  }

  const handleDelete = (id: number) => {
    if(!window.confirm('Are you sure you want to delete?')) return;
    axios.delete(`${url}/comments/${id}`)
    .then(() => {
      getComments();
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Comments</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {commentsData?.map((comment,index) => 
            <tr key={index}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
              <td><button onClick={() => handleEdit(index, comment)} >Edit</button></td>
              <td><button onClick={() => handleDelete(comment.id)} >Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
      <br /> <br /> <br /> <br />
      <input type="checkbox" checked={viewAddForm} onChange={() => setViewAddForm(!viewAddForm)} /> Add Comments
      {
        viewAddForm ? 
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" placeholder="Edit Name" value={editFormInputs?.name} onChange={editInputFields} />
            <br /><br />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Edit Email" value={editFormInputs?.email} onChange={editInputFields} />
            <br /><br />
            <label htmlFor="Body">Body: </label>
            <textarea rows={17} cols={30} id="body" placeholder="Edit Body" value={editFormInputs?.body} onChange={editInputFields} />
            <br /><br />
            <button onClick={editComments}> Add </button>
          </div>
        : null
      }
      {
        viewEditForm ? 
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" placeholder="Edit Name" value={editFormInputs?.name} onChange={editInputFields} />
            <br /><br />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Edit Email" value={editFormInputs?.email} onChange={editInputFields} />
            <br /><br />
            <label htmlFor="Body">Body: </label>
            <textarea rows={17} cols={30} id="body" placeholder="Edit Body" value={editFormInputs?.body} onChange={editInputFields} />
            <br /><br />
            <button onClick={editComments}> Edit </button>
          </div>
        : null
      }
    </div>
  );
};

export default Comments;
