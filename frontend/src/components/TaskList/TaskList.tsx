import Task from "../Task/Task";

const TaskList = () => {
    const tasks = [
        {
            title: "Create Landing Page UI",
            description:
                "Design and implement a visually appealing landing page for Verto’s main entry point. Ensure the page is responsive, includes the app’s branding, and communicates the core features.",
        },

        {
            title: "Set Up React Router",
            description:
                " Integrate React Router to handle navigation between different pages (Home, Tasks, Settings, etc.). Make sure routing is intuitive and that URL paths are clear.",
        },
    ];

    return (
        <div>
            {tasks.map((task) => (
                <Task title={task.title} description={task.description}></Task>
            ))}
        </div>
    );
};

export default TaskList;
