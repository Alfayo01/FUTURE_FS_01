import ProgressBar from "@/components/ProgressBar";
import Technology from "@/components/Technology";
import Profile from "@/components/Profile";
import FilePicker from "@/components/FilePicker";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Profile/>
      <FilePicker/>
      <Technology>
        <ProgressBar/>
      </Technology>
      <ContactForm/>
    </div>
  );
}
