import ast
if __name__ == "__main__":
    with open("cruz.csv") as tweets_file:
        with open("cruz_mod.csv", "a+") as write_file:
            for line in tweets_file:
                tweet_tuple = ast.literal_eval(line)
                tweet_tuple = tweet_tuple + ("Cruz",)
                write_file.write(str(tweet_tuple))
                write_file.write("\n")
