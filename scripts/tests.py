import requests
import time

APIkey= "71703312-7e61-4cc0-b1f7-e17f9710b4c3"

r = requests.get('https://futdb.app/api/players/17298/image', 
                headers={
                    'X-AUTH-TOKEN': APIkey,
                    'accept': 'image/png'
                    }
                ) 

data = r.json()

print(data)
