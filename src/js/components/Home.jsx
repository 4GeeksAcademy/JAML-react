import React from "react";
import Navbar from "./navbar/navbar";
import Card from "./card/card";
import Navinferior from "./navinferior/navinferior";
import Jumbotron from "./jumbotron/jumbotron";

const Home = () => {
	return (
		<>

			<div>
				<Navbar />
			</div>
			<div className="container">
			<div className="container-fluid my-5">
				<Jumbotron />
			</div>
			<div className="container-fluid d-flex justify-content-center h-100">
				<div className="row">
					<div className="col-md-3 my-2">
						<Card />
					</div>
					<div className="col-md-3 my-2">
						<Card />
					</div>
					<div className="col-md-3 my-2">
						<Card />
					</div>
					<div className="col-md-3 my-2">
						<Card />
					</div>
				</div>
			</div>
			</div>
			<div className="my-5">
				<Navinferior />
			</div>
		</>
	);
};

export default Home;