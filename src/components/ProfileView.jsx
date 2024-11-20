// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const ProfileView = () => {
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/profile/${user}`); // Fetch profile data from backend using user ID
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (user) fetchProfile(); //Only fetch if a user is logged in
  }, [user]);

  if (!profileData) return <p>Loading...</p>;

  return (
    <div>
      <h1>Your Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
      {/* ... other profile details ... */}
    </div>
  );
};

export default ProfileView;
