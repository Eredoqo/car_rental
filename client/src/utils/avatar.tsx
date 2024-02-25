import { useEffect, useState } from "react";
// TODO
const AvatarComponent = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch("https://api.example.com/avatars");
        const data = await response.json();
        setAvatars(data);
      } catch (error) {
        console.error("Failed to fetch avatars:", error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <div>
      {avatars.map((avatar, index) => (
        <img key={index} src={avatar} />
      ))}
    </div>
  );
};

export default AvatarComponent;
