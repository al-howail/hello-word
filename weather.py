from dotenv import load_dotenv
from pprint import pprint
import requests
import os

load_dotenv()


def get_my_weather(city):
    request_url = f"https://api.openweathermap.org/data/2.5/weather?appid={os.getenv("API_KEY")}&q={city}&units=metric"
    weather_data = requests.get(request_url).json()
    return weather_data


if __name__ == "__main__":
    print("Get Weather")
    # print(os.getenv("API_KEY"))
    my_weather_info = get_my_weather("new york")
    print(my_weather_info)
