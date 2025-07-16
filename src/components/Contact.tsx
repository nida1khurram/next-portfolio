import React from "react";

const Contact = () => {
  return (
    <div className="pt-[10rem] pb-[3rem] bg-gray-900" id="contact">
       <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                    Contact Us
                </h2>
                <div className="w-40 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mt-2 mb-10"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading__mini">Get In Touch</p>
          <h1 className="heading__primary">
            Lets <span className="text-cyan-400">Make</span> Your{" "}
            <span className="text-cyan-400">Brand</span> Brilliant
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            &quot;I&apos;m a  frontend web developer,
            with a passion for creating stunning visuals and seamless web experiences.
            Explore my work to see how I blend creativity and functionality. Let’s connect
            and bring your project to life!&quot;
          </p>

          
        </div>
        <form action="https://formspree.io/f/xzzbvela" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              required
              aria-label="Your name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              required
              aria-label="Your email address"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            required
            aria-label="Message subject"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            required
            aria-label="Your message"
          ></textarea>
          <button
            type="submit"
            className="py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-600 rounded-md px-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
