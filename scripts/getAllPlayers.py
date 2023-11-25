import requests
import time

APIkey= "71703312-7e61-4cc0-b1f7-e17f9710b4c3"


def getData(page):
    r = requests.get('https://futdb.app/api/players?page='+str(page), 
                    headers={
                        'X-AUTH-TOKEN': APIkey,
                        'accept': 'application/json'
                        }
                    ) 

    data = r.json()

    print(str(data["pagination"]["countCurrent"])+" -> "+str(data["pagination"]["pageCurrent"])+"/"+str(data["pagination"]["pageTotal"]))


    f = open("namesData.jsx", "a",encoding="utf-8")

    for idx, value in enumerate(data["items"]):
        name = "ERROR!"

        if value["firstName"] == None:
            name=value["lastName"]
        if value["lastName"] == None:
            name = value["firstName"]
        if value["firstName"] == None and value["lastName"] == None:
            name = value["name"]
        if value["firstName"] != None and value["lastName"] != None:
            name = value["firstName"]+" "+value["lastName"]
        
        
        try:
            f.write('"'+name+'":'+str(value["id"])+",\n")
        except:
            print("ID:"+str(value["id"]))

    f.close()


for c in range(1,948):
    getData(c)
    time.sleep(1)