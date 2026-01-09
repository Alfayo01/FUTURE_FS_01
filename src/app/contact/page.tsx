
import ContactButton from "@/components/ContactButton";
import ContactForm from "@/components/ContactForm";
import FilePicker from "@/components/FilePicker";
import ProgressBar from "@/components/ProgressBar";
import Technology from "@/components/Technology";

export default function ContactPage(){
    return (
        <>
            <p>To reach out to me</p>
                            <FilePicker/>
                              <Technology>
                              <ProgressBar/>
                            </Technology>
        </>
    )
}