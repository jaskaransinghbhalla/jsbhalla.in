import Button from "../button";
import { contactData } from "../../../data/data";

export default function Contact() {
  return (
    <div className="md:mt-6 md:mb-16">
      <div className="text-xl md:text-2xl font-bold">Contact</div>
      <div className="text text-justify my-4">
        If you are interested in working with me, you can connect me on :
      </div>
      <div className="flex grid grid-cols-2 md:grid-cols-5 gap-4 text-sm md:text-lg">
        {contactData.map((item) => {
          return (
            <Button key={item.href} href={item.href}>
              {item.children}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
