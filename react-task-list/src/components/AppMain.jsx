export default function AppMain() {
    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];

    console.log(tasks);


    const current_task = tasks.filter(task => task.state !== "completed");
    const completed_task = tasks.filter(task => task.state === "completed");










    return (
        <main>


            <section className="current_task">
                <h2>
                    Current_task ({current_task.length})
                </h2>
                <ul className="current">
                    {current_task.map(task => <li key={task.id}>
                        <strong>
                            {task.title}
                        </strong>
                        <span>
                            {task.state}
                        </span>
                        <p>
                            {task.priority}
                        </p>
                        <p className="estimate">
                            {task.estimatedTime}
                        </p>



                    </li>)}
                </ul>
            </section>
            <hr />
            <section className="completed_task">
                <h2>
                    Completed_task ({completed_task.length})
                </h2>
                <ul className="completed">
                    {completed_task.map(task => <li key={task.id}>
                        <strong>
                            {task.title}
                        </strong>
                        <span>
                            {task.state}
                        </span>
                        <p>
                            {task.priority}
                        </p>
                        <p className="estimate">
                            {task.estimatedTime}
                        </p>


                    </li>)}
                </ul>
            </section>


            <p>welcome to my react app</p>
        </main>

    )
}