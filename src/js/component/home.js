import React, { useState, useEffect } from "react";

//create your first component

export function Home() {
	const [isPause, setPause] = useState(true);
	const [time, setTime] = useState(0);
	const [time2, setTime2] = useState(0);
	const [time3, setTime3] = useState(0);
	const [time4, setTime4] = useState(0);
	const [time5, setTime5] = useState(0);
	const [time6, setTime6] = useState(0);
	const [id, setId] = useState(0);

	//useEffect(() => {
	//	setInterval(() => {
	//			setTime(time => time + 1);
	//		}, 1000);
	//}, []);

	useEffect(() => {
		let interval = null;
		if (isPause) {
			interval = setInterval(() => {
				setTime(time => time + 1);
			}, 1000);
		} else if (!isPause && time !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isPause, time]);

	if (time === 10) {
		setTime(0);
		setTime2(time2 + 1);
	}

	if (time2 === 10) {
		setTime2(0);
		setTime3(time3 + 1);
	}

	if (time3 === 10) {
		setTime3(0);
		setTime4(time4 + 1);
	}

	if (time4 === 10) {
		setTime4(0);
		setTime5(time5 + 1);
	}

	if (time5 === 10) {
		setTime5(0);
		setTime6(time6 + 1);
	}

	function MyStart() {
		setPause(!isPause);
	}

	function MyReset() {
		setTime(0);
		setTime2(0);
		setTime3(0);
		setTime4(0);
		setTime5(0);
		setTime6(0);
		setPause(isPause);
	}

	function MyStop() {
		setPause(!isPause);
	}

	return (
		<div className="text-center mt-5">
			<div className="row justify-content-center bg-secondary mr-5  ml-5">
				<div
					className="col-1 card bg-dark mr-2 mt-1 mb-1"
					style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>
						<i className="far fa-clock"></i>
					</h1>
				</div>

				<div
					className="col-1 card bg-dark mr-2  mt-1 mb-1"
					style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time6}</h1>
				</div>
				<div
					className="col-1 card bg-dark mr-2 mt-1 mb-1"
					style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time6}</h1>
				</div>
				<div
					className="col-1 card bg-dark mr-2 mt-1 mb-1"
					style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time5}</h1>
				</div>
				<div
					className="col-1 card bg-dark mr-2 mt-1 mb-1"
					style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time4}</h1>
				</div>
				<div
					className="col-1 card bg-dark mr-2 mt-1 mb-1"
					style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time3}</h1>
				</div>
				<div
					className="col-1 card bg-dark mr-2 mt-1 mb-1"
					style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time2}</h1>
				</div>

				<div
					className="col-1 card bg-dark mr-2 mt-1 mb-1"
					style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time}</h1>
				</div>
			</div>
			<button
				type="button"
				onClick={() => MyReset()}
				className="btn btn-primary mt-5 mr-1">
				Reset
			</button>
			<button
				type="button"
				onClick={() => MyStop()}
				className="btn btn-primary mt-5 mr-1">
				Stop
			</button>
			<button
				type="button"
				onClick={() => MyStart()}
				className="btn btn-primary mt-5">
				Start
			</button>
		</div>
	);
}
