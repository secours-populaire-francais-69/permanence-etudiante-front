# Styles

Les classes css utilisent une variante d'un regroupement de deux methodologies css [rscss](https://rscss.io/) et [bem](http://getbem.com/).

Une classe se découpe comme tel :

```
.[block].[element] -[modifier]
```

## Block

Le `block` est l'élément principal d'une classe, il peut-être vu comme un namespace ou un controller, les éléments étant les méthodes à l'intérieur.

- **scss** :

  ```
  .block {}
  ```

- **html** :
  ```html
  <div class="block"></div>
  ```

## Element

L'`element` est un enfant du block, d'ailleurs la nomenclature de la classe css reprend la façon dont on accède à une propriété d'un objet en javascript.

- **scss** :

  ```
  .block\.element {}
  ```

- **html** :
  ```html
  <div class="block.element"></div>
  ```

## Modifier

Le `modifier` est une classe qui viens ajouter ou modifier une règle css existante.
Elle s'applique sur `block` comme sur les `element`.

On peut avoir autant de `modifier` que nécessaire.

Un `modifier` doit représenter un état d'un élément, par exemple : `-big`, `-small` ou `-error`, `-success`.

- **scss** :

  ```
  .block .-modifier {}
  .block\.element .-modifier {}
  ```

- **html** :
  ```html
  <div class="block -modifier"></div>
  <div class="block.element -modifier"></div>
  ```

## Page

Un sélecteur spécifique à une page doit être préfixer par `p-*`, pour reconnaitre plus facilement, que la classe ne viens pas du style global et est scopé sur une page.

Le nom du fichier de la page doit suivre le préfix `p-*`, par exemple : `p-login`, signifie, le style de la page `login.component`
.

- **scss** :

  ```
  .p-[nom-de-page] {}
  ```

- **html** :
  ```html
  <div class="p-[nom-de-page]"></div>
  ```
