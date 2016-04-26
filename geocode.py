import geocoder
import ast
import json

if __name__ == "__main__":
    places = {}
    with open("combined.csv") as combined_file:
        for line in combined_file:
            tweet_tuple = ast.literal_eval(line)
            place = tweet_tuple[0]
            if place in places:
                places[place]['count'] += 1
                print place, " there. Incrementing Count"
            else:
                g = geocoder.google(place)
                places[place] = {
                    'latlng': g.latlng,
                    'count': 1
                }
                print g.latlng
    with open("coordinates.json", "a+") as json_file:
        json_file.write(json.dumps(places))
