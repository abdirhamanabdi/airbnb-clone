import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1620693776767-e929c5724b49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://images.unsplash.com/photo-1533645782036-997947a9d529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1511965939792-2a849ffcb9a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="3 Bedroom villa in Mara"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="13,000/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Penthouse in Nairobi"
                description="Enjoy the amazing sights of Nairobi with this stunning penthouse"
                price="10,000/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment kisumu"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="10,000 ksh a night"
            />
            </div>
        </div>
    )
}

export default Home
