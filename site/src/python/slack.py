import json
import requests


def post_message_to_slack(text, blocks = None):
    return requests.post('https://slack.com/api/chat.postMessage', {
        'token': "xoxb-5803756490416-5829949870369-uJM7woFMiThYz0R4GhEbEle5",
        'channel': "C05NRC1NLCE",
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

print(post_message_to_slack("Bom dia!", blocks=blocks))