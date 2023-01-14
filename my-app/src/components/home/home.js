import {React} from 'react'
import './home.css'
function Home() {

    return (
        <div className="App">
          <h1 className="App-header">
            Trust Your Sources
          </h1>
          <p className="ourName">By Hack(her)z</p>
          <div className="bar">
            <button className='btn'>Trending on Social Media</button>
            <button className='btn'>Trending on News Outlets</button>
          </div>
          <div className='body'>
              <input className='search' placeholder='Search Value'></input>
              <button className='searchBtn'>Search!</button>
          </div>
        </div>
      );
}

export default Home