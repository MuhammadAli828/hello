import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s-]+$/, "Only alphabets, spaces, and hyphens are allowed")
      .max(50, "Name must be at most 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    date: Yup.string()
      .matches(
        /^\d{2}\/\d{2}\/\d{4}$/,
        "Date format should be DD/MM/YYYY (e.g., 25/12/2024)"
      )
      .required("Date is required"),
    time: Yup.string()
      .matches(
        /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/,
        "Time format should be HH:MM in 24-hour format (e.g., 14:30)"
      )
      .required("Time is required"),
    specialRequest: Yup.string()
      .matches(/^[a-zA-Z\s-]*$/, "Only alphabets, spaces, and hyphens are allowed")
      .max(250, "Special request must be at most 250 characters"),
  });

  // Submit Handler
  const onSubmit = (values, { resetForm }) => {
    console.log("Submitted Values:", values); // Debugging purposes
    setIsModalOpen(true); // Open the modal
    resetForm(); // Clear the form
  };

  return (
    <div className="reservation-container">
      {/* Reservation Image */}
      <div className="reservation-image">
        <img
          src="/video (1).jpg"
          alt="Table Reservation"
        />
        <div className="play-button">
          <span>▶</span>
        </div>
      </div>

      {/* Reservation Form */}
      <div className="reservation-form">
        <h3 className="reservation-title">Reservation</h3>
        <h1 className="reservation-header">Book A Table Online</h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            date: "",
            time: "",
            specialRequest: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Name & Email */}
              <div className="form-row">
                <div className="form-group">
                  <Field type="text" name="name" placeholder="Your Name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="form-group">
                  <Field type="email" name="email" placeholder="Your Email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
              </div>

              {/* Date & Time */}
              <div className="form-row">
                <div className="form-group">
                  <Field type="text" name="date" placeholder="Date (DD/MM/YYYY)" />
                  <ErrorMessage name="date" component="div" className="error" />
                </div>
                <div className="form-group">
                  <Field type="text" name="time" placeholder="Time (HH:MM)" />
                  <ErrorMessage name="time" component="div" className="error" />
                </div>
              </div>

              {/* Special Request */}
              <div className="form-group">
                <Field as="textarea" name="specialRequest" placeholder="Special Request" />
                <ErrorMessage name="specialRequest" component="div" className="error" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="book-now-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "BOOK NOW"}
              </button>
            </Form>
          )}
        </Formik>

        {/* Modal for Booking Confirmation */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="custom-modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content">
            <h2>🎉 Booking Confirmed!</h2>
            <p>Your table reservation has been successfully booked.</p>
            <button onClick={() => setIsModalOpen(false)} className="close-modal-btn">
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ReservationForm;
