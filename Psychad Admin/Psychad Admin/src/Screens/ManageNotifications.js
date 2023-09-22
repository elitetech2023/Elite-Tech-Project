import { React, useState, useEffect } from "react";
import data from '../people.json';
import '../Style/ManageNotifications.css';
import { FaTimesCircle } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default function ManageNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the Firebase Realtime Database
    const fetchNotifications = async () => {
      try {
        const snapshot = await firebase.database().ref("Notification").once("value");
        const data = snapshot.val();
        if (data) {
          // Convert the object to an array
          const notificationArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
          setNotifications(notificationArray);
        }
      } catch (error) {
        console.log("Error fetching notifications: ", error);
      }
    };

    fetchNotifications();
  }, []);

  const handleDeleteNotification = async (notificationId) => {
    try {
      // Remove the notification from the Firebase Realtime Database
      await firebase.database().ref("Notification").child(notificationId).remove();

      // Update the notifications state by filtering out the deleted notification
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== notificationId)
      );

      alert("Notification deleted successfully!");
    } catch (error) {
      alert("Error deleting notification: ", error);
    }
  };

  return (
    <div className="parent">
      <div className="block">
        <h1 className="manage_notif">Manage Notifications</h1>
        {notifications.map((notification) => (
          <div className="notification-block" key={notification.id}>
            <div className="content3">
              <h4 className="topic">{notification.subject}</h4>
              <p className="Data">{notification.message}</p>
            </div>
            <FaTimesCircle
              size={30}
              className="remove"
              onClick={() => handleDeleteNotification(notification.id)}
            />
          </div>
        ))}
      </div>
      <div className="floating-button">
        <nav>
          <Link to="/notifications">
            <FontAwesomeIcon icon={faPlus} className="plus" size={50} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
