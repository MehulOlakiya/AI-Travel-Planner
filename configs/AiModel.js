 

const {
  GoogleGenerativeAI,
  
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Generate Travel Plan for Location: New York USA, for 1 Days and 1 Night for Family with a Luxury budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 1 days and 1 night with each day plan with best time to visit in JSON format.\n",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "travelPlan": {\n    "destination": "New York City, USA",\n    "duration": "1 Day and 1 Night",\n    "budget": "Luxury",\n    "flightDetails": {\n      "airline": "Delta Airlines",\n      "flightNumber": "DL1234",\n      "departureAirport": "JFK",\n      "arrivalAirport": "LAX",\n      "departureDate": "2024-03-15",\n      "arrivalDate": "2024-03-15",\n      "departureTime": "10:00 AM",\n      "arrivalTime": "1:00 PM",\n      "flightPrice": "$500",\n      "bookingUrl": "https://www.delta.com"\n    },\n    "hotelOptions": [\n      {\n        "hotelName": "The Peninsula New York",\n        "hotelAddress": "700 Fifth Avenue, New York, NY 10019",\n        "price": "$1500+",\n        "hotelImageUrl": "https://www.thepeninsula.com/newyork/en/images/hotel/the-peninsula-new-york-exterior-view.jpg",\n        "geoCoordinates": {\n          "latitude": 40.7580,\n          "longitude": -73.9855\n        },\n        "rating": 4.8,\n        "description": "Luxurious hotel in Midtown Manhattan with stunning views of Central Park."\n      },\n      {\n        "hotelName": "The Ritz-Carlton New York, Central Park",\n        "hotelAddress": "50 Central Park South, New York, NY 10019",\n        "price": "$1200+",\n        "hotelImageUrl": "https://www.ritzcarlton.com/en/hotels/new-york/central-park/images/hotel/exterior-gallery-1.jpg",\n        "geoCoordinates": {\n          "latitude": 40.7649,\n          "longitude": -73.9775\n        },\n        "rating": 4.7,\n        "description": "Elegant hotel located near Central Park, offering exceptional service and amenities."\n      },\n      {\n        "hotelName": "Four Seasons Hotel New York Downtown",\n        "hotelAddress": "27 Barclay Street, New York, NY 10007",\n        "price": "$1000+",\n        "hotelImageUrl": "https://www.fourseasons.com/newyorkdowntown/images/hotel/exterior-gallery-1.jpg",\n        "geoCoordinates": {\n          "latitude": 40.7132,\n          "longitude": -74.0077\n        },\n        "rating": 4.9,\n        "description": "Modern hotel in Tribeca with a rooftop bar offering panoramic city views."\n      }\n    ],\n    "dailyPlan": [\n      {\n        "day": "Day 1",\n        "time": "Morning (9:00 AM - 12:00 PM)",\n        "activity": "Visit the Empire State Building",\n        "placeDetails": {\n          "placeName": "Empire State Building",\n          "placeDetails": "Iconic skyscraper offering breathtaking views of the city.",\n          "placeImageUrl": "https://www.esbnyc.com/sites/default/files/styles/large/public/2020-07/ESB-Exterior-Day.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7484,\n            "longitude": -73.9857\n          },\n          "ticketPricing": "$39+",\n          "timeToTravel": "1-2 hours"\n        }\n      },\n      {\n        "day": "Day 1",\n        "time": "Afternoon (12:00 PM - 3:00 PM)",\n        "activity": "Lunch at The Clocktower",\n        "placeDetails": {\n          "placeName": "The Clocktower",\n          "placeDetails": "Upscale restaurant with a modern American menu.",\n          "placeImageUrl": "https://www.theclocktowernyc.com/media/12100/clocktower_dining_room_2.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7505,\n            "longitude": -73.9831\n          },\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        }\n      },\n      {\n        "day": "Day 1",\n        "time": "Afternoon (3:00 PM - 6:00 PM)",\n        "activity": "Explore Central Park",\n        "placeDetails": {\n          "placeName": "Central Park",\n          "placeDetails": "Vast urban oasis offering a variety of activities, from strolling to boating.",\n          "placeImageUrl": "https://www.centralparknyc.org/sites/default/files/styles/landscape/public/2019-01/IMG_3989.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7829,\n            "longitude": -73.9654\n          },\n          "ticketPricing": "N/A",\n          "timeToTravel": "2-3 hours"\n        }\n      },\n      {\n        "day": "Day 1",\n        "time": "Evening (7:00 PM - 10:00 PM)",\n        "activity": "Dinner at The NoMad Restaurant",\n        "placeDetails": {\n          "placeName": "The NoMad Restaurant",\n          "placeDetails": "Sophisticated restaurant serving seasonal dishes in a stylish setting.",\n          "placeImageUrl": "https://www.nomadrhc.com/images/uploads/NoMad-Restaurant-Dining-Room.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7405,\n            "longitude": -73.9935\n          },\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        }\n      },\n      {\n        "day": "Day 1",\n        "time": "Late Evening (10:00 PM - 11:00 PM)",\n        "activity": "Enjoy a nightcap at The Roof at Park South",\n        "placeDetails": {\n          "placeName": "The Roof at Park South",\n          "placeDetails": "Rooftop bar with panoramic city views and a lively atmosphere.",\n          "placeImageUrl": "https://www.parksouth.com/wp-content/uploads/2022/10/The-Roof-at-Park-South.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7529,\n            "longitude": -73.9865\n          },\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        }\n      },\n      {\n        "day": "Day 2",\n        "time": "Morning (9:00 AM - 12:00 PM)",\n        "activity": "Visit the Metropolitan Museum of Art",\n        "placeDetails": {\n          "placeName": "Metropolitan Museum of Art",\n          "placeDetails": "World-renowned museum showcasing art and artifacts from around the world.",\n          "placeImageUrl": "https://www.metmuseum.org/sites/default/files/styles/og_image/public/2023-04/2023-04-24_met_exterior_front_facade_day.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7794,\n            "longitude": -73.9632\n          },\n          "ticketPricing": "Suggested Donation: $25",\n          "timeToTravel": "2-3 hours"\n        }\n      },\n      {\n        "day": "Day 2",\n        "time": "Afternoon (12:00 PM - 3:00 PM)",\n        "activity": "Lunch at The Modern",\n        "placeDetails": {\n          "placeName": "The Modern",\n          "placeDetails": "Fine dining restaurant located within the Museum of Modern Art.",\n          "placeImageUrl": "https://www.moma.org/images/content/web/about/press-and-media/2023/05/MoMA_Modern_Restaurant_2_David_Samuelson.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7616,\n            "longitude": -73.9775\n          },\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        }\n      },\n      {\n        "day": "Day 2",\n        "time": "Afternoon (3:00 PM - 6:00 PM)",\n        "activity": "Explore the High Line",\n        "placeDetails": {\n          "placeName": "The High Line",\n          "placeDetails": "Elevated park built on a former railway line offering unique city views.",\n          "placeImageUrl": "https://www.thehighline.org/sites/default/files/styles/hero/public/2023-05/HighLine_Hero.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7486,\n            "longitude": -74.0036\n          },\n          "ticketPricing": "Free",\n          "timeToTravel": "1-2 hours"\n        }\n      },\n      {\n        "day": "Day 2",\n        "time": "Evening (7:00 PM - 10:00 PM)",\n        "activity": "Dinner at The Polo Bar",\n        "placeDetails": {\n          "placeName": "The Polo Bar",\n          "placeDetails": "Classic American steakhouse with a sophisticated atmosphere.",\n          "placeImageUrl": "https://www.thepolobar.com/media/236/polo-bar-dinner-nyc-reservations.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7574,\n            "longitude": -73.9795\n          },\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        }\n      },\n      {\n        "day": "Day 2",\n        "time": "Late Evening (10:00 PM - 11:00 PM)",\n        "activity": "Enjoy a Broadway Show",\n        "placeDetails": {\n          "placeName": "Broadway Theatre District",\n          "placeDetails": "World-famous entertainment district with numerous Broadway shows.",\n          "placeImageUrl": "https://www.timeout.com/newyork/images/102527742.jpg",\n          "geoCoordinates": {\n            "latitude": 40.7580,\n            "longitude": -73.9855\n          },\n          "ticketPricing": "$50+",\n          "timeToTravel": "3-4 hours"\n        }\n      }\n    ]\n  }\n}\n```\n\n**Notes:**\n\n* This plan provides a suggested itinerary, and you can customize it based on your family\'s interests and preferences. \n* Flight and hotel prices are estimates and subject to change.\n* It\'s recommended to book your flights and hotel in advance, especially if traveling during peak season.\n* Be sure to check the opening hours and ticket prices for attractions and restaurants before your trip.\n* Remember to factor in transportation time between locations.\n* Consider purchasing a city pass for access to multiple attractions. \n\nThis plan assumes a family of 2-4 people.  For larger families, you may need to adjust the itinerary and budget.  Enjoy your trip to New York City! \n',
          },
        ],
      },
    ],
  });



