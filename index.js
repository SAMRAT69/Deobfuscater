import React from 'react';
import Particles from 'react-particles-js';
import Header from '../components/Header';
import CodeInput from '../components/CodeInput';
import ResultDisplay from '../components/ResultDisplay';

export default function Home() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: { enable: true, value_area: 800 },
            },
            shape: {
              type: 'circle',
            },
            color: {
              value: '#ffffff',
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1 },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: true, speed: 2, size_min: 0.1 },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'random',
              out_mode: 'out',
            },
          },
        }}
      />
      <Header />
      <div className="content">
        <CodeInput />
        <ResultDisplay />
      </div>
      <footer>
        <p>Made with ❤️ by SAMRAT | &copy; 2025 Deobfuscator</p>
      </footer>
    </div>
  );
}
