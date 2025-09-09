// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const {
  PORT = 4000,
  AZURE_TENANT_ID = "c8d523a4-ea13-4df0-af1b-9f1da379e671",
  AZURE_CLIENT_ID = "e9fac39b-cc6d-4b01-9fde-c4bda2113695",
  AZURE_CLIENT_SECRET = "SmY8Q~scTKD3RAiymqw4sDsWWyDLU59zY5nLYafA",
  GRAPH_SITE_ID = "ddc9de31-ab3b-4346-b66d-661ae25d064f",
  GRAPH_LIST_ID = "2c6cfef1-0a46-49cb-ae20-2a8f27582123"
} = process.env;


/**
 * Get Microsoft Graph Access Token using client credentials flow
 */
async function getAccessToken() {
  const url = `https://login.microsoftonline.com/${AZURE_TENANT_ID}/oauth2/v2.0/token`;
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", AZURE_CLIENT_ID);
  params.append("client_secret", AZURE_CLIENT_SECRET);
  params.append("scope", "https://graph.microsoft.com/.default");

  const resp = await axios.post(url, params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
  return resp.data.access_token;
}

/**
 * Insert item into SharePoint list
 */

async function createListItem(accessToken, fields) {
  const url = `https://graph.microsoft.com/v1.0/sites/${GRAPH_SITE_ID}/lists/${GRAPH_LIST_ID}/items`;
  const body = { fields };

  const resp = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  });
  return resp.data;
}

/**
 * API endpoint
 */
app.post('/api/submitData', async (req, res) => {
  try {
    const { Title, Name } = req.body;

    if (!Title || !Name ) {
      return res.status(400).json({ success: false, message: "Title, Name, Email are required" });
    }

    // Map to SharePoint column internal names
    const fields = {
      Title: Title,
      Name: Name
    };

    const token = await getAccessToken();
    const created = await createListItem(token, fields);

    res.status(201).json({ success: true, item: created });
  }  catch (err) {
  console.error("Graph API Error full:", JSON.stringify(err.response?.data, null, 2));
  res.status(500).json({ 
    success: false, 
    error: err.response?.data || err.message 
  });
}
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
