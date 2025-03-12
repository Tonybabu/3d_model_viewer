import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Link } from "react-router-dom";

const Viewer = () => {
  const [file, setFile] = useState(null);
  const [geometry, setGeometry] = useState(null);
  const [fileType, setFileType] = useState("");

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;

    const fileExtension = uploadedFile.name.split(".").pop().toLowerCase();
    if (!["obj", "stl"].includes(fileExtension)) {
      alert("Please upload an .OBJ or .STL file");
      return;
    }

    setFile(uploadedFile);
    setFileType(fileExtension);
  };

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const loader =  new OBJLoader();
      loader.load(
        event.target.result,
        (object) => setGeometry(object),
        undefined,
        (error) => console.error("Error loading file:", error)
      );
    };
    reader.readAsDataURL(file);
  }, [file, fileType]);

  return (
    <>
    <Link to={'/'} className="text-4xl underline text-center">To File Converter</Link>
    <div className="flex flex-col w-[35rem] items-center justify-center p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold">3D Viewer</h2>
      <div className="mb-4">
        <input
          type="file"
          accept=".obj, .stl"
          onChange={handleFileChange}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="w-full  h-[500px] bg-white shadow-lg rounded-lg">
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls enableZoom enablePan enableRotate />
          {geometry && <primitive object={geometry} />}
        </Canvas>
      </div>
    </div>
    </>
  );
};

export default Viewer;
