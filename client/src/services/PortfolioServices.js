const baseURL = "https://stock-management-v5n4.vercel.app/api/shares//api/shares";

export const getHeldShares = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postNewShareAdd = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const editCurrentSharesDB = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json);
};

export const deleteShares = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
