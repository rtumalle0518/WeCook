import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/WeCookLogo.png";
import { useAuth } from "../contexts/AuthContext";

export default function NavigationBar() {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();

	async function handleLogout() {
		setError("");

		try {
			await logout();
		} catch {
			setError("Failed to log out");
		}
	}

	if (currentUser) {
		return (
			<>
				<Navbar sticky="top" bg="light">
					<Navbar.Brand href="WeCook" style={{ width: "auto" }}>
						<img
							src={logo}
							width="175"
							height="40"
							className="d-inline-block align-top"
							alt="We Cook Logo"
						/>
					</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/recipe">Recipes</Nav.Link>
						<Nav.Link href="/survey">Survey</Nav.Link>
						<Nav.Link href="/textbox">textbox</Nav.Link>
						<Nav.Link href="/userSurvey">User Survey</Nav.Link>
						<Nav.Link href="/userInfo">User Info</Nav.Link>
					</Nav>

					<Nav className="ml-auto">
						<Nav.Link href="/WeCook" onClick={handleLogout}>
							Log Out
						</Nav.Link>
					</Nav>
				</Navbar>
			</>
		);
	}

	return (
		<>
			<Navbar sticky="top" bg="light">
				<Navbar.Brand href="WeCook" style={{ width: "auto" }}>
					<img
						src={logo}
						width="175"
						height="40"
						className="d-inline-block align-top"
						alt="We Cook Logo"
					/>
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/cookbook">Cookbook</Nav.Link>
					{/*Comment off line below to get rid of survey button if user is not logged in*/}
					<Nav.Link href="/survey">Survey</Nav.Link>
					<Nav.Link href="/textbox">textbox</Nav.Link>
					<Nav.Link href="/userSurvey">User Survey</Nav.Link>
					<Nav.Link href="/userInfo">User Info</Nav.Link>
				</Nav>

				<Nav className="ml-auto">
					<Nav.Link href="/login">Log In</Nav.Link>
					<Nav.Link href="/signup">Sign Up</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
}
