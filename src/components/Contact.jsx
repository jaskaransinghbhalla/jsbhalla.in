export default function Contact() {
    return <div className="my-12">
        <div className="text-2xl font-bold">Contact</div>
        <div className="text text-justify my-6">
            If you are interested in working with me, you can connect me on :
        </div>
        <div className="flex grid grid-cols-5 gap-4 text">
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"><a href="mailto:jaskaransinghbhalla.mgsb@gmail.com">Mail</a></button>
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"><a href="https://wa.me/+917009339534"> Whatsapp</a></button>
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"><a href="https://www.linkedin.com/in/jaskaransinghbhalla/">LinkedIn </a></button>
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"><a href="https://www.instagram.com/7goodeeds/">Instagram</a>  </button>
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"><a href="https://twitter.com/7goodeeds">Twitter</a> </button>
        </div>
    </div>
}