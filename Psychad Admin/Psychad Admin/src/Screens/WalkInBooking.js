import React, { useState, useEffect } from 'react';
import '../Style/Bookings.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from '../firebase'
import { uid } from 'uid';
import { set, ref, onValue, get } from 'firebase/database';
import '../Style/Modal.css';
import moment from 'moment';



function Book() {

  const customStyles = {
    control: (base) => ({
      ...base,
      width: '20px',
      height: '20px',
    }),
  };

  //cost that will set all the users 
  const [formData, setFormData] = useState({
    patientName: '',
    patientSurname: '',
    patientPhoneNumbers: '',
    patientStudentNumbers: '',
    patientTimeBookedFor: '',
    patientUserTime: '',
    patientResonForBooking: '',
    patientBookingDate: '',
    patientDateOfBirth: '',
  })

  //write to a database
  const writeToDataBase = () => {
    const uuid = uid();
    const formDataWithDate = {
      ...formData,
      patientBookingDate: formData.patientBookingDate.toISOString(),
    };

    // Fetch existing bookings from the database
    const bookingsRef = ref(db);
    get(bookingsRef).then((snapshot) => {
      const data = snapshot.val();

      if (data !== null && typeof data === 'object') {
        // Check if any existing booking matches the entered date and time
        const isBookingExist = Object.values(data).some((booking) => {
          if (
            booking.formData &&
            booking.formData.patientTimeBookedFor &&
            booking.formData.patientBookingDate
          ) {
            const existingDate = moment(booking.formData.patientBookingDate).format('YYYY-MM-DD');
            const existingTime = moment(booking.formData.patientTimeBookedFor, [
              'HH:mm',
              moment.ISO_8601,
            ]).format('HH:mm');
            const enteredDate = moment(formData.patientBookingDate).format('YYYY-MM-DD');
            const enteredTime = moment(formData.patientTimeBookedFor, ['HH:mm', moment.ISO_8601]).format('HH:mm');
            return existingDate === enteredDate && existingTime === enteredTime;
          }
          return false;
        });

        if (isBookingExist) {
          alert('Booking already exists for the selected date and time. Please choose a different time.');
        } else {
          set(ref(db, `/${uuid}`), {
            formData: formDataWithDate,
            uuid,
          });
          setFormData({
            patientName: '',
            patientSurname: '',
            patientPhoneNumbers: '',
            patientStudentNumbers: '',
            patientTimeBookedFor: '',
            patientUserTime: '',
            patientResonForBooking: '',
            patientBookingDate: '',
            patientDateOfBirth: '',
          });
          alert('Patient Booked');
        }
      } else {
        // Handle the case when there are no existing bookings
        set(ref(db, `/${uuid}`), {
          formData: formDataWithDate,
          uuid,
        });
        setFormData({
          patientName: '',
          patientSurname: '',
          patientPhoneNumbers: '',
          patientStudentNumbers: '',
          patientTimeBookedFor: '',
          patientUserTime: '',
          patientResonForBooking: '',
          patientBookingDate: '',
          patientDateOfBirth: '',
        });
        alert('Patient Booked');
      }
    });
  };


  //target the user inputs 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const [bookedTimes, setBookedTimes] = useState([]);


  useEffect(() => {
    const today = moment().format('YYYY-MM-DD');
    const bookingsRef = ref(db);

    onValue(bookingsRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Data from database:', data);
      if (data !== null && typeof data === 'object') {
        const filteredBookings = Object.entries(data)
          .map(([uuid, item]) => {
            if (item.formData && item.formData.patientTimeBookedFor && item.formData.patientBookingDate) {
              const bookingTime = moment.utc(item.formData.patientTimeBookedFor, moment.ISO_8601, true);
              const formattedTime = bookingTime.isValid()
                ? bookingTime.local().format('HH:mm A')
                : moment(item.formData.patientTimeBookedFor, 'HH:mm').format('HH:mm A');

              return {
                time: formattedTime,
                date: moment(item.formData.patientBookingDate).format('YYYY-MM-DD'),
                uuid: uuid,
              };
            }
            return null; // Return null for invalid entries
          })
          .filter((booking) => booking !== null && booking.date === today && booking.time !== null);

        setBookedTimes(filteredBookings);
      }
    });
  }, []);





  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const BookingModal = ({ isOpen, onClose, bookedTimes }) => {
    console.log('bookedTimes:', bookedTimes);
    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <h2>Reserved Sessions 🕒</h2>
          <ul>
            {bookedTimes.length > 0 ? (
              bookedTimes.map((booking, index) => (
                <li key={booking.uuid}>
                  <span className="txt">{booking.time}</span>
                  <hr />
                  <span className="txt">{booking.date}</span>
                </li>
              ))
            ) : (
              <p>No Reserved times for patients.</p>
            )}
          </ul>
          <button style={{ backgroundColor: 'red', color: 'white' }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div >
      <h1
        style={{ marginLeft: "10px", marginBottom: "5px" }}>
        Walk in Booking
      </h1>

      <div className='cover'>

        <div className='selectors'>
          <div>
            <h5 className='patients_name_lbl'>
              Patients name
            </h5>
            <input
              style={{
                padding: '5px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '400px',
              }}
              name='patientName'
              className='patients_name_input'
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>



          <div className='Selecter3'>
            <h5 >User Experince Booking</h5>
            <select
              style={{
                padding: '5px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '300px',
              }}
              value={formData.patientUserTime}
              onChange={handleChange}
              className='reason'
              name='patientUserTime'
              styles={customStyles}>
              <option value="">Select...</option>
              <option value="First Time">First Time</option>
              <option value="Second Time">Second Time</option>
              <option value="Regular">Regular</option>
            </select>
          </div>


        </div>



        <div className='selectors'>

          <div>
            <h5 className='patients_name_lbl2'>
              Patients Surname
            </h5>
            <input
              style={{
                padding: '5px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '400px',
              }}
              name='patientSurname'
              className='patients_name_input'
              value={formData.patientSurname}
              onChange={handleChange}

              required
            />
          </div>



          <div className='Date'>
            <h5 className='patients_name_lbl4'>
              Booking Date
            </h5>
            <DatePicker

              className='datepicker'
              name='patientBookingDate'
              selected={formData.patientBookingDate}
              onChange={(date) => handleChange({
                target: { name: 'patientBookingDate', value: date }
              })}
              dateFormat="dd/MM/yyyy"
              required
            />
          </div>
        </div>



        <div className='selectors'>

          <div>
            <h5 className='patients_name_lbl2'>
              Date Of Birth
            </h5>
            <input
              placeholder='DD/MM/YY'
              style={{
                padding: '5px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '400px',
              }}
              name='patientDateOfBirth'
              className='patients_name_input'
              value={formData.patientDateOfBirth}
              onChange={handleChange}
              required
            />
          </div>





          <div className='Selecter6'>

            <h5>Booking Time</h5>
            <select
              style={{
                padding: '5px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '300px',
              }}
              name='patientTimeBookedFor'
              value={formData.patientTimeBookedFor}
              onChange={handleChange}>
              <option value="">Select...</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>
        </div>


        <div>
          <h5
            className='patients_name_lbl2'
            style={{ display: 'flex' }}>
            Student Number
            <h3 style={{ color: 'red', marginLeft: '5px' }}>
              *
            </h3>
          </h5>
          <input
            style={{
              padding: '5px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '400px',
            }}
            className='patients_name_input'
            name='patientStudentNumbers'
            value={formData.patientStudentNumbers}
            onChange={handleChange}
          />
        </div>


        <div>
          <h5 className='patients_name_lbl2'
            style={{ display: 'flex' }}>
            Phone Number
            <h3
              style={{ color: 'red', marginLeft: '5px' }}>
              *
            </h3>
          </h5>
          <input
            style={{
              padding: '5px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '400px',
            }}
            className='patients_name_input'
            name='patientPhoneNumbers'
            value={formData.patientPhoneNumbers}
            onChange={handleChange}
          />
        </div>

        <h5
          className='patients_name_lbl2'>
          Reason for visit
        </h5>
        <div className='Selecter2'>
          <h5>
            Select Reson For Booking:
          </h5>
          <select
            value={formData.patientResonForBooking}
            name='patientResonForBooking'
            onChange={handleChange}
            style={{
              padding: '5px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '400px',
            }}
          >
            <option value="">Select...</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Depression">Depression</option>
            <option value="Interferes">Interferes</option>
            <option value="Relationship">Relationship</option>
            <option value="Stress">Stress</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className='Selecter7'>
          {/* ... */}
          <button
            className='b'
            onClick={openModal}>View Reserved Sessions For Today?</button>
          <BookingModal
            isOpen={isModalOpen}
            onClose={closeModal}
            bookedTimes={bookedTimes} />
        </div>

      </div>


      <button
        className='btn'
        style={{
          backgroundColor: '#FF832B',
          marginLeft: '810px',
          height: "35px",
          width: "270px",
          borderRadius: "8px",
          marginTop: '10px',
          borderColor: '#fff',
        }}
        onClick={writeToDataBase}
      >
        Book
      </button>

    </div>
  )
}

export default Book