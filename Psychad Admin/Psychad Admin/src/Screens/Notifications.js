import { React, useState } from 'react';
import "../Style/Notifications.css";
import { dataref } from '../firebase';


function Notifications() {

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = () => {
    dataref.ref('Notification').push({
      subject: subject,
      message: message,
    }).catch(alert);

    setSubject('');
    setMessage('');
  };

  return (
    <div>
      <h1 className='createNotifications'>
        Create Notifications
      </h1>

      <div className='cover2'>
        <div>
          <input placeholder='Subject'
            className='inputA'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>

        <div>
          <textarea
            rows="15"
            cols="55"
            className='textarea'
            placeholder=" Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          >
          </textarea>
        </div>

        <div style={{ display: "flex" }}>
        </div>

        <button
          className='btnUpload'
          style={{
            backgroundColor: '#FF832B',
            marginLeft: '135px',
            height: "35px",
            width: "180px",
            borderRadius: "8px",
            marginTop: '10px',
            borderColor: '#fff',
            color: "#ffff"
          }}
          onClick={handleAdd}
        >
          upload
        </button>
      </div>
    </div>
  )
}

export default Notifications