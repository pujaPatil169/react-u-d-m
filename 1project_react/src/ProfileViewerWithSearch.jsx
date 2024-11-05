// import { useState, useEffect } from "react";
// import ProfileSearchForm from "./ProfileSearchForm";

// const BASE_URL = "https://api.github.com/users";
// // github profile component --shows info from GH api

// export default function ProfileViewerWithSearch() {
//   const [username, setUsername] = useState("colt");
//   const [profile, setProfile] = useState({ data: null, isLoading: true });
//   useEffect(
//     (fetchUserOnUsernameChange = () => {
//       async function fetchUser() {
//         const response = await fetch(`${BASE_URL}/${username}`);
//         const searchResult = await response.json();
//         setProfile({ data: searchResult, isLoading: false });
//       }
//       fetchUser();
//     }),
//     [username]
//   );
//   function search(username) {
//     setUsername(username);
//     setProfile({ data: "null", isLoading: true });
//   }
//   return (
//     <div>
//       <ProfileSearchForm search={search} />
//       <b>{profile.data.name}</b>
//       {/* <img src=`${profile.data.avatar_url}` alt="" />----this is wrong you should not write it within quotes  */}
//       <img src={profile.data.avatar_url} />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users";

export default function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("colt");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`${BASE_URL}/${username}`);
      const searchResult = await response.json();
      setProfile({ data: searchResult, isLoading: false });
    }
    fetchUser();
  }, [username]);

  function search(newUsername) {
    setUsername(newUsername);
  }

  return (
    <div>
      <ProfileSearchForm search={search} />
      {profile.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <b>{profile.data.name}</b>
          <img
            src={profile.data.avatar_url}
            alt={`${profile.data.name}'s avatar`}
          />
        </div>
      )}
    </div>
  );
}
