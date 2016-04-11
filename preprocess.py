import csv
import re

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
    return tweet

if __name__ == "__main__":
    with open("op.txt") as tweets_file:
        i = 0
        for line in tweets_file:
            row = line.split("|")
            print str(i) + ": " + processTweet(row[-1])
            i += 1
        # csvreader = csv.reader(tweets_file, delimiter="|")
        # for row in csvreader:
        #     print processTweet(row[-1])