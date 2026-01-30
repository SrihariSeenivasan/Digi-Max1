import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingRobotAssistant from "@/components/ui/FloatingRobotAssistant";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <FloatingRobotAssistant />
        </>
    );
}
