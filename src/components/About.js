import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="about">
      <h1 className='ATitle'>BIO</h1>
      <img className='headshot' src={require('./images/Theadshot.jpg')}/>
      <p>As a child I was struggling in school. I couldn’t focus, I was very fidgety, calming down was hard and my coordination wasn’t great either. I was diagnosed with dyslexia, ADD, ADHD and a slow reader. I also battled with depression and low self-esteem. My family responded by using diet and nutrition to treat the problems and with great success. By age 13 I had a clear understanding of how food affected me mentally, physically and emotionally.

My experiences created a strong desire to reach out and help others improve their lives through diet and nutrition.

I earned a:
<br />
<ul>
<li>Bachelor of Science in Human Nutrition and Dietetics</li>
<li>Minor in Restaurant Management</li>
<li>From Colorado State University in Fort Collins.</li>
</ul>
<br />
I am certified as a:
<br />
<ul>
<li>Metabolic Typing Advisor</li>
<li>LEAP Therapist</li>
<li>Food Sensitivities Specialist</li>
<li>Neurogistics Brain Wellness Practitioner</li>
<li>Functional Nutritionist</li>
</ul>
<br />
All that to tell you I am passionate about your health and wellness. I want to enable you to achieve optimum health.

My approach is always personal. I will give you the individual attention you need to succeed.
<ul>
<li>Provide you with patient-centered care tailored to your needs.</li>
<li>Help you fit into your own life, not force you into a predesigned, cookie cutter solution.</li>
<li>Celebrate your uniqueness and honor your individuality.</li>
<li>Listen to you, work with you and provide you with a solution-oriented, results-tracking, customized nutrition plan.</li>
<li>Teach you to get control over your own health.</li>
<li>Help you create effective and long-lasting results.</li>
</ul>
Your health and wellness is a complex issue. You deserve time, attention and a knowledgeable professional to guide you through it. I am not here to create a revolving door of repetitive, non-effective quick-fix options. I am here to empower you to live your best life.
  </p>
      </div>
    );
  }
}

export default About
