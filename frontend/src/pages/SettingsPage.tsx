import Canvas from "../components/Canvas/Canvas";
import Header from "../components/HeaderComponents/Header/Header";
import ProfileAtHeader from "../components/HeaderComponents/ProfileAtHeader/ProfileAtHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import EmailSettings from "../components/SettingsPageComponents/EmailSettings/EmailSettings";
import SettingsCard from "../components/SettingsPageComponents/SettingsCard/SettingsCard";
import SettingsContainer from "../components/SettingsPageComponents/SettingsContainer/SettingsContainer";
import SettingsHeader from "../components/SettingsPageComponents/SettingsHeader/SettingsHeader";

const SettingsPage = () => {
    return (
        <Canvas>
            <Header>
                <SearchBar></SearchBar>
                <ProfileAtHeader></ProfileAtHeader>
            </Header>
            <SettingsContainer>
                <SettingsCard>
                    <SettingsHeader></SettingsHeader>
                    <EmailSettings></EmailSettings>
                </SettingsCard>
            </SettingsContainer>
        </Canvas>
    );
};

export default SettingsPage;
