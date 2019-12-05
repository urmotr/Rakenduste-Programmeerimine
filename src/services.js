const basePath = "/api/v1";

export const getItems = () => {
    return fetch(`${basePath}/items`)
        .then(res => {
            if(!res.ok) throw "getItems failed";
            return res.json();
        });
};

export const getItem = ({itemId}) => {
    return fetch(`${basePath}/items/${itemId}`)
        .then(res => {
            if(!res.ok) throw "getItem failed";
            return res.json();
        });
};

export const getUser = ({userId, token}) => {
    return fetch(`${basePath}/users/${userId}`, {
        headers:{
            "Autorization": `Bearer ${token}`
        }
    })
        .then(res => {
            if(!res.ok) throw "getUser failed";
            return res.json();
        });
};

export const addItemToCart = ({userId, itemId, token}) => {
    return fetch(`${basePath}/users/${userId}/cart/${itemId}`, {
        method: "PUT",
        headers:{
            "Autorization": `Bearer ${token}`
        }
    })
        .then(res => {
            if(!res.ok) throw "addItemToCart Failed";
            return true;
        });
};

export const removeItemFromCart = ({userId, itemId, token}) => {
    return fetch(`${basePath}/users/${userId}/cart/${itemId}`, {
        method: "DELETE",
        headers:{
            "Autorization": `Bearer ${token}`
        }
    })
        .then(res => {
            if(!res.ok) throw "removeItemFromCart Failed";
            return res.true;
        });
};

export const login = ({email, password}) => {
    return fetch(`${basePath}/auth/login`, {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
        .then(res => {
            if(!res.ok) throw "Login Failed";
            //console.log(res.json());
            return res.json();
        });
};

export const signup = ({email, password}) => {
    return fetch(`${basePath}/auth/signup`, {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
        .then(res => {
            if(!res.ok) throw "signup Failed";
            return res.json();
        });
};