import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const content = [
    {
        id: 1,
        title: "Crypto Exchange",
        description: "Course project for COV882",
        github: "https://github.com/jaskaransinghbhalla/cov882",
        isdeployed: true,
        deployment: "https://cov882.jaskaransinghbhalla.in",
        img: "projects/cov882.png"
    },
    {
        id: 2,
        title: "Foreign Internship Portal",
        description: "International Programmes IIT Delhi",
        github: "https://github.com/jaskaransinghbhalla/international-programes",
        isdeployed: false,
        deployment: "",
        img: "projects/ip.jpg"
    },
    
    {
        id: 3,
        title: "Portfolio Website",
        description: "Intern assignment",
        github: "https://github.com/jaskaransinghbhalla/portfolio-crowwd.io",
        isdeployed: false,
        deployment: "",
        img: "projects/crowwd.png"
    },
    {
        id: 4,
        title: "VGA Display, Convulations",
        description: "COL215 Assignment",
        github: "https://github.com/jaskaransinghbhalla/col215",
        isdeployed: false,
        deployment: "",
        img: "projects/col215.jpg"
    },
    {
        id: 5,
        title: "Advanced Data Structure",
        description: "COL106 Assignment",
        github: "https://github.com/jaskaransinghbhalla/col106",
        isdeployed: false,
        deployment: "",
        img: "projects/col106.jpg"
    },
    {
        id: 6,
        title: "Advanced Memory Mapping",
        description: "COL719 Project",
        github: "https://github.com/jaskaransinghbhalla/col719",
        isdeployed: false,
        deployment: "",
        img: "projects/col719.jpg"
    },
    

]
export default function Projects() {
    return <div className="h-32 max-h-full md:max-h-screen">
        <div className="flex flex-col h-screen justify-between">
            <NavBar />
            <Body />
            <Footer />
        </div>
    </div>
}

function Body() {
    return <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold my-4">Projects</h1>
        <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap my-6 mx-3 items-center">
            {content.map((item) => {
                return <Card key={item.id} data={item} />
            })}
        </div>
    </div>
}