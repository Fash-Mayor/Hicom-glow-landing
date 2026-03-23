import Landing from './landing';
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="App">
      <Landing />
      <Analytics />
    </div>
  );
}