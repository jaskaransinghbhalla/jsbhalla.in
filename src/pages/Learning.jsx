import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export default function Learning() {
    return <div className="h-32 max-h-full md:max-h-screen">
        <div className="flex flex-col h-screen justify-between">
            <NavBar />
            <LearningSkills />
            <Footer />
        </div>
    </div>
}

function LearningSkills() {
    return <div className="my-6 mx-8 md:mx-32 text-justify">
        <div className="text-2xl font-bold">Learning List</div>
        <div className="my-3 ">
            These are the skills that I wish to learn soon....
        </div>
        <div className=" ml-8 mr:2 my-3 font-medium ">
            <ol className="list-decimal">
                <li className="my-1">Containerization, Docker</li>
                <li className="my-1">Backend communication protocols</li>
                <li className="my-1">Custom hooks</li>
                <li className="my-1">Basic DevOps</li>
                <li className="my-1">MonoRepos, TurboRepo</li>
                <li className="my-1">Docker end to end</li>
                <li className="my-1">Serverless Backends</li>
                <li className="my-1">Newer clouds like Fly/Remix</li>
                <li className="my-1">OpenAPI Spec</li>
                <li className="my-1">Authentication using external libraries</li>
                <li className="my-1">Scaling Node.js, performance benchmarks</li>
                <li className="my-1">Deploying PM packages</li>
                <li className="my-1">Advanced Backend, System Design</li>
                <li className="my-1">Advanced Devops</li>
                <li className="my-1">Advanced backend communication</li>
                <li className="my-1">Docker Deep dive</li>
                <li className="my-1">Message queues and Pubsubs</li>
                <li className="my-1">Testing Node.js Apps in 2023</li>
                <li className="my-1">Real time communication, basics of WebRTC</li>
                <li className="my-1">GraphQL</li>
                <li className="my-1">Microservices Architecture</li>
                <li className="my-1">Serverless Architecture</li>
                <li className="my-1">Container orchestration, Docker Swarm</li>
                <li className="my-1">Proxies, Load balancers</li>
                <li className="my-1">Kubernetes</li>
                <li className="my-1">Redis Deep dive</li>
                <li className="my-1">CI/CD</li>
                <li className="my-1">Sharding, Replication, Resiliency</li>
                <li className="my-1">Horizontal and vertical scaling</li>
                <li className="my-1">Polling and websockets</li>
                <li className="my-1">Grpc</li>
                <li className="my-1">Kafka Deep dive</li>
                <li className="my-1">Monitoring systems basics to advance</li>
                <li className="my-1">Common Design Patterns in JS</li>
                <li className="my-1">Prometheus, Grafana</li>
                <li className="my-1">Advanced DB concepts (Indexing, normalization)</li>
                <li className="my-1">Newrelic as a paid service</li>
                <li className="my-1">Rate limitting</li>
                <li className="my-1">Serverless Deep dive</li>
                <li className="my-1">Captchas and DDoS protection</li>
                <li className="my-1">AWS Constructs (EC2, S3, CDNs, LB, EKS)</li>
                <li className="my-1">Continuous Integration/Continuous Deployment (CI/CD) Best Practices</li>


                <li className="my-1">Capacity Estimation</li>
                <li className="my-1">Load Balancers</li>
                <li className="my-1">CAP Theorem</li>
            </ol>
        </div>
        <div className="text-2xl my-3 font-bold">Projects</div>
        <div className="my-3 ">
            These are the some of the project I plan to build soon for my learning purposes....
        </div>
        <div className="ml-8 mr:2  my-3 font-medium ">
            <ol className='list-decimal'>
                <li className="my-1">Paytm</li>
                <li className="my-1">Zerodha</li>
                <li className="my-1">Zapier</li>
                <li className="my-1">GSoC Projects</li>
            </ol>
        </div>
        <div className="text-2xl my-3 font-bold">Other Domains</div>
        <div className="my-3 ">
            These are the some of the computer science domains I wish to explore soon....
        </div>
        <div className=" ml-8 mr:2  my-3 font-medium ">
            <ol className='list-decimal'>
                <li className="my-1">Blockchain</li>
                <li className="my-1">Aritificial Intelligence</li>
                <li className="my-1">Machine Learning</li>
                <li className="my-1">Data Science</li>
                <li className="my-1">Cybersecurity</li>
                <li className="my-1">Cloud</li>
                <li className="my-1">Aritificial Intelligence in Finance</li>
            </ol>
        </div>
    </div >

}