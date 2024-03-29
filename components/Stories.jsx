import {faker} from "@faker-js/faker"
import { useEffect, useState } from "react"
import Story from "./Story";

function Stories() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            avatar: faker.image.avatar(),
            name: faker.name.firstName(),
            username: faker.internet.userName(),
            phone: faker.phone.number(),
            company: faker.company.buzzNoun(),
            Eemail: faker.internet.email(),
            id: i
        }))
        setSuggestions(suggestions)
    }, [])





  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm 
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {suggestions.map((profile) => (
            <Story key={profile.id} img={profile.avatar} username={profile.username}/>
        ))


        }
    </div>
  )
}

export default Stories