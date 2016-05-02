import csv
import re
import ast
# import geocoder
from sklearn.naive_bayes import GaussianNB, MultinomialNB
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.cross_validation import KFold, cross_val_score, LeaveOneOut
from sklearn.metrics import accuracy_score
from sklearn import metrics
from sklearn.pipeline import Pipeline
import numpy as np
import pickle

def print_top10(vectorizer, clf, class_labels):
   """Prints features with the highest coefficient values, per class"""
   feature_names = vectorizer.get_feature_names()
   for i, class_label in enumerate(class_labels):
       top10 = np.argsort(clf.coef_[0])[-10:]
       print("%s: %s" % (class_label,
             " ".join(feature_names[j] for j in top10)))

#start process_tweet
def processTweet(tweet):
    # process the tweets

    #Convert to lower case
    tweet = tweet.lower()
    #Convert www.* or https?://* to URL
    tweet = re.sub('((www\.[^\s]+)|(https?://[^\s]+))','',tweet)
    #Convert @username to AT_USER
    tweet = re.sub('@[^\s]+','',tweet)
    #Remove additional white spaces
    tweet = re.sub('[\s]+', ' ', tweet)
    #Replace #word with word
    tweet = re.sub(r'#([^\s]+)', r'\1', tweet)
    #trim
    tweet = tweet.strip('\'"')
    tweet = tweet.strip()
    return tweet

if __name__ == "__main__":
    target_labels = []
    tweets = []
    with open("combine_train.csv") as tweets_file:
        for line in tweets_file:
            tweet_tuple = ast.literal_eval(line)
            tweet = processTweet(tweet_tuple[2])
            location = tweet_tuple[0]
            sentiment = tweet_tuple[4]
            if sentiment == 'POS':
                target_labels.append(0)
            else:
                target_labels.append(1)
            tweets.append(tweet)

    clf = Pipeline([('vect', TfidfVectorizer()), ('mnb', MultinomialNB())])
    clf.fit(tweets, target_labels)
    with open("clf", "w+") as clf_file:
        pickle.dump(clf, clf_file)
    cv_score = cross_val_score(clf, tweets, target_labels, cv=10, verbose=1)
    print "Accuracy List ", cv_score, " | Avg Accuracy ", np.mean(cv_score)
