import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    let storedUser = sessionStorage.getItem("userName");
    if (!storedUser || storedUser === "") {
      navigate('/');
    } else {
      setUser(storedUser);
    }
    console.log(storedUser); // Log the user inside the useEffect block
  }, [navigate]);

  return (
    <div>Home: {user}</div>
  );
}

export default Home;
