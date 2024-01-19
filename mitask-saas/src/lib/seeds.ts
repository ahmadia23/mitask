import { unstable_noStore } from "next/cache";
import { Task } from "../../types/tasks";

export const taskSeedData: Task[] = [
  {
    id: "1",
    title: "Finaliser le rapport de projet",
    description:
      "Compléter et réviser le rapport final du projet avant la réunion de vendredi.",
    status: "En cours",
  },
  {
    id: "2",
    title: "Réunion avec l'équipe de développement",
    description:
      "Discuter des prochaines étapes du développement du produit avec l'équipe technique.",
    status: "Non démarré",
  },
  {
    id: "3",
    title: "Mise à jour du site web",
    description:
      "Mettre à jour la page d'accueil avec les dernières statistiques de vente.",
    status: "Terminé",
  },
  {
    id: "4",
    title: "Planifier la campagne marketing",
    description:
      "Créer un plan détaillé pour la prochaine campagne de marketing digital.",
    status: "Non démarré",
  },
  {
    id: "5",
    title: "Révision du budget trimestriel",
    description:
      "Examiner et ajuster les prévisions budgétaires pour le prochain trimestre.",
    status: "En cours",
  },
];

export const projectSeedData = [
  {
    projectId: "proj-1",
    title: "Développement de Produit",
    description:
      "Projet axé sur le développement et l'amélioration du produit principal.",
    tasks: [taskSeedData[0], taskSeedData[1]],
    image: "/marrakech.jpg",
  },
  {
    projectId: "proj-2",
    title: "Campagne Marketing",
    description:
      "Préparation et exécution de la prochaine grande campagne marketing.",
    tasks: [taskSeedData[2], taskSeedData[3]],
    image: "/tokyo.jpg",
  },
];

export const fetchTask = (id: string, tasks: Task[]) => {
  unstable_noStore();
  setTimeout(() => {}, 10000);
  return tasks.find((task: Task) => task.id === id);
};
