import { useState } from 'react';

const CodeInput = () => {
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make API call to backend to deobfuscate the code
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your obfuscated code here"
      />
      <button type="submit">Deobfuscate</button>
    </form>
  );
};

export default CodeInput;
