# MyBuild API

Authentification : 

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
Profil : 

Voir son profil GET : https://mybuild-api.herokuapp.com/api/users/{uuid}
