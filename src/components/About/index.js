import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className="about-section">
        <h2>This is it :)</h2>
        <p>
          <strong>Anish K. Sinha</strong> is a UX/UI Designer & Front End
          Developer with a passion for designing beautiful and functional
          digital experiences. He's spent the last several years working with
          startups, helping them realize and communicate their unique value to
          their intended audience through both digital and traditional channels.
        </p>
        <div className="about-yellow-blob" />
        <p>
          He enjoys designing products that live at the intersection of digital
          and physical, drawing from his experience in both UX/UI design and
          front-end development to inform his unique approach to
          problem-solving. He's particularly interested in the rapid expansion
          of connected devices and how these new technologies are creating
          opportunities for us to re-think and re-design our relationship with
          the objects and services around us.
        </p>
        <div className="about-circle about-circle2" />
        <p>
          Anish lives and works in India, where he continues to grow and expand
          his knowledge of interaction design and technology, while also
          striving to deepen his understanding of the human experience through
          careful observation and documentation of life around him.
        </p>

        <h4>Favorite Quote:</h4>
        <div className="about-circle about-circle1" />
        <blockquote>
          <em>
            "Design is thinking made visible, but it's also about finding
            creative ways to make a positive impact on the world. Every project
            is an opportunity to create something meaningful that can improve
            people's lives in some way."
          </em>
        </blockquote>

        <p>
          Whether he's tackling a brand identity for an early stage startup,
          refreshing existing brand assets, or creating digital experiences
          through innovative use of emerging technology, Anish brings precision,
          passion, and strategic thinking to every project.
        </p>
      </div>
    )
  }
}

export default About
