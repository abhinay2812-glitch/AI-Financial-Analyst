import os
from dotenv import load_dotenv

apikeys = load_dotenv() #reads the env files. 

Google_api_key = os.getenv("GOOGLE_API_KEY") #fetch variables from env files
Grok_api_key = os.getenv("GROK_API_KEY")