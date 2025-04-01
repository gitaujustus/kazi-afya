import Benefits from "@/components/home/Benefits";
import CTASection from "@/components/home/CTA";
import FAQs from "@/components/home/Questions";


export default function Home() {
  return (
    <main>
      <h1>Home</h1>

      {/* Section 4 - Benefits */}CTASection={}
      <Benefits />

      {/* Section 5 - Questions */}
      <FAQs />

      {/* Section 6 - CTA */}
      <CTASection />



    </main>
  );
}
