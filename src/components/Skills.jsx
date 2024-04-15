import { Link } from "react-router-dom";

export default function Skills() {
    return <div className="my-6 text-justify">
        <div className="text-2xl font-bold">My Skills</div>
        <div className="my-6">
            Through college courses and self-learning, I've built a solid foundation in computer science and web development. Here are some technologies I'm familiar with:
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mx-4 my-3 font-medium ">
            <ul className="list-disc">
                <li className="my-1">Next.js</li>
                <li className="my-1">React.js</li>
                <li className="my-1">Mongo</li>
                <li className="my-1">VHDL</li>
            </ul>
            <ul className="list-disc">
                <li className="my-1">Prisma</li>
                <li className="my-1">Express</li>
                <li className="my-1">JavaScript</li>
                <li className="my-1">Bootstrap</li>
            </ul>
            <ul className="list-disc">
                <li className="my-1">TypeScript</li>
                <li className="my-1">Node.js</li>
                <li className="my-1">Python3</li>
                <li className="my-1">HTML & CSS</li>
            </ul>
            <ul className="list-disc">
                <li className="my-1">Tailwind</li>
                <li className="my-1">SQL</li>
                <li className="my-1">Java</li>
            </ul>
        </div>

        <div className="mt-4 py-2">
            I am currently learning about Blockchain and Smart Contracts, Synthesis of Digital Systems, Venture Financing and Teaming, Next.js and Artifical Intelligence.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mx-4 my-3 font-medium ">
            <ul className="list-disc">
                <li className="my-1"><Link to="https://jaskaransinghbhalla.notion.site/Solidity-d6f2337e94d541a98baac56a1d431e98">Solidity</Link></li>
                <li className="my-1"><Link to="https://thirdweb.com/">Thirdweb</Link></li>
            </ul>
            <ul className="list-disc">
                <li className="my-1"><Link to="https://archive.trufflesuite.com/ganache/">Ganache</Link></li>
                <li className="my-1"><Link to="https://ethereum.org/en/">Etherum</Link></li>
            </ul>
            <ul className="list-disc">
                <li className="my-1"><Link to="https://archive.trufflesuite.com/">Truffle</Link></li>
                <li className="my-1"><Link to="https://hardhat.org/">Hardhat</Link></li>
            </ul>
            <ul className="list-disc">
                <li className="my-1"><Link to="https://www.openzeppelin.com/">Openzipline</Link></li>
            </ul>
        </div>
    </div>
}