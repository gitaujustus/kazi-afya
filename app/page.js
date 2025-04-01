import Benefits from "@/components/home/Benefits";
import QuestionsAnswered from "@/components/home/Questions";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>

      {/* Section 4 - Benefits */}
      <Benefits />

      {/* Section 5 - Questions */}
      <QuestionsAnswered />
    </main>
  );
}
