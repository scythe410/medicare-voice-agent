import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Dynamically load the ElevenLabs script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-mono">
      <elevenlabs-convai agent-id="agent_9601kc17p3tse08t7ygb2p0b4ygm"></elevenlabs-convai>
      <div className="absolute bottom-10 text-gray-400 text-xs">
        System Active
      </div>
    </div>
  );
}

export default App;
