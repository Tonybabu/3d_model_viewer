from flask import Flask, request, send_file
from flask_cors import CORS
import trimesh
import os

app = Flask(__name__)
CORS(app)

@app.route('/convert', methods=['POST'])
def convert_file():
    if 'file' not in request.files:
        return "No file uploaded", 400
    
    file = request.files['file']
    format = request.form.get('format')
    if format not in ['obj', 'stl']:
        return "Invalid format", 400
    
    temp_path = f"temp.{file.filename.split('.')[-1]}"
    file.save(temp_path)

    mesh = trimesh.load(temp_path)
    output_path = f"converted.{format}"
    mesh.export(output_path)

    os.remove(temp_path)
    return send_file(output_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
