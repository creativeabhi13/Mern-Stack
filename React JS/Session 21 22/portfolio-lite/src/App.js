import React from 'react'
import Navbar from './Components/Navbar'
import './style.css'
import AboutMe from './Components/AboutMe'
import Section from './Components/Section'


let sectionData = [
    {
     title:"Skills",
     description:"During my internship at MilkVilla as a Frontend Developer, I honed my skills in HTML, CSS, and JavaScript for crafting responsive web interfaces. I gained proficiency in React.js for dynamic frontend development and utilized Node.js to build REST APIs, integrating seamlessly with MongoDB for efficient data management. Git and GitHub facilitated collaborative version control, while Visual Studio Code supported my development across Windows and Linux environments. Beyond technical expertise, I showcased leadership by coordinating tasks, contributing to project planning, and collaborating effectively within teams. This experience strengthened my abilities in frontend development and equipped me with valuable soft skills for professional growth."
    },
     {
        title: "Qualifications",
        description: "I hold a Bachelor of Engineering in Computer Science from Jyothy Institute of Technology, Bengaluru, Karnataka. Additionally, I completed Senior Secondary education from Mishri Sada Inter College, Mairwa, Siwan, and Secondary Schooling under CBSE from Don Bosco High School, Siwan, Bihar."
     },
     {
        title: "Projects",
        description:"Explore my portfolio showcasing a diverse array of projects in web and application development. From the sleek and user-friendly Portfolio Website to specialized solutions like the Education Single Page Design and Edutech Website, each project exemplifies my expertise in UI/UX design and responsive web development. Dive into innovative applications such as the Apartment Management System, Restaurant Website, and interactive HandCricket Game, demonstrating my versatility in creating tailored digital experiences. Whether it's empowering youth through the Youth Compass Application, streamlining processes with the Course Registration and Unit Converter Applications, or crafting robust business solutions like Dilabs Systems and Tedlabs Ecommerce, every project reflects my dedication to delivering excellence and innovation."
     }
 
 ]

const App = () => {
  
  return (
    <div>
        <Navbar />
        <AboutMe />
        {
                sectionData.map((item)=>(
                    // item = {title, description}
                    <Section 
                      title={item.title}
                      description={item.description}
                    />
                ))

            }
            
       
       
    </div>
  )
}

export default App