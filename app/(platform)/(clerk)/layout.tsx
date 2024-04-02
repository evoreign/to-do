import { Footer } from "../../(marketing)/_components/footer";
import { Navbar } from "../../(marketing)/_components/navbar";
const ClerkLayout = ({ children }: {
    children: React.ReactNode;
  }) => {
    return (
      <div className="h-full flex items-center justify-center bg-slate-100">
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
      </div>
    );
};
  
export default ClerkLayout;