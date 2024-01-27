import { AppDataSource } from "./config/db";
import { Task } from "./models/tasks/Task";

const additionalTaskSeedDataForNewProjects = [
  // Tasks for "Renouvellement des Infrastructures IT"
  {
    title: "Audit de l'infrastructure actuelle",
    description:
      "Conduire un audit complet des infrastructures IT actuelles pour identifier les besoins de mise à jour.",
    status: "open",
    deadline: new Date("2024-04-05T00:00:00Z"),
    projectId: "cf554912-0732-4c36-9099-68349d376e15",
  },
  {
    title: "Sélection des fournisseurs",
    description:
      "Identifier et sélectionner des fournisseurs pour le nouveau matériel et les logiciels.",
    status: "in_progress",
    deadline: new Date("2024-04-20T00:00:00Z"),
    projectId: "cf554912-0732-4c36-9099-68349d376e15",
  },
  {
    title: "Planification de la migration",
    description:
      "Planifier en détail le processus de migration vers la nouvelle infrastructure.",
    status: "open",
    deadline: new Date("2024-05-10T00:00:00Z"),
    projectId: "cf554912-0732-4c36-9099-68349d376e15",
  },

  // Tasks for "Lancement de Nouveau Produit"
  {
    title: "Développement du concept de produit",
    description:
      "Finaliser le concept et les spécifications du nouveau produit.",
    status: "in_progress",
    deadline: new Date("2024-05-01T00:00:00Z"),
    projectId: "80553fbc-4218-41f7-b378-ae507acb9ddf",
  },
  {
    title: "Plan de marketing et de vente",
    description:
      "Développer un plan de marketing et de vente complet pour le lancement du produit.",
    status: "open",
    deadline: new Date("2024-05-20T00:00:00Z"),
    projectId: "80553fbc-4218-41f7-b378-ae507acb9ddf",
  },
  {
    title: "Tests et assurance qualité",
    description:
      "Effectuer des tests rigoureux pour garantir la qualité du produit avant le lancement.",
    status: "open",
    deadline: new Date("2024-06-05T00:00:00Z"),
    projectId: "80553fbc-4218-41f7-b378-ae507acb9ddf",
  },
];

// You can add these tasks to your existing array or use them in your seeding process as needed.

const newProjectSeedData = [
  {
    title: "Renouvellement des Infrastructures IT",
    description:
      "Projet dédié à la mise à jour et à la modernisation de notre infrastructure informatique pour soutenir la croissance future.",
    image: "/it-infrastructure.jpg",
    deadline: new Date("2024-05-01T00:00:00Z"), // Z indicates UTC
  },
  {
    title: "Lancement de Nouveau Produit",
    description:
      "Coordonner le développement, la production et le lancement d'un nouveau produit sur le marché.",
    image: "/product-launch.jpg",
    deadline: new Date("2024-06-15T00:00:00Z"), // Z indicates UTC
  },
];

// You can use these project seeds to insert new projects into your database.

const createData = async () => {
  console.info("Starting database initialization...");

  try {
    // Initialize the database connection
    await AppDataSource.initialize();
    console.info("Database initialized.");

    console.info("Start inserting data...");

    // Your data insertion logic here
    const tasks = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Task)
      .values(additionalTaskSeedDataForNewProjects)
      .execute();

    console.log(tasks);
    console.log("Data insertion completed.");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Close the database connection when done
    await AppDataSource.destroy();
  }
};

console.info("Starting creating data...");
createData()
  .then(() => {
    console.info("Successfully created.");
    process.exit();
  })
  .catch((error) => {
    console.error("An error occurred during creation of instances.", error);
    process.exit();
  });
