import React, { useRef, useState } from 'react';
import './App.css'

function App() {


  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files); 
  };


  return (
   <>
    <div className="flex flex-col min-h-screen">
      <div className="absolute inset-0 bg-[#71717a] z-0"></div>
      <div className="relative z-10 w-full h-24 bg-[#8BD5D3] flex justify-between items-center p-3">
        <h1 className="text-3xl font-bold text-[#737373] pl-4">RCCIIT <span className="font-bold text-2xl text-[#030712]">Placement Data Analysis</span></h1>
        <div className="flex items-center space-x-2 pr-4"></div>
      </div>
      <main className="relative z-10 flex flex-1 justify-center gap-4 p-4">
        <div className="w-full max-w-md mx-auto mt-4 my-16 bg-white flex justify-center rounded">
          <div className="absolute w-6 mx-2 mb-3 flex justify-center items-center p-6 gap-32">
            <button class="bg-[#d6d3d1] hover:bg-[#a1a1aa] text-black text-lg font-semibold py-1 px-6 border border-black rounded"onClick={handleButtonClick}>Select</button>
            <button class="bg-[#d6d3d1] hover:bg-[#a1a1aa] text-black text-lg font-semibold py-1 px-6 border border-black rounded"onClick={() => setSelectedFiles([])}>Clear</button>
          </div>
          <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              className="hidden"
            />
          <div className="w-full mx-6 my-20 overflow-y-scroll bg-[#d6d3d1] rounded p-4">
            <h3 className="text-lg font-semibold mx-0 p-0"><span className="bg-[#f5f5f4] px-2">Selected Files:</span></h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index} className="text-lg text-gray-700">
                  <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute w-full max-w-md ml-72 mt-[450px] p-6">
            <button class="bg-[#d6d3d1] hover:bg-[#a1a1aa] text-black text-lg font-semibold py-1 px-6 border border-black rounded">Update</button>
          </div>
        </div>
        <div className="w-full mt-4 my-16 bg-white rounded"></div>
      </main>
      <div className="w-full h-12 fixed bottom-0 left-0 right-0  bg-[#155e75]"></div>
    </div>
   </>
  ) 
}

export default App