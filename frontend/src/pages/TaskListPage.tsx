import Canvas from "../components/Canvas/Canvas";
import Header from "../components/Header/Header";
import ProfileAtHeader from "../components/ProfileAtHeader/ProfileAtHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import TaskList from "../components/TaskList/TaskList";
import TaskListCard from "../components/TaskListCard/TaskListCard";
import TaskListFilters from "../components/TaskListFilters/TaskListFilters";

const TaskListPage = () => {
    return (
        <Canvas>
            <Header>
                <SearchBar></SearchBar>
                <ProfileAtHeader></ProfileAtHeader>
            </Header>
            <TaskListCard>
                <TaskListFilters></TaskListFilters>
                <TaskList></TaskList>
            </TaskListCard>
        </Canvas>
    );
};

export default TaskListPage;
