import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import "./ContectForm.css";

const ContectForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[a-zA-Z\s-]+$/,
        "Only alphabets, spaces, and hyphens are allowed"
      )
      .max(50, "Name must be at most 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string()
      .matches(
        /^[a-zA-Z\s-]+$/,
        "Only alphabets, spaces, and hyphens are allowed"
      )
      .max(100, "Subject must be at most 100 characters")
      .required("Subject is required"),
    specialRequest: Yup.string().max(
      250,
      "Special request must be at most 250 characters"
    ),
  });

  // Submit Handler
  const onSubmit = (values, { resetForm }) => {
    console.log("Submitted Values:", values);
    setIsModalOpen(true);
    resetForm();
  };

  return (
    <div>
      {/* Contact Information Section */}
      <div className="contact-info-section">
        <h1 className="menu-title">Contact Us</h1>
        <h2>Contact For Any Query</h2>
        <div className="contact-info-container">
          <div className="contact-info-item">
            <h4>Booking</h4>
            <div>
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>{" "}
              book@example.com
            </div>
          </div>
          <div className="contact-info-item">
            <h4>General</h4>
            <div>
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>{" "}
              info@example.com
            </div>
          </div>
          <div className="contact-info-item">
            <h4>Technical</h4>
            <div>
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>{" "}
              tech@example.com
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Container */}
      <div className="custom-reservation-container">
        {/* Map Section */}
        <div className="custom-reservation-image">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.00926837188!2d-74.14448509792545!3d40.69737092434438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1734602002620!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="custom-reservation-form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              specialRequest: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="custom-form-row">
                  <div className="custom-form-group">
                    <Field type="text" name="name" placeholder="Your Name" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="custom-error"
                    />
                  </div>
                  <div className="custom-form-group">
                    <Field type="email" name="email" placeholder="Your Email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="custom-error"
                    />
                  </div>
                </div>
                <div className="custom-form-row">
                  <div className="custom-form-group">
                    <Field type="text" name="subject" placeholder="Subject" />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="custom-error"
                    />
                  </div>
                </div>
                <div className="custom-form-group">
                  <Field
                    as="textarea"
                    name="specialRequest"
                    placeholder="Special Request"
                  />
                  <ErrorMessage
                    name="specialRequest"
                    component="div"
                    className="custom-error"
                  />
                </div>
                <button
                  type="submit"
                  className="custom-book-now-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "SEND MESSAGE"}
                </button>
              </Form>
            )}
          </Formik>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            className="custom-modal"
            overlayClassName="modal-overlay"
          >
            <div className="modal-content">
              <h2>Thanks for Contacting Us</h2>
              <p>We will contact you as soon as possible.</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="close-modal-btn"
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ContectForm;
