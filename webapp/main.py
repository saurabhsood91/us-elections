from flask import Flask, render_template , jsonify ,request
import json
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/clintonchor')
def choropleth_clinton():
    return render_template("clinton_choropleth.html")

@app.route('/cruzchor')
def choropleth_cruz():
    return render_template("cruz_choropleth.html")

@app.route('/trumpchor')
def choropleth_trump():
    return render_template("trump_choropleth.html")

@app.route('/sanderschor')
def choropleth_sanders():
    return render_template("sanders_choropleth.html")

@app.route('/<sentiment>/<candidate>')
def get_points_can_sent(sentiment, candidate):
    print sentiment
    print candidate
    output = []
    with open("static/output.json") as coordinates:
        data = json.loads(coordinates.read())
        for element in data:
            if element['sentiment'] == sentiment and element["candidate"] == candidate:
                output.append(element)
    return json.dumps(output)

if __name__ == '__main__':
    app.debug = True
    app.run()
