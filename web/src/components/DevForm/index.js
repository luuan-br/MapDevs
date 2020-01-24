/** @format */

import React, { useState, useEffect } from "react"
import "./styles.css"

// import api from "./services/api"

export default function DevForm({ onSubmit }) {
	const [latitude, setLatitude] = useState(0)
	const [longitude, setLongitude] = useState(0)
	const [github_username, setGithub_username] = useState("")
	const [techs, setTechs] = useState("")

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const { latitude, longitude } = position.coords

				setLatitude(latitude)
				setLongitude(longitude)
			},
			err => {
				console.log(err)
			},
			{
				timeout: 30000,
			}
		)
	}, [])

	async function handleSubmit(e) {
		e.preventDefault()

		await onSubmit({
			github_username,
			techs,
			latitude,
			latitude,
		})

		setGithub_username("")
		setTechs("")
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='inputBlock'>
				<label htmlFor='github_username'>Usuario do Github</label>
				<input
					name='github_username'
					id='github_username'
					type='text'
					required
					value={github_username}
					onChange={e => setGithub_username(e.target.value)}
				/>
			</div>

			<div className='inputBlock'>
				<label htmlFor='techs'>Tecnologias</label>
				<input
					name='techs'
					id='techs '
					type='text'
					required
					value={techs}
					onChange={e => setTechs(e.target.value)}
				/>
			</div>

			<div className='input-group'>
				<div className='inputBlock'>
					<label htmlFor='latitude'>Latitude</label>
					<input
						name='latitude'
						id='latitude'
						type='number'
						required
						value={latitude}
						onChange={e => setLatitude(e.target.value)}
					/>
				</div>

				<div className='inputBlock'>
					<label htmlFor='longitude'>Longitude</label>
					<input
						name='longitude'
						id='longitude'
						type='number'
						required
						value={longitude}
						onChange={e => setLongitude(e.target.value)}
					/>
				</div>
			</div>

			<button type='submit'>Salvar</button>
		</form>
	)
}
