import ProgressBar from "@/components/ProgressBar";
import Technology from "@/components/Technology";
import Profile from "@/components/Profile";
import FilePicker from "@/components/FilePicker";

export default function Home() {
  return (
    <div>
      <Profile/>
      <FilePicker/>
      <Technology>
        <ProgressBar/>
      </Technology>
    </div>
  );
}
