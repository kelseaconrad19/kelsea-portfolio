import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_8xqrvxk",
				"template_2c6ei28",
				form.current,
				"crxEuArIABskaFrnn"
			)
			.then(
				(result) => {
					console.log(result);
					toast.success("Message Sent Successfully!", {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					document.getElementById("myForm").reset();
				},
				(error) => {
					toast.error("Oops, Message Not Sent!", {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			);
	};

	return (
		<div className="contact-layout">
			<div>
				<p className="contactText">
					Feel free to get in touch with me. I am always open to discussing new
					projects, creative ideas or opportunities to be part of your visions.
				</p>
				<form
					id="myForm"
					className="contactform"
					ref={form}
					onSubmit={sendEmail}
				>
					<div className="row contact7_form_block w-form">
						<div className="contact7_form">
							<div className="form-field-wrapper">
								<label htmlFor="name" className="field-label text-color-white">
									Name
								</label>
								<div className="col-12 col-md-12">
									<div className="form-group">
										<input
											type="text"
											name="name"
											required
											className="form-input w-input"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* End .col */}

						<div className="contact7_form">
							<div className="form-field-wrapper">
								<label htmlFor="email" className="field-label text-color-white">
									Email
								</label>
								<div className="col-12 col-md-12">
									<div className="form-group">
										<input
											type="text"
											name="email"
											required
											className="form-input w-input"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* End .col */}

						<div className="contact7_form">
							<div className="form-field-wrapper">
								<label
									htmlFor="message"
									className="field-label text-color-white"
								>
									Message
								</label>
								<div className="col-12 col-md-12">
									<div className="form-group">
										<textarea
											name="message"
											placeholder="Type your message..."
											required
											className="form-input is-text-area w-input"
										></textarea>
									</div>
								</div>
							</div>
						</div>
						{/* End .col */}

						<div className="col-12">
							<button type="submit" className="button contact-btn">
								<span className="button-text">Send Message</span>
								{/* <span className="button-icon fa fa-send button-icon-white"></span> */}
							</button>
						</div>
					</div>
					{/* End .col */}
				</form>
			</div>
			<Image
				src="/assets/img/hi-image2.png"
				alt="hi"
				className="contact-img"
				width={400}
				height={400}
			/>
		</div>
	);
};

export default Contact;
