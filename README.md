# MyBuild API 

# Authentification : 

S'inscrire POST : https://mybuild-api.herokuapp.com/api/authenticate/signup

    {
        "firstname": ,
        "lastname": ,
        "username": ,
        "mail": ,
        "password": , 
        "passwordConfirmation":
    }
    
Se connecter POST : https://mybuild-api.herokuapp.com/api/authenticate/signin

    {
        "username": ,
        "password":  
    }

# Profil : 

Voir son profil GET : https://mybuild-api.herokuapp.com/api/users/{uuid}

Modifier son profil PUT : https://mybuild-api.herokuapp.com/api/users/{uuid}

    {
        "firstname": ,
        "lastname": ,
        "username": ,
        "mail": ,
        "password": , 
        "passwordConfirmation":
    }

# Build

Voir un build GET : https://mybuild-api.herokuapp.com/api/users/{uuid}/build/1

Voir les build selon le champion GET : https://mybuild-api.herokuapp.com/api/users/{uuid}/buildByChamp/{id_champion}

   - Cette partit est en cours de réalisation : problème pour envoyer un JSON des objet.

Poster un build POST : https://mybuild-api.herokuapp.com/api/users/{uuid}/build

    {
        "id_champ":,
        "item1":,
        "item2":,
        "item3":,
        "item4":,
        "item5":,
        "item6":,
        "sum1":,
        "sum2":,
        "rp1":,
        "rp2":,
        "rp3":,
        "rp4":,
        "rs1":,
        "rs2":,
        "rt1":,
        "rt2":,
        "rt3":,
        "commentaire": 
    }

Modifier son build PUT : https://mybuild-api.herokuapp.com/api/users/{uuid}/build/{id_build}

    {
        "id_champ":,
        "item1":,
        "item2":,
        "item3":,
        "item4":,
        "item5":,
        "item6":,
        "sum1":,
        "sum2":,
        "rp1":,
        "rp2":,
        "rp3":,
        "rp4":,
        "rs1":,
        "rs2":,
        "rt1":,
        "rt2":,
        "rt3":,
        "commentaire": 
    }
    
Supprimer son build DELETE : https://mybuild-api.herokuapp.com/api/users/{uuid}/build/{id_build}
