import json
import os

import requests
from dotenv import load_dotenv

load_dotenv()

def mensagem_slack(text, blocks = None):
    return requests.post('https://slack.com/api/chat.postMessage', {
        'token': os.environ.get('SLACK_BOT'),
        'channel': "C05Q2N4KYP4",
        'icon_emoji': ":slack:",
        'text': text,
        'blocks': json.dumps(blocks) if blocks else None
    }).json()	

blocks = [{  
  "type": "section",
  "text": {  
    "type": "mrkdwn",
    "text": ":thumbsup: Blocos."
  }
}]