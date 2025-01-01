import useData from "./useData";

interface Task {
    description: string;
    title: string;
    deadline: string;
}

const useTasks = () => {
    return useData<Task>("/tasks");
};

export default useTasks;
