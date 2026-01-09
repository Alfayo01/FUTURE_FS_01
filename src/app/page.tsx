
import { Suspense } from "react";
import Profile from "@/components/Profile";
import ContactButton from "@/components/ContactButton";

export default function Home() {
  return (
    <div>
      <Suspense fallback="<p>Loading...</p>">
        <h1>Home page</h1>
        <Profile/>
        <Suspense fallback="<p>Loading...</p>">
        <ContactButton/>
        </Suspense>
      </Suspense>
    </div>
  );
}
