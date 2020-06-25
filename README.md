# MyBuild API V0.1

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

# Build

// Voir son build GET : 
// Voir son build GET :

Poster son Buid POST : https://mybuild-api.herokuapp.com/api/users/0f71881b-df33-4a5b-a79b-3bdbab9918ad/build

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

JSON similaire au POST

Supprimer son build : 
