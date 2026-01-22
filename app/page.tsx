import HolomatrixBubble from "./components/HolomatrixBubble";
import SpaceBackground from "./components/SpaceBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Stars background */}
      <SpaceBackground />
      
      {/* 3D Holomatrix Bubble */}
      <div className="flex items-center justify-center min-h-screen z-10 relative">
        <HolomatrixBubble />
      </div>
    </div>
  );
}

