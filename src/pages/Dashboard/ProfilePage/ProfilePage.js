import ProfileBanner from "../../../components/Dashboard/ProfileComponents/ProfileBanner/ProfileBanner";
import ProfileDetailsSection from "../../../components/Dashboard/ProfileComponents/ProfileDetailsSection/ProfileDetailsSection";
import { user } from "../../../data/user";

const ProfilePage = () => {
  return (
    <div>
      <ProfileBanner user={user} />
      <ProfileDetailsSection user={user} />
    </div>
  );
};

export default ProfilePage;
