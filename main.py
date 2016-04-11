import tweepy
import settings
from settings import *
import json

class StreamListener(tweepy.StreamListener):
    # def on_status(self, data):
    #     try:
    #         if data.coordinates != None:
    #             status_text = unicode(data.text)
    #             if status_text.lower().find("clinton") != -1:
    #                 # Get lat and lng
    #                 lat = data.coordinates["coordinates"][1]
    #                 lng = data.coordinates["coordinates"][0]
                    
    #                 # Replace the delimiter character
    #                 status_text = status_text.replace("|", "")
                    
    #                 # Get place name
    #                 place_name = data.place.full_name
    #                 print lat, "|", lng, "|", data.place.full_name, "|", status_text, "\n"
    #     except:
    #         pass
    def on_status(self, data):
        try:
            if data.place != None:
                status_text = unicode(data.text)
                if status_text.lower().find("cruz") != -1:
                    # Replace the delimiter character
                    status_text = status_text.replace("|", "")
                    
                    # Get place name
                    place_name = data.place.full_name
                    line = data.place.full_name, "|", status_text
                    print line
        except:
            pass    
            
        
    def on_error(self, status_code):
        print status_code
        

if __name__ == "__main__":
    # Get Authenticator object
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    # Set Access Token
    auth.set_access_token(access_token, access_token_secret)
    # Get API object
    api = tweepy.API(auth)
    
    # Create object of streaming object
    stream_listener = StreamListener()
    stream = tweepy.Stream(auth=api.auth, listener = stream_listener)
    
    stream.filter(locations=[-117.477, 32.496, -67.2038, 44.6103])