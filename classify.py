import pandas as pd
import csv
import ast
import pickle
from sklearn.naive_bayes import GaussianNB
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
import nltk.tokenize as tk
import numpy as np
import geocoder
from sklearn.pipeline import Pipeline
import json

def classify(classifier, tweets):
    # print tweets
    # vectorizer = TfidfVectorizer()
    return classifier.predict(tweets)
    # print features


classifier = None
with open("clf") as pickle_object:
    classifier = pickle.load(pickle_object)

with open("combined.csv") as output_file:
    data = []
    places = {}
    with open("combined_test.csv") as test_file:
        tweets = []
        for line in test_file:
            tweet_tuple = ast.literal_eval(line)
            # print tweet_tuple[2]
            tweets.append(tweet_tuple[2])
        class_labels = classify(classifier, tweets)

    with open("combine_train.csv") as train_file:
        for line in train_file:
            tweet_tuple = ast.literal_eval(line)
            candidate = tweet_tuple[3]
            place = tweet_tuple[0]
            sentiment = tweet_tuple[4]

            if place in places:
                coordinates = places[place]
            else:
                g = geocoder.google(place)
                coordinates = g.latlng
                places[place] = g.latlng
            obj = {'candidate': candidate, 'sentiment': sentiment, 'coordinates': coordinates}
            print obj
            data.append(obj)
                
    i = 0
    with open("combined_test.csv") as test_file:
        for line in test_file:
            tweet_tuple = ast.literal_eval(line)
            candidate = tweet_tuple[3]
            place = tweet_tuple[0]
            if class_labels[i] == 0:
                sentiment = 'POS'
            else:
                sentiment = 'NEG'
            if place in places:
                coordinates = places[place]
            else:
                g = geocoder.google(place)
                coordinates = g.latlng
                places[place] = g.latlng
            obj = {'candidate': candidate, 'sentiment': sentiment, 'coordinates': coordinates}
            print obj
            data.append(obj)
    with open("output.json", 'w+') as output_file:
        output_file.write(json.dumps(data))
