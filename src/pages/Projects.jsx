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
        title: "Portfolio Website",
        description: "Intern assignment",
        github: "https://github.com/jaskaransinghbhalla/portfolio-crowwd.io",
        isdeployed: false,
        deployment: "",
        img: "projects/crowwd.png"
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
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="flex flex-col lg:flex-row flex-wrap my-4 mx-3 items-center">
            {content.map((item) => {
                return <Card key={item.id} data={item} />
            })}
        </div>
    </div>
}