import React from 'react';
import "./style.scss";
import carrier from "../../assets/videos/Careers.mp4";


const Carriers = () => {
  return (
    <>
      <section>
        <div class="ai-green-v1">
          <div class="init-ai-section1">
            <div className="abspage13">Careers</div>
            <div class="init-red-bg12 ">
              Be Part of Something Exceptional
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={carrier} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
      <div className="px-6 py-8 space-y-8">
      {/* Header Section */}
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
        <p>
          Every day, we innovate, adapt, and push boundaries to make enterprises more agile and responsive. Join us in shaping a future where businesses thrive through agility and efficiency at <a href="mailto:careers@sbainfo.in" className="font-bold">careers@sbainfo.in</a>.
        </p>
      </div>

      {/* First Section with Feature List */}
      <div className="space-y-4 text-base sm:text-lg md:text-xl">
        <div>
          <strong>Collaborative Culture:</strong> Work with smart, equally nice, and collaborative people passionate about making a difference. Our down-to-earth leadership team ensures that every voice is heard and valued.
        </div>
        <div>
          <strong>Diverse Projects:</strong> Engage in challenging and interesting solutions that push you to innovate and improve continuously. Our projects are designed to help you grow both professionally and personally.
        </div>
        <div>
          <strong>Personal Growth:</strong> Work on diverse projects that challenge you and help you grow along with the organization. Our ever-evolving nature means there are always new opportunities to explore.
        </div>
      </div>

      {/* Second Section with Similar Styling */}
      <div className="space-y-4 text-base sm:text-lg md:text-xl">
        <div>
          <strong>Mentorship:</strong> Work closely with experienced mentors who are dedicated to helping you grow. Our training programs are designed to help you learn, coach, and mentor others, ensuring a balanced work-life.
        </div>
        <div>
          <strong>Innovation:</strong> Innovate every day and have the freedom to contribute your ideas and evolve. We celebrate creativity and recognize the contributions of our team members.
        </div>
        <div>
          <strong>Work-Life Balance:</strong> Enjoy a balanced work-life that allows you to grow professionally without compromising personal life.
        </div>
      </div>
    </div>
      </section>
    </>
  )
}

export default Carriers; 
