require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const API_KEY = process.env.API_KEY

app.get("/api/competitions", async (req, res) => {
    try {
        const resp = await fetch("https://api.football-data.org/v4/competitions", {
            headers: {
                "X-Auth-Token": API_KEY,
            },
        })

        if (!resp.ok) {
            return res.status(resp.status).json({
                error: `API error: ${resp.status}`
            })
        }
        const data = await resp.json()
        res.json(data)

    } catch (e) {
        res.status(500).json({ error: "server error" })
    }
})

app.get("/api/teams", async (req, res) => {
    try {
        const resp = await fetch("https://api.football-data.org/v4/teams", {
            headers: {
                "X-Auth-Token": API_KEY,
            },
        })
        if (!resp.ok) {
            return res.status(resp.status).json({
                error: `API error: ${resp.status}`
            })
        }
        const data = await resp.json()
        res.json(data)
    } catch (e) {
        res.status(500).json({ error: "server error" })
    }
})

app.get("/api/teams/:id/matches", async (req, res) => {
    const query = req.url.split("?")[1]
    try {
        const resp = await fetch(`https://api.football-data.org/v4/teams/${req.params.id}/matches${
            query ? "?" + query : ""
        }`, {
            headers: {
                "X-Auth-Token": API_KEY,
            },
        })
        if (!resp.ok) {
            return res.status(resp.status).json({
                error: `API error: ${resp.status}`
            })
        }
        const data = await resp.json()
        res.json(data)
    } catch (e) {
        res.status(500).json({ error: "server error" })
    }
})

app.get("/api/competitions/:id/matches", async (req, res) => {
    const query = req.url.split("?")[1]
    try {
        const resp = await fetch(`https://api.football-data.org/v4/competitions/${req.params.id}/matches${
            query ? "?" + query : ""
        }`, {
            headers: {
                "X-Auth-Token": API_KEY,
            },
        })
        if (!resp.ok) {
            return res.status(resp.status).json({
                error: `API error: ${resp.status}`
            })
        }
        const data = await resp.json()
        res.json(data)
    } catch (e) {
        res.status(500).json({ error: "server error" })
    }
})

app.listen(3001, () => {
  console.log("http://localhost:3001")
})