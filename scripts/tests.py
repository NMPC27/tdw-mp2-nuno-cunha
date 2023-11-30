import requests
import time

APIkey= ""

r = requests.get('https://futdb.app/api/players/17298/image', 
                headers={
                    'X-AUTH-TOKEN': APIkey,
                    'accept': 'image/png'
                    }
                ) 

data = r.json()

print(data)
