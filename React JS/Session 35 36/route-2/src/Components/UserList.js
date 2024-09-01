import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const userData =  [
    {
      id:1,
      userName: "amit",
      name: "Amit Sharma",
      age: 29,
      gender: "Male",
      city: "Mumbai",
      profession: "Software Engineer",
      bio: "Amit is a software engineer with over 5 years of experience in full-stack development. He loves exploring new technologies and contributing to open-source projects in his free time. He enjoys playing cricket on weekends and is a food enthusiast."
    },
    {
        id: 2,
      userName: "priya",
      name: "Priya Verma",
      age: 25,
      gender: "Female",
      city: "Delhi",
      profession: "Graphic Designer",
      bio: "Priya is a creative graphic designer with a passion for visual storytelling. She specializes in brand identity and social media design. Priya enjoys painting and experimenting with different art styles, constantly seeking inspiration from nature and urban life."
    },
    {
        id: 3,
        userName: "rohit",
      name: "Rohit Singh",
      age: 32,
      gender: "Male",
      city: "Bangalore",
      profession: "Marketing Manager",
      bio: "Rohit is a seasoned marketing manager who excels in digital marketing strategies. With a keen understanding of consumer behavior, he has led multiple successful campaigns. Outside work, Rohit enjoys reading books on personal development and networking with industry peers."
    },
    {
        id: 4,
        userName: "ankita",
      name: "Ankita Mehta",
      age: 27,
      gender: "Female",
      city: "Pune",
      profession: "Data Analyst",
      bio: "Ankita is a detail-oriented data analyst with a strong foundation in statistical analysis and data visualization. She is passionate about turning complex data into actionable insights. In her leisure time, Ankita likes hiking and exploring new trekking trails."
    },
    {
        id: 5,
        userName: "vikram",
      name: "Vikram Gupta",
      age: 35,
      gender: "Male",
      city: "Chennai",
      profession: "Business Consultant",
      bio: "Vikram is a business consultant with expertise in strategic planning and organizational development. He has a talent for identifying growth opportunities for businesses. Vikram is also an avid traveler and enjoys visiting historic places across the country."
    },
    {
        id: 6,
        userName: "ritika",
      name: "Ritika Kapoor",
      age: 24,
      gender: "Female",
      city: "Hyderabad",
      profession: "Content Writer",
      bio: "Ritika is a content writer with a flair for crafting engaging stories and articles. Her writing is known for being relatable and insightful. When she's not writing, Ritika spends her time attending poetry sessions and exploring indie music scenes."
    },
    {
        id: 7,
        userName: "suresh",
      name: "Suresh Reddy",
      age: 38,
      gender: "Male",
      city: "Kolkata",
      profession: "Financial Advisor",
      bio: "Suresh is a financial advisor with over 10 years of experience in wealth management. He has helped numerous clients secure their financial futures through prudent planning. Suresh is also a fitness enthusiast and practices yoga regularly."
    },
    {
        id: 8,
        userName: "pooja",
      name: "Pooja Jain",
      age: 30,
      gender: "Female",
      city: "Ahmedabad",
      profession: "HR Manager",
      bio: "Pooja is an HR manager who specializes in talent acquisition and employee engagement. She believes in creating a positive work environment and fostering team spirit. Outside work, Pooja enjoys cooking traditional dishes and hosting dinner parties for friends and family."
    },
    {
        id: 9,
        userName: "neeraj",
      name: "Neeraj Kumar",
      age: 28,
      gender: "Male",
      city: "Lucknow",
      profession: "Mechanical Engineer",
      bio: "Neeraj is a mechanical engineer with a passion for solving complex problems in the manufacturing industry. He is known for his innovative approach and attention to detail. Neeraj is also an amateur photographer and loves capturing candid moments during his travels."
    },
    {
        id: 10,
        userName: "swati",
      name: "Swati Roy",
      age: 26,
      gender: "Female",
      city: "Jaipur",
      profession: "Fashion Designer",
      bio: "Swati is a fashion designer with a keen eye for detail and a love for vibrant colors. Her designs often incorporate traditional elements with a modern twist. Swati enjoys participating in fashion shows and is always eager to learn new design techniques."
    }
  ];

const UserList = () => {

    console.log(useParams())

    const [foundUser, setFoundUser] = useState({});

    let {x} = useParams();

    useEffect(() => {
        setFoundUser(userData.find(user => user.userName === x))
    },[x]);

    return(
        <div>
            <h1> Your Profile - {x}</h1>
            <h2>Name: {foundUser.name}</h2>
            <h3>Age: {foundUser.age}</h3>
            <h4>Gender: {foundUser.gender}</h4>
            <h5>City: {foundUser.city}</h5>
            <h6>Profession: {foundUser.profession}</h6>
            <p>Bio: {foundUser.bio}</p>

        </div>
    )
}

export default UserList;