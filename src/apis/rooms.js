const BASE_URL = 'http://localhost:8000/rooms';

function objectToUrlParams(obj) {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
}

async function getById(target, options = null) {
  const queries = objectToUrlParams(options ?? {});
  const res = await fetch(`${BASE_URL}/${target}${queries}`);
  if (!res.ok) throw new Error('fetch is failed');
  const users = await res.json();
  return users;
}

async function get() {
  const res = await fetch('http://localhost:8000/rooms');
  if (!res.ok) throw new Error('fetch is failed');
  const rooms = await res.json();
  return rooms;
}

async function post(content) {
  const res = await fetch(
    'http://localhost:8000/rooms',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    },
  );

  if (!res.ok) throw new Error('fetch is failed');
}

async function put(id, content) {
  const res = await fetch(
    `http://localhost:8000/rooms/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    },
  );

  if (!res.ok) throw new Error('fetch is failed');
}

const Rooms = {
  get, post, put, getById,
};

export default Rooms;
