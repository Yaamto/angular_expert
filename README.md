
# Angular expert 
## Présentation de la documentation

## 1. Setup du projet

Commencer par installer les dépendances : 
```
npm install
```
```
HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 0 }),
```
Le delay est mis à 0 pour éviter d'avoir un chargement trop long de l'api (initialement à 500ms), il était très gênant d'avoir un long temps au moment d'effectuer une action nécessitant une requête http
## 2. Base de données

**User** (id, nom, prénom, mail, password, date de naissance, isAdmin)
**SeanceDeSport** (id, dateDébut, dateFin, capaciteMax, idTheme, idTypeDeSport)
 Theme (id,libelle) 
**Etablissement**(id, nom, heureOpen, heureClose, adresse, ville, cp)
**SeanceDeSportEtablissement**(id, idSeance, idEtablissement)
**Reservation** (idUser, idSeanceDeSport, isConfirmed, isCanceled, isUpdated) NotificationReservation (message, idReservation) 
**TypeDeSéance**(id, libelle)
**notyfs**(id, message, idReservation)


## 3. Définitions des outils utilisés
**Compodoc :** Permet la documentation 
**Husky :** Permettant de rajouter un script avant de commit (dans notre cas on va lancer le linter)
**Eslint :** Le linter, permet de garantir un mininum de clean code
**Prettier :** Pour avoir un formatage équivalent avec les différents membres du groupes


## 4. Architecture

Nous avons utiliser l'architecture hexagonal comme mentionnée dans le tp, ainsi le pattern smart/dumb.

**Authentification**: Le module d'authentification dans le dossier *core*, permettant de gérer la connexion et la sécurité (guard)
**Workout**: Permet d'afficher les séances
**reservation**: Le module réservation permet de gérer ses réservations
**administration**: Ce n'est pas un module mais un dossier contenant tout les modules d'administration, on retrouvera les modules gérant les établissements et les séances de sport (CRUD)
**shared**: Ce module nous permet de partager tout les models ainsi que tout les services qui ont besoin d'être appeler dans différent modules, pour éviter de faire de la répétition de code.
**layout**: Nous retrouvons les différents layout comme la navbar.
**home**: le dossier home pour la page d'accueil

Nous avons choisi de créer un dossier admin à part avec tout ses modules, d'une part pour la cohérence du projet mais également pour éviter d'appeler un module lourd (ex: workouts public et admin) et donc séparer l'admin du public, ainsi nous pouvons exploiter toutes la force du lazy loading.

Pour le module d'authentification nous n'avons pas choisi de faire du lazy loading car nous avons besoin des guard et des informations de connexion pour la navbar, nous avons seulement appeler les composants dans le router module.

Nous avons nommée nos composant dumb avec un suffix "display" permettant de faire la différence avec le smart.

Pour l'authentificaiton, nous avons utilisé crypto-js car jsonwebtoken est inutilisable en front, j'ai essayé par tout les moyens.

## 5. Dictionnaire des routes

**Public**
- **/** : Page d'accueil 
- **/auth/login** : Page pour se connecter
- **/auth/register** : Pas pour s'enregistrer
- **/workouts** : Page qui liste toutes les séances de sport

**Connecté**

- **/reservations**: Page qui liste les réservations de l'utilisateur connecté

**Admin**

- **/admin/establishments**: Page d'administration listant les établissements
-  **/admin/establishments/create** : Permet la création et la modification d'un établissement (nous savons, le nom de la route n'est pas cohérent)
- **/admin/workouts**: Page d'administration listant les séances de sports
-  **/admin/workouts/create** : Permet la création et la modification d'une séance de sport


## 6. Listing des fonctionnalités 

- Authentification :
  - Login 
  - Register
  - Guards
 - Utilisateur : 
	  - Liste des séances de sport disponibles
	  - Filtrage des séances
	  - Liste des réservations de l'utilisateur
	  - Réservation d'une séance de sport
- Admin : 
  - Gestion des CRUD établissements
  - Gestion des CRUD séances de sports

- Affichage
  - NavBar
  - Notifications toasts lorsque nous réservons une séance.


## 7.Pour une meilleur application

Nous aurions voulu implémenter les différentes fonctionnalité attendu : 

- Mesure des performances
- Notifications 
- Change detection
- Une meilleur approche dans le code avec une meilleur qualité de code, manque de temps donc quelque fois nous avons bâclé.
- Un meilleur design
- Implémenter le système de réservation optimisé (consigne)


