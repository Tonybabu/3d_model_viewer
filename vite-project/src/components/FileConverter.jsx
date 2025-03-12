import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const FileConverter = () => {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("obj");
  const [convertedFile, setConvertedFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleFormatChange = (e) => setFormat(e.target.value);

  const handleConvert = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("format", format);

    try {
      const response = await axios.post("http://localhost:5000/convert", formData, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setConvertedFile(url);
    } catch (error) {
      console.error("Conversion failed", error);
    }
  };

  return (
    <>
    <Link to={'/viewer'} className="text-4xl underline text-center">To Viewer</Link>
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold">STL ↔ OBJ Converter</h2>
      <input type="file" onChange={handleFileChange} accept=".stl,.obj" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100" />
      <select value={format} onChange={handleFormatChange} className="block w-full p-2 border rounded-md">
        <option value="obj">Convert to OBJ</option>
        <option value="stl">Convert to STL</option>
      </select>
      <button onClick={handleConvert} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Convert</button>
      {convertedFile && (
        <a href={convertedFile} download={`converted.${format}`} className="block text-center text-blue-600 hover:underline">Download Converted File</a>
      )}
    </div>
    </>
  );
};



export default FileConverter;