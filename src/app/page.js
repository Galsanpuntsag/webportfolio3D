import Image from "next/image";
import { Home as MyHome } from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("/images/homeImage.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };
  return (
    <main style={backgroundStyle}>
      <MyHome />
      <About />
    </main>
  );
}
