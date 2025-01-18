import Canvas from "../components/Canvas/Canvas";
import Header from "../components/HeaderComponents/Header/Header";
import ProfileAtHeader from "../components/HeaderComponents/ProfileAtHeader/ProfileAtHeader";
import PersonalInfoCard from "../components/ProfilePageComponents/PersonalInfoCard/PersonalInfoCard";
import PersonalInformation from "../components/ProfilePageComponents/PersonalInformation/PersonalInformation";
import ProfileCard from "../components/ProfilePageComponents/ProfileCard/ProfileCard";
import ProfileContainer from "../components/ProfilePageComponents/ProfileContainer/ProfileContainer";
import ProfilePicture from "../components/ProfilePageComponents/ProfilePicture/ProfilePicture";
import ProfileStats from "../components/ProfilePageComponents/ProfileStats/ProfileStats";
import ProfileUsername from "../components/ProfilePageComponents/ProfileUsername/ProfileUsername";
import SearchBar from "../components/SearchBar/SearchBar";

const ProfilePage = () => {
    return (
        <Canvas>
            <Header>
                <SearchBar></SearchBar>
                <ProfileAtHeader></ProfileAtHeader>
            </Header>
            <ProfileContainer>
                <ProfileCard>
                    <ProfilePicture></ProfilePicture>
                    <ProfileUsername></ProfileUsername>
                    <ProfileStats></ProfileStats>
                </ProfileCard>
                <PersonalInfoCard>
                    <PersonalInformation></PersonalInformation>
                </PersonalInfoCard>
            </ProfileContainer>
        </Canvas>
    );
};

export default ProfilePage;
