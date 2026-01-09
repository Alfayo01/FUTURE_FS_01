
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback="<p>Loading...</p>">
        <h1>Home page</h1>
      </Suspense>
    </div>
  );
}
