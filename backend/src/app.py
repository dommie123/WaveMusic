import os
import logging
import win32com.client
import pythoncom

from flask import Flask, jsonify
from flask_restful import Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)
cors = CORS(app, origins=['http://localhost:3000'])

logging.basicConfig(level=logging.DEBUG)

def get_properties(file_path):
    properties = {}
    shell = win32com.client.Dispatch("Shell.Application")
    folder = shell.Namespace(os.path.dirname(file_path))
    file_name = os.path.basename(file_path)
    for i in range(200):
        try:
            property_name = folder.GetDetailsOf(None, i)
            if not property_name:
                break
            property_value = folder.GetDetailsOf(folder.ParseName(file_name), i)
            properties[property_name] = property_value
        except Exception as e:
            pass
    return properties

def search_music_files(directory):
    music_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.mp3', '.wav', '.ogg', '.flac')):
                music_path = os.path.join(root, file)
                music_metadata = get_properties(music_path)
                music_files.append({ 'music_path': music_path, 'properties': music_metadata })
    return music_files

@app.route('/files')
@cross_origin(origins=['http://localhost:3000'], methods=['GET'])
def find_music_on_computer():
    music_directory = 'C:/Users/dman9/OneDrive/Music'  # Change this to your music directory
    if not os.path.exists(music_directory):
        return jsonify({'error': 'Music directory does not exist'}), 404
    
    pythoncom.CoInitialize()  # Initialize COM for this thread
    music_files = search_music_files(music_directory)
    pythoncom.CoUninitialize()  # Uninitialize COM after processing
    
    return jsonify({'music_files': music_files}), 200


app.run(port=5000, debug=True)