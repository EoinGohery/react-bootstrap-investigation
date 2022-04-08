export const getAllUsers = async() => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/users`)

    if(!response.ok) {
        throw new Error(response.json().message);
    }

    return response.json();
}