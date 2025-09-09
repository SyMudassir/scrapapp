// import { spTargets } from "../component/authConfig";

// /**
//  * Resolve siteId from hostname + sitePath
//  */
// export async function resolveSiteId(getToken) {
//   const token = await getToken();
//   const url = `https://graph.microsoft.com/v1.0/sites/${spTargets.hostname}:/${spTargets.sitePath}?$select=id`;
//   const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` }});
//   if (!res.ok) throw new Error("Failed to resolve siteId");
//   const data = await res.json();
//   return data.id;
// }

// /**
//  * Resolve driveId of a document library by name
//  */
// export async function resolveDriveId(getToken, siteId) {
//   const token = await getToken();
//   const res = await fetch(`https://graph.microsoft.com/v1.0/sites/${siteId}/drives`, {
//     headers: { Authorization: `Bearer ${token}` }
//   });
//   if (!res.ok) throw new Error("Failed to list drives");
//   const data = await res.json();
//   const drive = data.value.find(d => d.name.toLowerCase() === spTargets.libraryName.toLowerCase());
//   if (!drive) throw new Error(`Drive not found: ${spTargets.libraryName}`);
//   return drive.id;
// }

// /**
//  * Upload a file to the target library root (ScrapImages/<filename>)
//  */
// export async function uploadFileToLibrary(getToken, siteId, driveId, file) {
//   const token = await getToken();
//   const safeName = `${Date.now()}_${file.name}`.replace(/\s+/g, "_");
//   const url = `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root:/` +
//               `${encodeURIComponent(safeName)}:/content`;

//   const res = await fetch(url, {
//     method: "PUT",
//     headers: { Authorization: `Bearer ${token}` },
//     body: file
//   });
//   if (!res.ok) {
//     const t = await res.text();
//     throw new Error(`Upload failed: ${res.status} ${t}`);
//   }
//   const data = await res.json(); // driveItem
//   // Prefer data.webUrl (SharePoint UI link) or data["@microsoft.graph.downloadUrl"] (temporary)
//   return { webUrl: data.webUrl, name: data.name };
// }

// /**
//  * Resolve listId by name on the site
//  */
// export async function resolveListId(getToken, siteId) {
//   const token = await getToken();
//   const res = await fetch(`https://graph.microsoft.com/v1.0/sites/${siteId}/lists?$select=id,name`, {
//     headers: { Authorization: `Bearer ${token}` }
//   });
//   if (!res.ok) throw new Error("Failed to list lists");
//   const data = await res.json();
//   const list = data.value.find(l => l.name.toLowerCase() === spTargets.listName.toLowerCase());
//   if (!list) throw new Error(`List not found: ${spTargets.listName}`);
//   return list.id;
// }

// /**
//  * Create a list item in 'Schedules' with your fields
//  * fields payload keys must match internal names of your columns
//  */
// export async function createScheduleItem(getToken, siteId, listId, fields) {
//   const token = await getToken();
//   const res = await fetch(`https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       fields // { Category, Rate, ... ImageUrls }
//     })
//   });
//   if (!res.ok) {
//     const t = await res.text();
//     throw new Error(`Create item failed: ${res.status} ${t}`);
//   }
//   return await res.json();
// }
