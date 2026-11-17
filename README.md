# ETAPE1:INITIALISATION DU PROJET
1.  Créez un nouveau projet React avec Vite nommé 03. 
Pour creer ce projet on se place d'abord sur le dossier ou on veut que notre projet soit puis on clique sur la barre de recherche : (code espace point pour pouvoir) l'ouvrir directement sur le vs code puis on fait ctrl+j pour ouvrir le terminal de ce dernier et on tape le code suivant: npm create vite@latest (plus le nom du projet c'est à dire 03) ensuite entrer une fois fini on choisit react puis javascriot plus compilateur et entrer. On attend quelques secondes et le projet est crée.
2. Nettoyez les fichiers inutiles et créez un dossier src/components.
Pour le nettoyage comme son nom l'indique on va dans le Apps.jsx on supprime tout. Pour la creation du dossier src/components :on se place dans le src puis clique droit et on choisit open folder et ce dossier on va le nomme "components".

# ETAPE2: Création du composant enfant BookCard.jsx 
La creation de cette derniere consiste à se placer dans le dossier componentes qui se trouve dans src et cliquez sur new file puis mettre le nom du composant enfant "BookCard.jsx".
Une fois creee on exporte par defaut la fonction qui se nomme BookCard on lui place comme parametres le titre, l'auteur, estDisponible (booléen) et onClickEmprunt (fonction). Ensuite dans une balise <div> on essaie de donner des valeurs à ces parametres.

# ETAPE3: Création du composant enfant BookCard.jsx 
La création du composant enfant BookCard.jsx se fait dans le src plus precisement dans le componentes. Une fois crée on export par defaut la fonction BookCard et on lui passe les parametre entre crochées(c'est la destructuration). Et comme parametres nous auront titre auteur estdisponible etc...

# ETAPE4: Interactivité et formulaire d'ajout
1. "Gestion de l'emprunt : Créez une fonction onClickEmprunt (bookId) qui inverse la valeur isAvailable du livre cliqué. Passez cette fonction en prop à BookCard". Elle consiste à changer le statut d’un livre quand on clique sur son bouton, en trois actions.Elle reçoit l’id du livre cliqué (bookId) et inverse son estDisponible :true (disponible) devient false (emprunté) ;false (emprunté) devient true (rendu).Seul le livre cliqué change, les autres restent identiques.Elle sert à savoir quel livre a été cliqué (grâce à l’id) et à mettre à jour l’état avec setBooks, pour que React réaffiche l’écran.
Pour le passage de cette fonction en prop à BookCard elle consiste à passer à l'evenement onClickEmprunt de la fonction handEmprunt le parametre suivant:book.id
Dans BookCard.jsx, le bouton appelle cette fonction au clic on affecte au bauton l'evenement onClickEmprunt
2. Pour la création d'un formulaire directement dans App.jsx avec deux champs contrôlés (useState) : un pour le titre et un pour l'auteur: on declare deux constantes juste apres la fonction app puis les constantes auront comme valeur le titre et l'auteur et les fonctions suivantes setTitre et setAuteur qui permettront de modifier (titre,auteur). Quand on l’appelle, React met à jour la valeur et réaffiche le composant. Le useState est un hook de React:une fonction qui donne de la mémoire à un composant.
Sans mémoire, une variable ordinaire est remise à zéro à chaque affichage du composant, et la modifier ne rafraîchit pas l’écran. Avec useState, React garde la valeur entre deux affichages, et la réaffiche quand elle change.
...book : copie toutes les propriétés du livre (id, titre, auteur, estDisponible)
3. Pour empecher le rechargement de la page on utilise "preventDefault".
"const nbDisponibles = books.filter((b) => b.estDisponible).length" Cette ligne compte combien de livres sont disponibles et range le résultat dans nbDisponibles. books.filter(...) : filter parcourt le tableau et garde seulement les éléments pour lesquels la condition est vraie. Il retourne un nouveau tableau. map transforme chaque élément et retourne un tableau de même taille.
filter garde certains éléments et retourne un tableau plus petit ou égal.
