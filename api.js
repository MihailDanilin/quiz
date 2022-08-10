export function myHTTP() {
  return {
    get(url, cb) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => cb(data, null))
        .catch((error) => cb(null, error));
    },
  };
}
