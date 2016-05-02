import csv
import re
import ast
# import geocoder
from sklearn.naive_bayes import GaussianNB
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.cross_validation import KFold, cross_val_score
from sklearn import metrics
import numpy as np
import pickle

#start process_tweet
def processTweet(tweet):
    # process the tweets

    #Convert to lower case
    tweet = tweet.lower()
    #Convert www.* or https?://* to URL
    tweet = re.sub('((www\.[^\s]+)|(https?://[^\s]+))','URL',tweet)
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
            # print tweet_tuple
            # print tweet_tuple
            tweet = tweet_tuple[2]
            location = tweet_tuple[0]
            sentiment = tweet_tuple[3]
            if sentiment == 'POS':
                target_labels.append(0)
            else:
                target_labels.append(1)
            # print sentiment
            # target_labels.append(sentiment)
            tweets.append(tweet)
            # g = geocoder.google(location)
            # ob = {
            #     'location': location,
            #     'tweet': tweet,
            #     'latlng': g.latlng
            # }
        # print tweets
        vectorizer = TfidfVectorizer()

        # train_vectors = vectorizer.fit_transform(tweets[0:50])
        # trainVector = train_vectors.toarray()
        model = GaussianNB()
        # print train_vectors
        # print train_vectors.shape
        # model.fit(trainVector,target_labels[0:50])
        # expected = np.asarray(target_labels[50:])
        # test_vectors = vectorizer.transform(tweets[50:])
        # predicted = model.predict(test_vectors.toarray())
        # print metrics.classification_report(expected, predicted)
        feature_vector = vectorizer.fit_transform(tweets).toarray()
        target_labels = np.array(target_labels)
        # target_labels.reshape(len(target_labels), 1)
        model.fit(feature_vector, target_labels)
        with open("classifier", 'w+') as pickle_file:
            pickle.dump(model, pickle_file)
        with open("vectorizer", 'w+') as vec_file:
            pickle.dump(vectorizer, vec_file)
        # cv_score = cross_val_score(model, feature_vector, target_labels, cv=10, verbose=1)
        # print model
        # print "Accuracy List ", cv_score, " | Avg Accuracy ", np.mean(cv_score)
