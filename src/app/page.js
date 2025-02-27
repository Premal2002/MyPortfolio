import Navbar from "./components/Navbar";
import Projects from "./Projects/page";
import Skills from "./Skills/page";
import Particles from "./ReactBits/Particles";
import Contact from "./Contact/page";
import Hero from "./Hero/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>

    {/* background for entire page */}
      <div style={{ position: "relative", zIndex: -1 }}>
        {/* Particles Background */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -2, // Keeps it behind everything
          }}
          className="bg-gradient-to-br from-black via-gray-900 to-green-900"
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={300}
            particleSpread={20}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
            sizeRandomness={1}
          />
        </div>
      </div>
      <div
        id="home"
        className="min-h-screen  text-white flex flex-col items-center justify-center font-chakra"
      >
        <Navbar />

        {/*Hero  Content Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />

        {/* My Projects Section */}
        <Projects />

        {/* contact us */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
