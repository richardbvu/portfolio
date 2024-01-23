import aboutImg from "../images/about.jpg";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about__container'>
        <div className='about__title'>
          <h3>ABOUT ME</h3>
        </div>
        <div className='about__grid-container'>
          <div className='about__grid'>
            <div>
              <h2>I AM </h2>
              <div className='about__bar-1'></div>
              <p>A Junior Front End-Developer</p>
            </div>
            <div>
              <h2>GOAL </h2>
              <div className='about__bar-2'></div>
              <p>
                Create and maintain engaging, professional websites that offer a
                smooth, satisfying user experience
              </p>
            </div>
            <div>
              <h2>PROJECTS </h2>
              <div className='about__bar-3'></div>
              <p>
                Purposely focused on Vanilla Javascript, React, HTML and CSS to
                demonstrate my strong understanding of core fundamentals
              </p>
            </div>
          </div>
          <div className='about__img'>
            <img src={aboutImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
