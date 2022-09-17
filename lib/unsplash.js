const URL =
  "https://api.unsplash.com/users/ademcan/photos?client_id=2MVAEFhhoaMaqGf3QztXpTbASdqS2pOobij6PLyHFZk";

async function getPhotos() {
  const res = await fetch(URL, {
    method: "get",
  });
  return await res.json();
}

export { getPhotos };
