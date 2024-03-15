import ProfileBanner from "../../../components/Dashboard/ProfileComponents/ProfileBanner/ProfileBanner";
import ProfileDetailsSection from "../../../components/Dashboard/ProfileComponents/ProfileDetailsSection/ProfileDetailsSection";
import UserDataComponent from "../../../data/user";

const ProfilePage = () => {
  const userData = UserDataComponent();
  return (
    <div>
      <ProfileBanner user={userData.user} />
      <ProfileDetailsSection user={userData} />
    </div>
  );
};

export default ProfilePage;
