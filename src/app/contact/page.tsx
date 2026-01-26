
//import ContactButton from "@/components/ContactButton";
import ContactForm from "@/components/ContactForm";
//import FilePicker from "@/components/FilePicker";
import Technology from "@/components/Technology";

export default function ContactPage(){
    return (
        <>                 
                            <Technology/>
                            <p className="text-4xl font-bold text-center p-4">Reach out to me:</p>
                            <ContactForm/>
        </>
    )
}