import useTasks from "../customHooks/useTasks";

const tempAPICallExample = () => {
    const { data, error } = useTasks();

    console.log(data, error);
    return <div>tempAPICallExample</div>;
};

export default tempAPICallExample;
