from flask import Flask, render_template , jsonify ,request
import json
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/getpoints/')
def get_points():
    with open('static/coordinates.json') as coord_file:
        coords = json.loads(coord_file.read())
    return json.dumps(coords)

if __name__ == '__main__':
    app.debug = True
    app.run()
