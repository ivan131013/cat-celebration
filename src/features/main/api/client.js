export const postPayRespect = () => {
  return fetch("https://balls-celebration.onrender.com/f", {
    method: "POST",
  });
};

export const getPayRespect = () => {
  return fetch("https://balls-celebration.onrender.com/f", {
    method: "GET",
  });
};
