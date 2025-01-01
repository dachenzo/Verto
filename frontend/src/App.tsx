//TASKLIST PAGE

// import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
// import Canvas from "./components/Canvas/Canvas";
// import ScreenBody from "./components/ScreenBody/ScreenBody";
// import Header from "./components/Header/Header";
// import SearchBar from "./components/SearchBar/SearchBar";
// import PageTitle from "./components/PageTitle/PageTitle";
// import TaskList from "./components/TaskList/TaskList";
// import ProfileAtHeader from "./components/ProfileAtHeader/ProfileAtHeader";
// import NewTask from "./components/NewTask/NewTask";
// import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
// import { useState } from "react";

// const [onScreen, setOnScreen] = useState(false);

//     const handleNewTaskClick = () => setOnScreen(!onScreen);

//     return (
//         <ScreenBody>
//             <LeftSideBar></LeftSideBar>
//             <Canvas>
//                 <Header>
//                     <SearchBar></SearchBar>
//                     <ProfileAtHeader></ProfileAtHeader>
//                 </Header>
//                 <Header>
//                     <PageTitle></PageTitle>
//                     <NewTask handleNewTaskClick={handleNewTaskClick}></NewTask>
//                     {onScreen && (
//                         <NewTaskForm
//                             handleClick={handleNewTaskClick}
//                         ></NewTaskForm>
//                     )}
//                 </Header>
//                 <TaskList></TaskList>
//             </Canvas>
//         </ScreenBody>
//     );

//LOGIN COMPONENTS

// import LoginImage from "./components/LoginImage/LoginImage";
// import FormCard from "./components/FormCard/FormCard";
// import SignUpForm from "./components/SignUpForm/SignUpForm";

// return (
//     <LoginImage>
//         <FormCard>
//             <SignUpForm></SignUpForm>
//         </FormCard>
//     </LoginImage>
// );

import TaskCalendar from "./components/Calendar/Calendar";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import Canvas from "./components/Canvas/Canvas";
import ScreenBody from "./components/ScreenBody/ScreenBody";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProfileAtHeader from "./components/ProfileAtHeader/ProfileAtHeader";
import DashHeader from "./components/DashHeader/DashHeader";
function App() {
    return (
        <ScreenBody>
            <LeftSideBar></LeftSideBar>
            <Canvas>
                <Header>
                    <SearchBar></SearchBar>
                    <ProfileAtHeader></ProfileAtHeader>
                </Header>
                <DashHeader></DashHeader>
                <TaskCalendar></TaskCalendar>
            </Canvas>
        </ScreenBody>
    );
}

export default App;
