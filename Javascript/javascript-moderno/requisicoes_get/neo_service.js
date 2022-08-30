export async function getNeo() {
  const response = await fetch(
    "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_key",
  );
  const result = await response.json();
  return result["near_earth_objects"];
}
