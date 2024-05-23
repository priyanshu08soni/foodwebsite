import React from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import Food from "../assets/Food_Video.mp4";
import Meal from "../assets/Meal.jpg"
const Home = () => {
  
  return (
    <>
      
      <div className="content">
        <section className="home-wrapper">
          <div className="home-video shadow-in">
            <video src={Food} autoPlay loop muted />
          </div>
          <div className="home-wrapper-title shadow-out">
            <h1>Welcome to My Food Website</h1>
          </div>
        </section>
        <section className="home-wrapper-2" >
            <div className="home-wrapper-title shadow-out">
                <h1>Categories</h1>
            </div>
            <div className="categories" >
                <div className="categories-card shadow-out" >
                    <img src={Meal} alt="category" />
                    <div className="card-heading" >
                        <h3 className="category-card-title" >Category</h3>
                    </div>
                </div>
                <div className="categories-card shadow-out" >
                    <img src={Meal} alt="category" />
                    <div className="card-heading" >
                        <h3 className="category-card-title" >Category</h3>
                    </div>
                </div>
                <div className="categories-card shadow-out" >
                    <img src={Meal} alt="category" />
                    <div className="card-heading" >
                        <h3 className="category-card-title" >Category</h3>
                    </div>
                </div>
                <div className="categories-card shadow-out" >
                    <img src={Meal} alt="category" />
                    <div className="card-heading" >
                        <h3 className="category-card-title" >Category</h3>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrapper-3">
          <div className="home-wrapper-3-heading shadow-out">
            <h1>Meals</h1>
            <div className="search-bar">
              <input className="search-bar-input shadow-out" type="text" placeholder="Search..."/>
              <SearchIcon className="icon" />
            </div>
          </div>
          <div className="dishes" >
            <div className="card" >
                <div className="card-image shadow-in" >
                    <img className="image" src={Meal} alt="" />
                </div>
                <div className="card-content shadow-out" >
                    <div className="card-heading" >
                        <h3 className="card-title" >This is meal</h3>
                        <button className="normal-button" >Read More..</button>
                    </div>
                    <p className="card-description shadow-in" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, odio.
                    </p>
                </div>
            </div>
            <div className="card" >
                <div className="card-image shadow-in" >
                    <img className="image" src={Meal} alt="" />
                </div>
                <div className="card-content shadow-out" >
                    <div className="card-heading" >
                        <h3 className="card-title" >This is meal</h3>
                        <button className="normal-button" >Read More..</button>
                    </div>
                    <p className="card-description shadow-in" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, odio.
                    </p>
                </div>
            </div>
            <div className="card" >
                <div className="card-image shadow-in" >
                    <img className="image" src={Meal} alt="" />
                </div>
                <div className="card-content shadow-out" >
                    <div className="card-heading" >
                        <h3 className="card-title" >This is meal</h3>
                        <button className="normal-button" >Read More..</button>
                    </div>
                    <p className="card-description shadow-in" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, odio.
                    </p>
                </div>
            </div>
            <div className="card" >
                <div className="card-image shadow-in" >
                    <img className="image" src={Meal} alt="" />
                </div>
                <div className="card-content shadow-out" >
                    <div className="card-heading" >
                        <h3 className="card-title" >This is meal</h3>
                        <button className="normal-button" >Read More..</button>
                    </div>
                    <p className="card-description shadow-in" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, odio.
                    </p>
                </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Home;
