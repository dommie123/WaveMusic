import os
import logging

from flask import Flask, send_file, abort
from flask_restful import Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)
cors = CORS(app, origins=['http://localhost:3000'])

logging.basicConfig(level=logging.DEBUG)

@app.route('/', defaults={'req_path': ''})
@app.route('/files/<path:req_path>')
@cross_origin(origins=['http://localhost:3000'], methods=['GET'])
def find_music_at_path(req_path):
    BASE_DIR = 'C:/Users/dman9/'

    # Joining the base and the requested path
    abs_path = os.path.join(BASE_DIR, req_path)
    app.logger.info(abs_path)

    # Return 404 if path doesn't exist
    if not os.path.exists(abs_path):
        return abort(404)

    # Check if path is a file and serve
    if os.path.isfile(abs_path):
        return send_file(abs_path)

    # Show directory contents
    files = os.listdir(abs_path)
    return { 'files': files }, 200

app.run(port=5000, debug=True)