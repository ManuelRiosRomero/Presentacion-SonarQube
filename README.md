## Instalación de SonarQube mediante Docker
[Documentación de SonarQube](https://docs.sonarqube.org/latest/)

[Instalación en Docker](https://docs.sonarqube.org/latest/setup-and-upgrade/install-the-server/)

[Try out SonarQube](https://docs.sonarqube.org/latest/try-out-sonarqube/)

1. Hacer pull a la imagen oficial de SonarQube
```bash
docker pull sonarqube
```
2. Crear los volumenes necesarios para prevenir la perdida de información al cambiar entre versiones de SonarQube.
```bash
docker volume create --name sonarqube_data
```
```bash
docker volume create --name sonarqube_logs
```
```bash
docker volume create --name sonarqube_extensions
```

## Ejecución del Programa
1.  Ejecuta SonarQube
```bash
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```
2. Abre el programa mediante http://localhost:9000
> al primer ingreso, tanto la contraseña como el usuario son "admin" se va a solicitar cambiar la contraseña pronto despues.



