import React, { useState, useEffect } from "react";
import "../Style/Tabs.css";
import { FaSearch } from "react-icons/fa";
import { db } from '../firebase'
import { ref, onValue } from 'firebase/database';
import { isToday, parseISO, isAfter,  format} from 'date-fns';
import { AiOutlineFilePdf } from 'react-icons/ai';
import Uj from '../images/uj.png'
import { Document, Page, Text, View, PDFDownloadLink, Image } from '@react-pdf/renderer';

function Tabs() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (Dashboard) => {
    setToggleState(Dashboard);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [formDatas, setFormDatas] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const formDataArray = Object.values(data)
          .map((item) => item.formData)
          .filter((formData) => formData && formData.patientName);
        setFormDatas(formDataArray);
      }
    });
  }, []);


  const [searchQuer, setSearchQuer] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //display all bokkings
  const filteredFormDatas = formDatas.filter((formData) => {
    const fullName = `${formData.patientName} ${formData.patientSurname}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const today = new Date();
  const currentDate = today.toISOString().slice(0, 10);

  //current bookings
  const filteredDataForToday = filteredFormDatas.filter((formData) => {
    const bookingDate = parseISO(formData.patientBookingDate);
    return isToday(bookingDate);
  });
  //upcoming bookings
  const filteredDataForUpcoming = filteredFormDatas.filter((formData) => {
    const bookingDate = parseISO(formData.patientBookingDate);
    return isAfter(bookingDate, today);
  });
  //previous bookings
  const filteredDataForPreviousBookings = filteredFormDatas.filter((formData) => {
    const bookingDate = new Date(formData.patientBookingDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time of 'today' to the beginning of the day
    return bookingDate < today;
  });
  

  //PDF document
  const PDFDocument = ({ formData }) => (
    <Document>
      <Page>
        <View style={styles.container}>
          <Image style={styles.logo} src={Uj} />

          <Text style={styles.title}>Pychad Patient Information</Text>
          <View style={styles.fieldRow}>
            <View>
              <Text style={styles.label}>Name:</Text>
            </View>
            <View style={styles.value}>
              <Text>{formData.patientName}</Text>
            </View>
          </View>


          <View style={styles.fieldRow}>
            <View>
              <Text style={styles.label}>Surname:</Text>
            </View>
            <View style={styles.value}>
              <Text>{formData.patientSurname}</Text>
            </View>
          </View>

          <View style={styles.fieldRow}>
            <View>
              <Text style={styles.label}>Date Of Birth:</Text>
            </View>
            <View style={styles.value}>
              <Text>{format(new Date(formData.patientBookingDate), 'MM/dd/yyyy')}</Text>
            </View>
          </View>

          <View style={styles.fieldRow}>
            <View>
              <Text style={styles.label}>Phone Numbers</Text>
            </View>
            <View style={styles.value}>
              <Text>{formData.patientPhoneNumbers}</Text>
            </View>
          </View>

          <View style={styles.fieldRow}>
            <View>
              <Text style={styles.label}>Time Booked for:</Text>
            </View>
            <View style={styles.value}>
              <Text>{formData.patientTimeBookedFor}</Text>
            </View>
          </View>

          <View style={styles.fieldRow}>
            <View>
              <Text style={styles.label}>Booking Date:</Text>
            </View>
            <View style={styles.value}>
              <Text>{new Date(formData.patientBookingDate).toLocaleDateString()}</Text>
            </View>
          </View>

          <View style={styles.fieldRow}>
            <View>
              <Text style={styles.label}>Student Number:</Text>
            </View>
            <View style={styles.value}>
              <Text>{formData.patientStudentNumbers}</Text>
            </View>
          </View>

          <View style={styles.fieldRow}>
            <View>
              <Text style={styles.label}>User Experience:</Text>
            </View>
            <View style={styles.value}>
              <Text>{formData.patientUserTime}</Text>
            </View>
          </View>

          <View style={styles.fieldRow}>
            <View>
              <Text style={styles.label}>Reson For Booking:</Text>
            </View>
            <View style={styles.value}>
              <Text>{formData.patientResonForBooking}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  const styles = {
    container: {
      padding: 100,
    },
    title: {
      fontSize: 24,
      marginBottom: 70,
      textAlign: 'center',
    },

    fieldRow: {
      flexDirection: 'row',
      marginBottom: 17,
      marginLeft: 50,

    },
    label: {
      fontWeight: 'bold',
      marginRight: 10,
      width: 150,
    },
    value: {
      flex: 1,
    },

    logo: {
      width: 100,
      height: 100,
      marginBottom: 20,
      alignSelf: 'center',
    },
  };




  return (
    <div className="">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <FaSearch size={25} style={{ marginTop: "10px" }} />

      </div>

      <h1
        style={{ marginLeft: "80px" }}
      >
        Bookings
      </h1>

      {/**Tabs Buttons */}
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          style={{ fontWeight: "bold" }}
        >
          All Bookings
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
          style={{ fontWeight: "bold" }}
        >
          Running Bookings
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
          style={{ fontWeight: "bold" }}
        >
          Upcoming Bookings
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
          style={{ fontWeight: "bold" }}
        >
          Previous Bookings
        </button>
      </div>


      <div className="content-tabs">

        {/* Button 1  */}

        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >

          {/**Tabs Search */}
          <div >

            {searchQuer === '' ? (
              <ul >
                <li>
                  <ul>
                    {filteredFormDatas.map((formData, index) => (
                      <li className="flat-list" key={index}>
                        <PDFDownloadLink
                          document={<PDFDocument formData={formData} />}
                          fileName="Patient Information.pdf">
                          <AiOutlineFilePdf size={32} color="red" style={{ marginRight: '70px' }} />
                        </PDFDownloadLink>
                        {formData.patientName} &nbsp;
                        {formData.patientSurname} &nbsp;
                        <strong>Date of Birth:</strong> {formData.patientDateOfBirth} &nbsp;
                        <strong>Reason for Booking:</strong> {formData.patientResonForBooking} &nbsp;
                        <strong style={{color: 'red'}}> {formData.bookingStatus} &nbsp;</strong>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ) : (
              <ul >
                {searchResults.map((item) => (
                  <li className="flat-list" key={item.id}>{item.name}</li>
                ))}
              </ul>
            )}

          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {/**Tabs Search */}

          {searchQuer === '' ? (
            <ul>
              {filteredDataForToday.map((formData, index) => (
                <li className="flat-list" key={index}>
                  <PDFDownloadLink
                    document={<PDFDocument formData={formData} />}
                    fileName="Patient Information.pdf">
                    <AiOutlineFilePdf size={32} color="red" style={{ marginRight: '70px' }} />
                  </PDFDownloadLink>
                  {formData.patientName} &nbsp;
                  {formData.patientSurname} &nbsp;
                  <strong>Date of Birth:</strong> {formData.patientDateOfBirth} &nbsp;
                  <strong>Reason for Booking:</strong> {formData.patientResonForBooking} &nbsp;
                  <strong style={{color: 'red'}}> {formData.bookingStatus} &nbsp;</strong>
                </li>
              ))}
            </ul>
          ) : (
            <ul >
              {searchResults.map((item) => (
                <li className="flat-list" key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}

        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >

          {/**Tabs Search */}

          {searchQuer === '' ? (
            <ul>
              {filteredDataForUpcoming.map((formData, index) => (
                <li className="flat-list" key={index}>
                  <PDFDownloadLink
                    document={<PDFDocument formData={formData} />}
                    fileName="Patient Information.pdf">
                    <AiOutlineFilePdf size={32} color="red" style={{ marginRight: '70px' }} />
                  </PDFDownloadLink>
                  {formData.patientName} &nbsp;
                  {formData.patientSurname} &nbsp;
                  <strong>Date of Birth:</strong> {formData.patientDateOfBirth} &nbsp;
                  <strong>Reason for Booking:</strong> {formData.patientResonForBooking} &nbsp;
                  <strong style={{color: 'red'}}> {formData.bookingStatus} &nbsp;</strong>
                </li>
              ))}
            </ul>
          ) : (
            <ul >
              {searchResults.map((item) => (
                <li className="flat-list" key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >

          {/**Tabs Search */}

          {searchQuer === '' ? (
            <ul>
              {filteredDataForPreviousBookings.map((formData, index) => (
                <li className="flat-list" key={index}>
                  <PDFDownloadLink
                    document={<PDFDocument formData={formData} />}
                    fileName="Patient Information.pdf">
                    <AiOutlineFilePdf size={32} color="red" style={{ marginRight: '70px' }} />
                  </PDFDownloadLink>
                  {formData.patientName} &nbsp;
                  {formData.patientSurname} &nbsp;
                  <strong>Date of Birth:</strong> {formData.patientDateOfBirth} &nbsp;
                  <strong>Reason for Booking:</strong> {formData.patientResonForBooking} &nbsp;
                  <strong style={{color: 'red'}}> {formData.bookingStatus} &nbsp;</strong>
                </li>
              ))}
            </ul>

          ) : (
            <ul >
              {searchResults.map((item) => (
                <li className="flat-list" key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabs;