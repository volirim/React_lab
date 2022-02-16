import getGamesData from "@/api/getMockapiData";
import store from "@/store/store";

async function getProfileImage() {
  const profileObject = await getGamesData(`/user/${store.getState().profile.id}`);
  return profileObject.source;
}

export default getProfileImage;
