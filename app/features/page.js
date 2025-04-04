import Lab from "@/components/features/Lab";
import ReportingBI from "@/components/features/ReportingBI";
import MultiDevice from "@/components/features/Multi-Device";
import AdditionalFeatures from "@/components/features/Additional";

const Features = () => {
    return ( 
        <main>
            {/* Sections */}
            <h1>Features</h1>


            {/* Section 5 */}
            <Lab />

            {/* Section 6  */}
            <ReportingBI />
            
            
            
            {/* Section 8 */}
            <MultiDevice />

            {/* Section 9  */}
            <AdditionalFeatures />




        </main>
     );
}
 
export default Features;