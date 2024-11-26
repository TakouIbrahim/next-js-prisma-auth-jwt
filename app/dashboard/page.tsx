
import { logout } from "../api/auth/login/route";
import LogoutButton from "./logout-button";
// import { deleteSession } from '@/app/auth/02-stateless-session';

export default function Home() {
  const handleLogout = () => {
    async () => {
          await logout();
        }}
  

    
    return (
    <div className="min-h-screen flex flex-col">
      {/* Titre */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Titre de la Page</h1>
      </header>

      {/* Contenu principal */}
      <main className="flex-grow p-6 bg-gray-100 text-gray-800">
        <p className="text-lg">
          Bienvenue sur cette page exemple. Voici un contenu texte simple pour
          illustrer la mise en page d'une application utilisant Tailwind CSS.
          Ce contenu peut être remplacé par tout texte ou composant de votre
          choix.
        </p>
        <LogoutButton />
      </main>

      {/* Pied de page */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Mon Application. Tous droits réservés.</p>
      </footer>
    </div>
  );
  
};
  