
function Contact() {
  return (
    <>
      <div class='contact'>
        <p><i class="fa-solid fa-phone"></i>+6012 8791993</p>
        <p><i class="fa-solid fa-at"></i>dicksongoh.biz@gmail.com</p>
        <p><i class="fa-brands fa-linkedin"></i>www.linkedin.com/in/dgex</p>
      </div>
    </>
  )
}

function Experience() {

  return (
    <>
      <h3>Network Security Intern</h3>
      <h4>Fortesys Sdn Bhd</h4>
      <h5>Jan 2024 - Apr 2024</h5>
      <ul>
        <li>
          Collaborated with cross-functional teams to IT solutions.
        </li>
        <li>
          Hands-on experience in server installations and migrations.
        </li>
        <li>
          Involved in configuration and management of networking and security devices for various projects.
        </li>
      </ul>

    </>
  )
}

function Education() {

  return (
    <>
      <div>
        <h3>Full Stack Software Development</h3>
        <h4>Sigma School</h4>
        <h5>Nov 2024 - Present</h5>
      </div>
      <div><h3>BSc (Hons) Information Technology (Computer Networking and Security)</h3>
        <h4>Sunway University</h4>
        <h5>Jan 2021 - Apr 2024</h5>
        <ul>
          <li>
            Graduated with First Class Honours
          </li>
        </ul>
      </div>
      <div>
        <h3>Monash Univeristy Foundation Year (MUFY)</h3>
        <h4>Sunway College</h4>
        <h5>Jan 2020 - Dec 2020</h5>
      </div>



    </>
  )
}



function App() {

  return (
    <>
      <div id="container">
        <h1>Dickson Goh Eng Xuen</h1>
        <h2>Full Stack Developer</h2>
        <Contact />
        <br />
        <h2 class="subtitle">Experience</h2>
        <hr />
        <Experience />
        <br />
        <h2 class='subtitle'>Education</h2>
        <hr />
        <Education />
      </div>



    </>
  )
}

export default App
