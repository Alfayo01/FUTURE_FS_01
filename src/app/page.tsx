import ProgressBar from "@/components/ProgressBar";
import Technology from "@/components/Technology";
import Profile from "@/components/Profile";
import FilePicker from "@/components/FilePicker";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback="<p>Loading...</p>">
        <Profile/>
        <FilePicker/>
          <Technology>
            <ProgressBar/>
          </Technology>
      </Suspense>
    </div>
  );
}
