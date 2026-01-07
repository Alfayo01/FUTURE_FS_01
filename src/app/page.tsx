import ProgressBar from "@/components/ProgressBar";
import Technology from "@/components/Technology";
import Profile from "@/components/Profile";
import FilePicker from "@/components/FilePicker";
import ContactButton from "@/components/ContactButton";

export default function Home() {
  return (
    <div>
      <Profile/>
      <FilePicker/>
      <Technology>
        <ProgressBar/>
      </Technology>
      <ContactButton/>
    </div>
  );
}
