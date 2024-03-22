export default function Contact() {
    return <div className="py-12 ">
        <div className="text-xs text-justify">
            If you like my work and are interested in working with me, you can reach me at <span className="underline"><a href="mailto:jaskaransinghbhalla.mgsb@gmail.com">jaskaransinghbhalla.mgsb@gmail.com</a>.</span>
            You can also connect with me on the following platforms:
        </div>
        <div className="flex grid grid-cols-5 gap-4 pt-7 text-sm">
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"> GitHub </button>
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"> Twitter </button>
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"> Instagram </button>
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"> LinkedIn </button>
            <button className="bg-white-700 px-1 border-2 border-stone-400 rounded-md shadow-lg"> Telegram </button>
        </div>
    </div>
}